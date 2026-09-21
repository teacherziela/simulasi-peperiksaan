(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const LETTERS = ['A', 'B', 'C', 'D'];
  const STORAGE_KEY = 'historyverse_uasa_t1_attempts_v1';
  const FEEDBACK_KEY = 'historyverse_uasa_t1_feedback_v1';

  const state = {
    mode: 'full',
    questions: [],
    current: 0,
    answers: {},
    reviews: {},
    startedAt: null,
    secondsLeft: 50 * 60,
    timerId: null,
    student: { name: '', className: '' },
    result: null,
    optionMaps: {}
  };

  const els = {
    startScreen: $('#startScreen'), examScreen: $('#examScreen'), resultScreen: $('#resultScreen'),
    studentName: $('#studentName'), studentClass: $('#studentClass'), startBtn: $('#startBtn'), startError: $('#startError'),
    shuffleQuestions: $('#shuffleQuestions'), shuffleOptions: $('#shuffleOptions'),
    candidateLabel: $('#candidateLabel'), timer: $('#timer'), answeredCount: $('#answeredCount'), totalCount: $('#totalCount'), progressBar: $('#progressBar'), questionPalette: $('#questionPalette'),
    questionNumber: $('#questionNumber'), topicBadge: $('#topicBadge'), originalBadge: $('#originalBadge'), questionText: $('#questionText'), questionContext: $('#questionContext'), optionsList: $('#optionsList'),
    prevBtn: $('#prevBtn'), nextBtn: $('#nextBtn'), markReview: $('#markReview'), submitBtn: $('#submitBtn'), quitBtn: $('#quitBtn'),
    scoreRing: $('#scoreRing'), scoreValue: $('#scoreValue'), percentageValue: $('#percentageValue'), resultTitle: $('#resultTitle'), resultSummary: $('#resultSummary'),
    chapterBreakdown: $('#chapterBreakdown'), hardTopic: $('#hardTopic'), studentFeedback: $('#studentFeedback'), saveFeedbackBtn: $('#saveFeedbackBtn'), feedbackStatus: $('#feedbackStatus'),
    reviewSection: $('#reviewSection'), reviewList: $('#reviewList'), reviewBtn: $('#reviewBtn'), retryBtn: $('#retryBtn'), printBtn: $('#printBtn'),
    historyBtn: $('#historyBtn'), historyDialog: $('#historyDialog'), historyList: $('#historyList'), closeHistoryBtn: $('#closeHistoryBtn'), clearHistoryBtn: $('#clearHistoryBtn'),
    confirmDialog: $('#confirmDialog'), confirmCopy: $('#confirmCopy'), cancelSubmitBtn: $('#cancelSubmitBtn'), confirmSubmitBtn: $('#confirmSubmitBtn')
  };

  function shuffle(arr) {
    const out = [...arr];
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function escapeHTML(value = '') {
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));
  }

  function currentMode() {
    return document.querySelector('input[name="mode"]:checked')?.value || 'full';
  }

  function buildQuestions() {
    const bank = window.QUESTION_BANK || [];
    let picked;
    if (state.mode === 'focus') {
      picked = bank.filter(q => q.source === 'baru'); // 30 soalan = 15 topik x 2
    } else {
      picked = [...bank]; // semua 50, termasuk 20 asal wajib
    }
    if (els.shuffleQuestions.checked) picked = shuffle(picked);
    return picked.map(q => ({...q, options: [...q.options]}));
  }

  function buildOptionMaps() {
    state.optionMaps = {};
    state.questions.forEach(q => {
      const order = [0,1,2,3];
      state.optionMaps[q.id] = els.shuffleOptions.checked ? shuffle(order) : order;
    });
  }

  function startExam() {
    const name = els.studentName.value.trim();
    const className = els.studentClass.value.trim();
    if (!name || !className) {
      els.startError.textContent = 'Isi nama dan kelas dulu ya. Jangan bagi calon misteri masuk dewan. 😄';
      return;
    }
    els.startError.textContent = '';
    state.mode = currentMode();
    state.student = { name, className };
    state.questions = buildQuestions();
    state.current = 0;
    state.answers = {};
    state.reviews = {};
    state.startedAt = new Date();
    state.secondsLeft = state.mode === 'full' ? 50 * 60 : 30 * 60;
    state.result = null;
    buildOptionMaps();
    els.startScreen.classList.add('hidden');
    els.resultScreen.classList.add('hidden');
    els.examScreen.classList.remove('hidden');
    els.candidateLabel.textContent = `${name} · ${className}`;
    els.totalCount.textContent = state.questions.length;
    renderPalette();
    renderQuestion();
    startTimer();
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function startTimer() {
    clearInterval(state.timerId);
    updateTimer();
    state.timerId = setInterval(() => {
      state.secondsLeft -= 1;
      updateTimer();
      if (state.secondsLeft <= 0) {
        clearInterval(state.timerId);
        submitExam(true);
      }
    }, 1000);
  }

  function updateTimer() {
    const mins = Math.max(0, Math.floor(state.secondsLeft / 60));
    const secs = Math.max(0, state.secondsLeft % 60);
    els.timer.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function renderPalette() {
    els.questionPalette.innerHTML = state.questions.map((q, idx) => {
      const answered = state.answers[q.id] !== undefined;
      const review = !!state.reviews[q.id];
      return `<button type="button" data-index="${idx}" class="${answered ? 'answered ' : ''}${review ? 'review ' : ''}${idx === state.current ? 'active' : ''}">${idx + 1}</button>`;
    }).join('');
    els.questionPalette.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
      state.current = Number(btn.dataset.index);
      renderQuestion();
    }));
    const answeredCount = Object.keys(state.answers).filter(id => state.answers[id] !== undefined).length;
    els.answeredCount.textContent = answeredCount;
    els.progressBar.style.width = `${(answeredCount / state.questions.length) * 100}%`;
  }

  function renderQuestion() {
    const q = state.questions[state.current];
    if (!q) return;
    els.questionNumber.textContent = `Soalan ${state.current + 1} / ${state.questions.length}`;
    els.topicBadge.textContent = `${q.chapter} · ${q.topic}`;
    els.originalBadge.classList.toggle('hidden', q.source !== 'asal');
    els.questionText.textContent = q.question;
    els.markReview.checked = !!state.reviews[q.id];

    if (q.context?.length) {
      els.questionContext.innerHTML = q.context.map(item => `<div>${escapeHTML(item)}</div>`).join('');
      els.questionContext.classList.remove('hidden');
    } else {
      els.questionContext.classList.add('hidden');
      els.questionContext.innerHTML = '';
    }

    const order = state.optionMaps[q.id] || [0,1,2,3];
    els.optionsList.innerHTML = order.map((originalIndex, visualIndex) => {
      const selected = state.answers[q.id] === originalIndex;
      return `<button type="button" class="option-btn ${selected ? 'selected' : ''}" data-original-index="${originalIndex}">
        <span class="option-letter">${LETTERS[visualIndex]}</span>
        <span>${escapeHTML(q.options[originalIndex])}</span>
      </button>`;
    }).join('');

    els.optionsList.querySelectorAll('.option-btn').forEach(btn => btn.addEventListener('click', () => {
      state.answers[q.id] = Number(btn.dataset.originalIndex);
      renderQuestion();
      renderPalette();
    }));

    els.prevBtn.disabled = state.current === 0;
    els.nextBtn.textContent = state.current === state.questions.length - 1 ? 'Semak sebelum hantar →' : 'Seterusnya →';
    renderPalette();
  }

  function requestSubmit() {
    const unanswered = state.questions.filter(q => state.answers[q.id] === undefined).length;
    els.confirmCopy.textContent = unanswered
      ? `Masih ada ${unanswered} soalan belum dijawab. Boleh hantar juga, tetapi soalan kosong dikira salah.`
      : 'Semua soalan telah dijawab. Markah akan disemak serta-merta.';
    els.confirmDialog.showModal();
  }

  function submitExam(auto = false) {
    clearInterval(state.timerId);
    if (els.confirmDialog.open) els.confirmDialog.close();
    const correctIds = [];
    const chapterStats = {};
    const topicStats = {};

    state.questions.forEach(q => {
      const correct = state.answers[q.id] === q.answer;
      if (correct) correctIds.push(q.id);
      if (!chapterStats[q.chapter]) chapterStats[q.chapter] = { correct: 0, total: 0 };
      if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
      chapterStats[q.chapter].total += 1;
      topicStats[q.topic].total += 1;
      if (correct) {
        chapterStats[q.chapter].correct += 1;
        topicStats[q.topic].correct += 1;
      }
    });

    const score = correctIds.length;
    const total = state.questions.length;
    const percentage = Math.round((score / total) * 100);
    const finishedAt = new Date();
    const secondsUsed = Math.max(0, ((state.mode === 'full' ? 50 : 30) * 60) - state.secondsLeft);
    state.result = { score, total, percentage, chapterStats, topicStats, finishedAt, secondsUsed, auto };
    saveAttempt();
    showResults();
  }

  function resultMessage(pct) {
    if (pct >= 85) return ['Cemerlang!', 'Penguasaan objektif sangat kuat. Semak juga soalan yang tersilap supaya perangkap kecil tidak ulang lagi.'];
    if (pct >= 70) return ['Bagus!', 'Asas sudah kuat. Fokuskan ulang kaji pada topik yang peratusnya lebih rendah.'];
    if (pct >= 50) return ['Teruskan latihan!', 'Banyak yang sudah betul, tetapi masih ada beberapa topik yang perlu diperkukuh sebelum peperiksaan sebenar.'];
    return ['Jom baiki satu-satu.', 'Gunakan bahagian semakan untuk lihat jawapan betul dan kenal pasti topik yang paling perlu diulang kaji.'];
  }

  function showResults() {
    els.examScreen.classList.add('hidden');
    els.startScreen.classList.add('hidden');
    els.resultScreen.classList.remove('hidden');
    const r = state.result;
    const [title, message] = resultMessage(r.percentage);
    els.scoreRing.style.setProperty('--pct', r.percentage);
    els.scoreValue.textContent = `${r.score}/${r.total}`;
    els.percentageValue.textContent = `${r.percentage}%`;
    els.resultTitle.textContent = title;
    const mins = Math.floor(r.secondsUsed / 60);
    const secs = r.secondsUsed % 60;
    els.resultSummary.textContent = `${state.student.name} (${state.student.className}) memperoleh ${r.score} daripada ${r.total} markah dalam ${mins} minit ${secs} saat. ${message}`;
    renderBreakdown();
    renderReview('all');
    populateHardTopics();
    els.reviewSection.classList.add('hidden');
    els.feedbackStatus.textContent = '';
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function renderBreakdown() {
    const stats = state.result.chapterStats;
    const keys = Object.keys(stats).sort((a,b) => Number(a.replace(/\D/g,'')) - Number(b.replace(/\D/g,'')));
    els.chapterBreakdown.innerHTML = keys.map(ch => {
      const s = stats[ch];
      const pct = Math.round((s.correct / s.total) * 100);
      return `<div class="break-item"><span>${escapeHTML(ch)}</span><div class="break-bar"><i style="width:${pct}%"></i></div><b>${s.correct}/${s.total}</b></div>`;
    }).join('');
  }

  function populateHardTopics() {
    const stats = state.result.topicStats;
    const sorted = Object.entries(stats).sort((a,b) => (a[1].correct/a[1].total) - (b[1].correct/b[1].total));
    els.hardTopic.innerHTML = sorted.map(([topic, s]) => `<option value="${escapeHTML(topic)}">${escapeHTML(topic)} — ${s.correct}/${s.total}</option>`).join('');
  }

  function renderReview(filter = 'all') {
    const cards = state.questions.map((q, idx) => {
      const selected = state.answers[q.id];
      const correct = selected === q.answer;
      const isReviewed = !!state.reviews[q.id];
      if (filter === 'wrong' && correct) return '';
      if (filter === 'review' && !isReviewed) return '';
      const selectedText = selected === undefined ? 'Tidak dijawab' : q.options[selected];
      return `<article class="review-card ${correct ? 'correct' : 'wrong'}">
        <div class="question-meta"><span class="pill">Soalan ${idx + 1}</span><span class="subtle-pill">${escapeHTML(q.chapter)} · ${escapeHTML(q.topic)}</span>${q.source === 'asal' ? '<span class="source-pill">SOALAN ASAL</span>' : ''}</div>
        <h4>${escapeHTML(q.question)}</h4>
        ${q.context?.length ? `<div class="context-box">${q.context.map(c => `<div>${escapeHTML(c)}</div>`).join('')}</div>` : ''}
        <div class="review-answer">Jawapan murid: <b class="${correct ? 'good-text' : 'wrong-text'}">${selected === undefined ? '—' : `${LETTERS[selected]}. ${escapeHTML(selectedText)}`}</b></div>
        <div class="review-answer">Jawapan betul: <b class="good-text">${LETTERS[q.answer]}. ${escapeHTML(q.options[q.answer])}</b></div>
        <div class="review-answer">Pembetulan: ${escapeHTML(q.explanation || '')}</div>
      </article>`;
    }).join('');
    els.reviewList.innerHTML = cards || '<p class="lead">Tiada soalan dalam penapis ini.</p>';
  }

  function saveAttempt() {
    const attempts = readJSON(STORAGE_KEY, []);
    attempts.unshift({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: state.student.name,
      className: state.student.className,
      mode: state.mode,
      score: state.result.score,
      total: state.result.total,
      percentage: state.result.percentage,
      date: state.result.finishedAt.toISOString(),
      topicStats: state.result.topicStats
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts.slice(0, 20)));
  }

  function saveFeedback() {
    if (!state.result) return;
    const feedbacks = readJSON(FEEDBACK_KEY, []);
    const item = {
      name: state.student.name,
      className: state.student.className,
      score: state.result.score,
      total: state.result.total,
      percentage: state.result.percentage,
      hardTopic: els.hardTopic.value,
      feedback: els.studentFeedback.value.trim(),
      date: new Date().toISOString(),
      answers: state.questions.map(q => ({
        id: q.id,
        chapter: q.chapter,
        topic: q.topic,
        selected: state.answers[q.id] ?? null,
        correct: q.answer,
        isCorrect: state.answers[q.id] === q.answer
      }))
    };
    feedbacks.unshift(item);
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbacks.slice(0, 50)));
    els.feedbackStatus.textContent = 'Refleksi disimpan pada peranti ini. ✓';
  }

  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch { return fallback; }
  }

  function openHistory() {
    const attempts = readJSON(STORAGE_KEY, []);
    if (!attempts.length) {
      els.historyList.innerHTML = '<p class="lead">Belum ada rekod percubaan pada peranti ini.</p>';
    } else {
      els.historyList.innerHTML = attempts.map(a => {
        const d = new Date(a.date);
        return `<div class="history-row"><div><b>${escapeHTML(a.name)} · ${escapeHTML(a.className)}</b><small>${d.toLocaleString('ms-MY')} · ${a.mode === 'full' ? 'Simulasi penuh' : 'Fokus topik'}</small></div><div class="history-score">${a.score}/${a.total}<br><small>${a.percentage}%</small></div></div>`;
      }).join('');
    }
    els.historyDialog.showModal();
  }

  function retry() {
    els.resultScreen.classList.add('hidden');
    els.startScreen.classList.remove('hidden');
    els.studentName.value = state.student.name;
    els.studentClass.value = state.student.className;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  // UI bindings
  $$('.mode-card input').forEach(input => input.addEventListener('change', () => {
    $$('.mode-card').forEach(card => card.classList.toggle('selected', card.querySelector('input').checked));
  }));
  els.startBtn.addEventListener('click', startExam);
  els.prevBtn.addEventListener('click', () => { if (state.current > 0) { state.current--; renderQuestion(); } });
  els.nextBtn.addEventListener('click', () => {
    if (state.current < state.questions.length - 1) { state.current++; renderQuestion(); }
    else requestSubmit();
  });
  els.markReview.addEventListener('change', () => {
    const q = state.questions[state.current];
    state.reviews[q.id] = els.markReview.checked;
    renderPalette();
  });
  els.submitBtn.addEventListener('click', requestSubmit);
  els.cancelSubmitBtn.addEventListener('click', () => els.confirmDialog.close());
  els.confirmSubmitBtn.addEventListener('click', () => submitExam(false));
  els.quitBtn.addEventListener('click', () => {
    if (confirm('Keluar daripada simulasi? Jawapan semasa tidak akan disimpan.')) {
      clearInterval(state.timerId);
      els.examScreen.classList.add('hidden');
      els.startScreen.classList.remove('hidden');
    }
  });
  els.reviewBtn.addEventListener('click', () => {
    els.reviewSection.classList.toggle('hidden');
    if (!els.reviewSection.classList.contains('hidden')) els.reviewSection.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
  els.retryBtn.addEventListener('click', retry);
  els.printBtn.addEventListener('click', () => window.print());
  els.saveFeedbackBtn.addEventListener('click', saveFeedback);
  els.historyBtn.addEventListener('click', openHistory);
  els.closeHistoryBtn.addEventListener('click', () => els.historyDialog.close());
  els.clearHistoryBtn.addEventListener('click', () => {
    if (confirm('Padam semua rekod simulasi pada peranti ini?')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(FEEDBACK_KEY);
      openHistory();
    }
  });
  $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderReview(btn.dataset.filter);
  }));
})();
