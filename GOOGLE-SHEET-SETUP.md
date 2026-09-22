# Sambungan Google Sheet — Simulasi UASA

Portal dan simulasi kekal di GitHub Pages. Google Apps Script hanya digunakan sebagai penghantar data ke Google Sheet **DATA SUARA MURID HISTORYVERSE**.

## 1. Apps Script
Buka Google Sheet **DATA SUARA MURID HISTORYVERSE** → Extensions → Apps Script.

Gantikan/masukkan kod daripada `apps-script/Code.gs`.

Deploy sebagai **Web app**:
- Execute as: Me
- Who has access: Anyone
- Salin URL yang berakhir dengan `/exec`

## 2. Sambungkan ke GitHub
Buka `data-config.js` dan isi:

```js
window.HISTORYVERSE_DATA_URL = 'URL_WEB_APP_YANG_BERAKHIR_EXEC';
```

Selepas commit, simulasi akan menghantar:
- nama
- kelas
- tingkatan
- Set A–D
- markah /20
- peratus
- masa menjawab
- prestasi Bab 1–10
- topik paling mencabar
- refleksi murid

Data masuk ke tab **SIMULASI UASA**. Dashboard cikgu berada pada tab **DASHBOARD SIMULASI**.
