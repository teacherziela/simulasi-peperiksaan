(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];
  const LETTERS = ['A', 'B', 'C', 'D'];
  const STORAGE_KEY = 'historyverse_uasa_attempts_v2';
  const FEEDBACK_KEY = 'historyverse_uasa_feedback_v2';

  const state = {
    mode: 'A',
    formLevel: '1',
    questions: [],
    current: 0,
    answers: {},
    reviews: {},
    startedAt: null,
    secondsLeft: 25 * 60,
    timerId: null,
    student: { name: '', className: '' },
    result: null,
    optionMaps: {}
  };

  const els = {
    startScreen: $('#startScreen'), examScreen: $('#examScreen'), resultScreen: $('#resultScreen'),
    studentName: $('#studentName'), studentClass: $('#studentClass'), startBtn: $('#startBtn'), startError: $('#startError'), levelLead: $('#levelLead'), ticketForm: $('#ticketForm'),
    shuffleQuestions: $('#shuffleQuestions'), shuffleOptions: $('#shuffleOptions'),
    candidateLabel: $('#candidateLabel'), timer: $('#timer'), answeredCount: $('#answeredCount'), totalCount: $('#totalCount'), progressBar: $('#progressBar'), questionPalette: $('#questionPalette'),
    questionNumber: $('#questionNumber'), topicBadge: $('#topicBadge'), questionText: $('#questionText'), questionContext: $('#questionContext'), optionsList: $('#optionsList'),
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
    return document.querySelector('input[name="mode"]:checked')?.value || 'A';
  }

  function currentFormLevel() {
    return document.querySelector('.level-card.selected')?.dataset.level || '1';
  }

  function setFormLevel(level) {
    Array.from(document.querySelectorAll('.level-card')).forEach(card => {
      const active = card.dataset.level === String(level);
      card.classList.toggle('selected', active);
      card.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    updateLevelUI();
  }

  function updateLevelUI() {
    const level = currentFormLevel();
    if (els.ticketForm) els.ticketForm.textContent = level;
    if (els.levelLead) els.levelLead.innerHTML = `Set mengandungi <strong>20 soalan objektif</strong> daripada pelbagai topik Sejarah Tingkatan ${level}. Susunan soalan dirawakkan, pilihan jawapan munasabah dan markah disemak secara automatik.`;
    if (els.studentClass) els.studentClass.placeholder = `Contoh: ${level} Adil`;
  }

  function buildQuestions() {
    const bank = state.formLevel === '2' ? (window.QUESTION_BANK_T2 || []) : (window.QUESTION_BANK || []);
    let picked = [];
    if (state.formLevel === '2') {
      // Tingkatan 2: tepat 2 soalan bagi setiap Bab 1–10 = 20 soalan.
      // Set dicampur antara item fakta, stimulus, sebab-akibat dan aplikasi.
      const patterns = { A: [0, 3], B: [1, 4], C: [2, 0], D: [2, 4] };
      const chosen = patterns[state.mode] || patterns.A;
      const chapters = Array.from(new Set(bank.map(q => q.chapter)));
      chapters.forEach(chapter => {
        const chapterItems = bank.filter(q => q.chapter === chapter);
        chosen.forEach(index => {
          if (chapterItems[index]) picked.push(chapterItems[index]);
        });
      });
    } else {
      // Tingkatan 1: empat set 20 soalan daripada bank sedia ada.
      const starts = { A: 0, B: 10, C: 20, D: 30 };
      const start = starts[state.mode] ?? 0;
      picked = bank.slice(start, start + 20);
      if (picked.length < 20) picked = [...picked, ...bank.slice(0, 20 - picked.length)];
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
    state.formLevel = currentFormLevel();
    state.student = { name, className };
    state.questions = buildQuestions();
    state.current = 0;
    state.answers = {};
    state.reviews = {};
    state.startedAt = new Date();
    state.secondsLeft = 25 * 60;
    state.result = null;
    buildOptionMaps();
    els.startScreen.classList.add('hidden');
    els.resultScreen.classList.add('hidden');
    els.examScreen.classList.remove('hidden');
    els.candidateLabel.textContent = `${name} · ${className} · Tingkatan ${state.formLevel}`;
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

    // Fallback selector supaya paparan soalan tetap berfungsi walaupun browser
    // masih menyimpan HTML lama dalam cache GitHub Pages.
    const questionNumberEl = els.questionNumber || document.getElementById('questionNumber') || document.querySelector('.question-meta .pill');
    const topicBadgeEl = els.topicBadge || document.getElementById('topicBadge') || document.querySelector('.question-meta .subtle-pill');
    const questionTextEl = els.questionText || document.getElementById('questionText') || document.querySelector('.question-panel h2');
    const questionContextEl = els.questionContext || document.getElementById('questionContext') || document.querySelector('.question-panel .context-box');
    const optionsListEl = els.optionsList || document.getElementById('optionsList') || document.querySelector('.question-panel .options-list');
    const markReviewEl = els.markReview || document.getElementById('markReview') || document.querySelector('.question-panel input[type="checkbox"]');

    if (questionNumberEl) questionNumberEl.textContent = `Soalan ${state.current + 1} / ${state.questions.length}`;
    if (topicBadgeEl) topicBadgeEl.textContent = `${q.chapter} · ${q.topic}`;
    if (questionTextEl) questionTextEl.textContent = q.question ?? q.text ?? q.prompt ?? 'Soalan tidak dapat dimuatkan.';
    if (markReviewEl) markReviewEl.checked = !!state.reviews[q.id];

    if (questionContextEl) {
      if (q.context?.length) {
        questionContextEl.innerHTML = q.context.map(item => `<div>${escapeHTML(item)}</div>`).join('');
        questionContextEl.classList.remove('hidden');
      } else {
        questionContextEl.classList.add('hidden');
        questionContextEl.innerHTML = '';
      }
    }

    const order = state.optionMaps[q.id] || [0,1,2,3];
    if (optionsListEl) {
      optionsListEl.innerHTML = order.map((originalIndex, visualIndex) => {
        const selected = state.answers[q.id] === originalIndex;
        return `<button type="button" class="option-btn ${selected ? 'selected' : ''}" data-original-index="${originalIndex}">
          <span class="option-letter">${LETTERS[visualIndex]}</span>
          <span>${escapeHTML(q.options[originalIndex])}</span>
        </button>`;
      }).join('');

      optionsListEl.querySelectorAll('.option-btn').forEach(btn => btn.addEventListener('click', () => {
        state.answers[q.id] = Number(btn.dataset.originalIndex);
        renderQuestion();
        renderPalette();
      }));
    }

    if (els.prevBtn) els.prevBtn.disabled = state.current === 0;
    if (els.nextBtn) els.nextBtn.textContent = state.current === state.questions.length - 1 ? 'Semak sebelum hantar →' : 'Seterusnya →';
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
    const secondsUsed = Math.max(0, (25 * 60) - state.secondsLeft);
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
    els.resultSummary.textContent = `${state.student.name} (${state.student.className}, Tingkatan ${state.formLevel}) memperoleh ${r.score} daripada ${r.total} markah dalam ${mins} minit ${secs} saat. ${message}`;
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
        <div class="question-meta"><span class="pill">Soalan ${idx + 1}</span><span class="subtle-pill">${escapeHTML(q.chapter)} · ${escapeHTML(q.topic)}</span></div>
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
      formLevel: state.formLevel,
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
      formLevel: state.formLevel,
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
        return `<div class="history-row"><div><b>${escapeHTML(a.name)} · ${escapeHTML(a.className)}</b><small>${d.toLocaleString('ms-MY')} · Tingkatan ${a.formLevel || '1'} · Set ${a.mode || 'A'}</small></div><div class="history-score">${a.score}/${a.total}<br><small>${a.percentage}%</small></div></div>`;
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
  Array.from(document.querySelectorAll('.mode-card input[name="mode"]')).forEach(input => input.addEventListener('change', () => {
    Array.from(document.querySelectorAll('.mode-card')).filter(card => card.querySelector('input[name="mode"]')).forEach(card => card.classList.toggle('selected', card.querySelector('input').checked));
  }));
  Array.from(document.querySelectorAll('.level-card')).forEach(card => card.addEventListener('click', () => setFormLevel(card.dataset.level)));
  setFormLevel('1');
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
