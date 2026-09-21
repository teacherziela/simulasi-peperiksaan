# HistoryVerse — Simulasi UASA Sejarah Tingkatan 1

Modul statik (HTML/CSS/JS) yang boleh dibuka terus atau dimasukkan sebagai satu folder dalam projek HistoryVerse.

## Kandungan
- 50 soalan objektif A–D.
- 50 soalan objektif pelbagai topik untuk simulasi penuh.
- 30 soalan latihan fokus disusun sebagai 15 topik x 2 soalan.
- Dua mod:
  1. **Simulasi Penuh** — semua 50 soalan.
  2. **Fokus Topik** — 30 soalan, dua bagi setiap 15 topik.
- Rawak susunan soalan dan pilihan jawapan.
- Pemasa 50 minit (simulasi penuh) / 30 minit (fokus topik).
- Palet nombor soalan, tanda untuk semak, kira soalan dijawab.
- Semakan automatik: markah, peratus, prestasi mengikut bab, jawapan betul/salah dan pembetulan.
- “Suara Murid”: murid pilih topik paling mencabar dan tulis refleksi.
- Rekod percubaan dan refleksi disimpan dalam `localStorage` peranti.

## Cara guna
1. Buka `index.html` terus dalam pelayar, atau host folder ini di GitHub Pages / Netlify.
2. Untuk masuk ke HistoryVerse, letakkan folder ini sebagai contoh:
   `historyverse/simulasi-uasa-t1/`
3. Pautkan daripada menu HistoryVerse ke:
   `simulasi-uasa-t1/index.html`

## Nota integrasi Google Sheet / “Suara Murid” live
Versi ini sengaja menyimpan rekod pada peranti supaya terus berfungsi tanpa backend. Jika mahu hantar keputusan setiap murid ke Google Sheet yang sama seperti modul Suara Murid, sambungkan fungsi `saveFeedback()` dalam `app.js` kepada URL Google Apps Script Web App dan hantarkan objek `item` sebagai payload.

Cadangan kolum Sheet:
`Timestamp | Nama | Kelas | Mod | Markah | Jumlah | Peratus | Topik Sukar | Komen | JSON Jawapan`
