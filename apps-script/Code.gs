const SPREADSHEET_ID = '1i28jcIxSonjOap2mWGL5qHbI2b3k0d7wBukfblZP2zs';
const SHEET_NAME = 'SIMULASI UASA';

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, app: 'HistoryVerse Simulasi UASA' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payload = JSON.parse((e.postData && e.postData.contents) || '{}');
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Sheet SIMULASI UASA tidak ditemui.');

    const action = payload.action === 'reflection' ? 'reflection' : 'attempt';
    const attemptKey = String(payload.attemptKey || '').trim();
    if (!attemptKey) throw new Error('Attempt ID tiada.');

    const row = findAttemptRow_(sheet, attemptKey);

    if (action === 'reflection') {
      if (!row) throw new Error('Rekod percubaan tidak ditemui.');

      sheet.getRange(row, 11).setValue(String(payload.hardTopic || '').trim());
      sheet.getRange(row, 12).setValue(String(payload.reflection || '').trim());
      sheet.getRange(row, 23).setValue(String(payload.reflection || '').trim() ? 'Lengkap' : 'Belum');
      sheet.getRange(row, 24).setValue(new Date());

      return json_({ ok: true, saved: 'reflection', attemptKey });
    }

    const stats = payload.chapterStats || {};
    const values = [
      new Date(),
      attemptKey,
      String(payload.name || '').trim(),
      String(payload.className || '').trim(),
      Number(payload.formLevel || 0),
      String(payload.setCode || '').trim(),
      Number(payload.score || 0),
      Number(payload.total || 20),
      Number(payload.percentage || 0),
      Number(payload.secondsUsed || 0),
      '',
      '',
      statText_(stats['Bab 1']),
      statText_(stats['Bab 2']),
      statText_(stats['Bab 3']),
      statText_(stats['Bab 4']),
      statText_(stats['Bab 5']),
      statText_(stats['Bab 6']),
      statText_(stats['Bab 7']),
      statText_(stats['Bab 8']),
      statText_(stats['Bab 9']),
      statText_(stats['Bab 10']),
      'Belum',
      new Date()
    ];

    if (row) {
      sheet.getRange(row, 1, 1, values.length).setValues([values]);
    } else {
      sheet.appendRow(values);
    }

    return json_({ ok: true, saved: 'attempt', attemptKey });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function findAttemptRow_(sheet, attemptKey) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  const finder = sheet
    .getRange(2, 2, lastRow - 1, 1)
    .createTextFinder(attemptKey)
    .matchEntireCell(true)
    .findNext();

  return finder ? finder.getRow() : 0;
}

function statText_(stat) {
  if (!stat) return '';
  return Number(stat.correct || 0) + '/' + Number(stat.total || 0);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
