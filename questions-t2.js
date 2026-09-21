// Bank soalan Tingkatan 2 berdasarkan kandungan HISTORYVERSE 360 sedia ada.
// Pilihan jawapan disusun semula secara deterministik supaya kedudukan jawapan betul tidak sentiasa A.
(() => {
  const RAW = [
    // BAB 1 — Kerajaan Alam Melayu
    { chapter:'Bab 1', topic:'Konsep Alam Melayu', question:'Apakah asas persamaan masyarakat Alam Melayu?', options:['Bahasa dan budaya','Cuaca sejuk','Tulisan Latin sahaja','Satu bentuk muka bumi'], explanation:'Masyarakat Alam Melayu berkongsi persamaan bahasa dan budaya serumpun.' },
    { chapter:'Bab 1', topic:'Kerajaan Alam Melayu', question:'Yang manakah kerajaan Alam Melayu?', options:['Srivijaya','Rom','Mesir Purba','Athens'], explanation:'Srivijaya ialah antara kerajaan penting di Alam Melayu.' },
    { chapter:'Bab 1', topic:'Kerajaan Masyhur', question:'Kerajaan Angkor berpusat di negara mana hari ini?', options:['Kemboja','Malaysia','Filipina','Brunei'], explanation:'Pusat kerajaan Angkor berada di wilayah yang kini merupakan Kemboja.' },
    { chapter:'Bab 1', topic:'Kerajaan Masyhur', question:'Apakah kerajaan yang terkenal sebagai pusat perdagangan maritim?', options:['Srivijaya','Sparta','Gupta','Qin'], explanation:'Srivijaya berkembang sebagai kerajaan maritim dan pusat perdagangan penting.' },
    { chapter:'Bab 1', topic:'Hubungan dengan Kerajaan Luar', question:'Bagaimanakah hubungan dengan kerajaan luar dijalinkan?', options:['Perdagangan dan diplomatik','Peperangan sahaja','Pertanian sahaja','Pengasingan'], explanation:'Hubungan luar terjalin melalui perdagangan, agama dan diplomatik.' },

    // BAB 2 — Sistem Pemerintahan dan Kegiatan Ekonomi
    { chapter:'Bab 2', topic:'Sistem Pemerintahan', question:'Siapakah tonggak utama pemerintahan kerajaan Alam Melayu?', options:['Raja','Petani','Pedagang asing','Ketua tentera luar'], explanation:'Raja menjadi tonggak utama pemerintahan kerajaan Alam Melayu.' },
    { chapter:'Bab 2', topic:'Pentadbiran Pusat dan Wilayah', question:'Siapakah yang membantu raja mentadbir kerajaan?', options:['Pembesar','Pengembara','Hamba sahaja','Pedagang China'], explanation:'Pembesar membantu raja mengurus pentadbiran pusat dan wilayah.' },
    { chapter:'Bab 2', topic:'Pertanian', question:'Apakah tanaman utama masyarakat Angkor?', options:['Padi','Gandum','Zaitun','Anggur'], explanation:'Penanaman padi menjadi kegiatan pertanian penting masyarakat Angkor.' },
    { chapter:'Bab 2', topic:'Hasil Hutan', question:'Yang manakah hasil hutan Alam Melayu?', options:['Gaharu','Kapas Mesir','Zaitun','Papirus'], explanation:'Gaharu ialah antara hasil hutan yang bernilai di Alam Melayu.' },
    { chapter:'Bab 2', topic:'Perdagangan dan Pelabuhan', question:'Mengapakah pelabuhan penting?', options:['Pusat pertukaran barangan','Tempat pertanian padi','Pusat penternakan','Tempat pengebumian'], explanation:'Pelabuhan berfungsi sebagai pusat pertukaran barangan tempatan dan luar serta persinggahan pedagang.' },

    // BAB 3 — Sosiobudaya
    { chapter:'Bab 3', topic:'Bahasa', question:'Apakah bahasa utama perhubungan di Alam Melayu?', options:['Bahasa Melayu','Bahasa Latin','Bahasa Yunani','Bahasa Perancis'], explanation:'Bahasa Melayu digunakan sebagai bahasa utama perhubungan di Alam Melayu.' },
    { chapter:'Bab 3', topic:'Tulisan', question:'Yang manakah tulisan yang digunakan di Alam Melayu?', options:['Pallava','Kuneiform','Hieroglif','Rumi Rom'], explanation:'Tulisan Pallava ialah antara tulisan yang digunakan dalam perkembangan masyarakat Alam Melayu.' },
    { chapter:'Bab 3', topic:'Persuratan', question:'Apakah bukti perkembangan persuratan?', options:['Batu bersurat','Akueduk','Piramid','Senjata api'], explanation:'Batu bersurat merupakan antara bukti perkembangan persuratan.' },
    { chapter:'Bab 3', topic:'Seni Bina', question:'Candi Borobudur merupakan contoh apa?', options:['Seni bina','Kegiatan pertanian','Sistem tulisan','Struktur tentera'], explanation:'Candi Borobudur ialah contoh pencapaian seni bina masyarakat Alam Melayu.' },
    { chapter:'Bab 3', topic:'Struktur Sosial', question:'Siapakah yang termasuk dalam golongan pemerintah?', options:['Raja dan pembesar','Petani dan nelayan','Hamba','Pedagang kecil'], explanation:'Golongan pemerintah terdiri daripada raja dan pembesar.' },

    // BAB 4 — Agama, Kepercayaan dan Warisan
    { chapter:'Bab 4', topic:'Animisme', question:'Apakah kepercayaan terhadap roh pada benda dan alam?', options:['Animisme','Demokrasi','Monarki','Nasionalisme'], explanation:'Animisme ialah kepercayaan bahawa unsur alam atau benda mempunyai roh.' },
    { chapter:'Bab 4', topic:'Dinamisme', question:'Apakah maksud dinamisme?', options:['Kepercayaan terhadap kekuatan ghaib','Sistem perdagangan','Tulisan batu','Pemerintahan rakyat'], explanation:'Dinamisme merujuk kepercayaan terhadap kekuatan atau kuasa ghaib.' },
    { chapter:'Bab 4', topic:'Kedatangan Islam', question:'Agama apakah yang tersebar melalui pedagang Arab dan India?', options:['Islam','Shinto','Taoisme','Judaisme'], explanation:'Islam berkembang di Alam Melayu antaranya melalui hubungan perdagangan dengan pedagang Arab dan India.' },
    { chapter:'Bab 4', topic:'Peranan Pemerintah', question:'Apakah peranan pemerintah dalam perkembangan agama?', options:['Membina tempat ibadat','Menghapuskan persuratan','Menutup pelabuhan','Melarang seni bina'], explanation:'Pemerintah membantu perkembangan agama, antaranya melalui pembinaan tempat ibadat.' },
    { chapter:'Bab 4', topic:'Keunikan Warisan', question:'Mengapakah warisan Alam Melayu unik?', options:['Pengaruh luar disesuaikan dengan budaya tempatan','Menolak semua budaya','Tiada perubahan','Berasal dari satu kerajaan sahaja'], explanation:'Masyarakat Alam Melayu menyesuaikan pengaruh luar dengan budaya tempatan sehingga membentuk identiti tersendiri.' },

    // BAB 5 — Kesultanan Melayu Melaka
    { chapter:'Bab 5', topic:'Pengasasan Melaka', question:'Siapakah pengasas Kesultanan Melayu Melaka?', options:['Parameswara','Sultan Alauddin','Raja Ali','Asoka'], explanation:'Parameswara mengasaskan Kesultanan Melayu Melaka sekitar tahun 1400.' },
    { chapter:'Bab 5', topic:'Lokasi Strategik', question:'Mengapakah lokasi Melaka strategik?', options:['Terletak di Selat Melaka','Berada di puncak gunung','Tiada pedagang','Jauh dari laut'], explanation:'Kedudukan Melaka di Selat Melaka menguntungkan perdagangan dan pelayaran.' },
    { chapter:'Bab 5', topic:'Pentadbiran', question:'Apakah sistem pentadbiran Melaka?', options:['Pembesar Empat Lipatan','Demokrasi Athens','Sistem kabilah','Republik'], explanation:'Sistem Pembesar Empat Lipatan menjadi asas penting pentadbiran Kesultanan Melayu Melaka.' },
    { chapter:'Bab 5', topic:'Perundangan', question:'Undang-undang manakah berkaitan peraturan pelayaran?', options:['Undang-Undang Laut Melaka','Piagam Madinah','Kod Hammurabi','Hukum Rom'], explanation:'Undang-Undang Laut Melaka mengandungi peraturan berkaitan pelayaran dan kegiatan di laut.' },
    { chapter:'Bab 5', topic:'Pengakhiran Melaka', question:'Siapakah yang menawan Melaka pada 1511?', options:['Portugis','Belanda','British','Siam'], explanation:'Portugis menawan Melaka pada tahun 1511.' },

    // BAB 6 — Kesultanan Johor Riau
    { chapter:'Bab 6', topic:'Pengasasan Johor Riau', question:'Siapakah pengasas Kesultanan Johor Riau?', options:['Raja Ali','Parameswara','Raja Melewar','Sultan Muzaffar Shah'], explanation:'Raja Ali, putera Sultan Mahmud Shah, mengasaskan Kesultanan Johor Riau pada tahun 1528.' },
    { chapter:'Bab 6', topic:'Pengasasan Johor Riau', question:'Apakah gelaran Raja Ali selepas menjadi sultan?', options:['Sultan Alauddin Riayat Shah I','Sultan Mansur Shah','Sultan Zainal Abidin','Sultan Muhammad Jiwa'], explanation:'Raja Ali memakai gelaran Sultan Alauddin Riayat Shah I.' },
    { chapter:'Bab 6', topic:'Cabaran Johor Riau', question:'Apakah kuasa Eropah yang menjadi cabaran utama Johor Riau?', options:['Portugis','British','Perancis','Sepanyol'], explanation:'Portugis merupakan antara cabaran utama yang dihadapi Johor Riau.' },
    { chapter:'Bab 6', topic:'Kegemilangan Perdagangan', question:'Mengapakah Johor Riau menjadi pusat perdagangan?', options:['Pelabuhan strategik dan cekap','Tiada cukai langsung','Tiada pesaing','Terletak di pedalaman'], explanation:'Kedudukan strategik dan pengurusan pelabuhan yang cekap membantu Johor Riau berkembang sebagai pusat perdagangan.' },
    { chapter:'Bab 6', topic:'Persuratan', question:'Siapakah yang menyusun Sulalatus Salatin?', options:['Tun Sri Lanang','Bendahara Tun Perak','Hang Nadim','Munshi Abdullah'], explanation:'Tun Sri Lanang dikaitkan dengan penyusunan karya Sulalatus Salatin.' },

    // BAB 7 — Pahang, Perak, Terengganu dan Selangor
    { chapter:'Bab 7', topic:'Pengasasan Kesultanan', question:'Siapakah pengasas Kesultanan Pahang?', options:['Raja Muhammad','Raja Ali','Raja Melewar','Raja Syed Hussin'], explanation:'Kesultanan Pahang diasaskan oleh Raja Muhammad.' },
    { chapter:'Bab 7', topic:'Pengasasan Kesultanan', question:'Siapakah pengasas Kesultanan Perak?', options:['Raja Muzaffar','Raja Muhammad','Parameswara','Sultan Zainal Abidin'], explanation:'Kesultanan Perak diasaskan oleh Raja Muzaffar.' },
    { chapter:'Bab 7', topic:'Warisan Melaka', question:'Apakah warisan utama Kesultanan Melayu Melaka?', options:['Pemerintahan beraja','Republik','Sistem polis Yunani','Pemerintahan kabilah'], explanation:'Pemerintahan beraja diteruskan oleh kesultanan-kesultanan Melayu selepas Melaka.' },
    { chapter:'Bab 7', topic:'Agama', question:'Apakah agama yang menjadi asas kesultanan Melayu?', options:['Islam','Shinto','Taoisme','Judaisme'], explanation:'Islam menjadi asas penting dalam kehidupan dan pemerintahan kesultanan Melayu.' },
    { chapter:'Bab 7', topic:'Warisan Kesultanan', question:'Bagaimanakah warisan kesultanan dipelihara?', options:['Melalui adat, undang-undang dan persuratan','Dengan menolak tradisi','Menghapuskan institusi raja','Menutup hubungan luar'], explanation:'Warisan kesultanan dipelihara melalui adat istiadat, perundangan dan persuratan.' },

    // BAB 8 — Kedah, Kelantan, Negeri Sembilan dan Perlis
    { chapter:'Bab 8', topic:'Negeri Sembilan', question:'Siapakah pemerintah awal Negeri Sembilan dari Pagar Ruyung?', options:['Raja Melewar','Raja Ali','Parameswara','Sultan Muzaffar'], explanation:'Raja Melewar dari Pagar Ruyung diterima sebagai pemerintah Negeri Sembilan pada abad ke-18.' },
    { chapter:'Bab 8', topic:'Perlis', question:'Perlis pada asalnya sebahagian daripada negeri apa?', options:['Kedah','Kelantan','Pahang','Selangor'], explanation:'Perlis pada asalnya merupakan sebahagian daripada Kedah.' },
    { chapter:'Bab 8', topic:'Perlis', question:'Siapakah pemerintah Perlis yang menggunakan gelaran Raja?', options:['Raja Syed Hussin Jamalullail','Raja Muhammad','Raja Ali','Raja Melewar'], explanation:'Raja Syed Hussin Jamalullail menjadi pemerintah Perlis dengan gelaran Raja.' },
    { chapter:'Bab 8', topic:'Hubungan Antara Negeri', question:'Bagaimanakah hubungan antara negeri diperkukuh?', options:['Perkahwinan diraja','Pengasingan','Larangan perdagangan','Memutuskan diplomatik'], explanation:'Perkahwinan diraja menjadi salah satu cara memperkukuh hubungan antara negeri.' },
    { chapter:'Bab 8', topic:'Perdagangan', question:'Apakah manfaat hubungan perdagangan?', options:['Meningkatkan kemakmuran','Melemahkan ekonomi','Menghapuskan pelabuhan','Mengurangkan barangan'], explanation:'Hubungan perdagangan membantu meningkatkan kemakmuran negeri.' },

    // BAB 9 — Warisan Kedah, Kelantan, Negeri Sembilan dan Perlis
    { chapter:'Bab 9', topic:'Warisan Kedah', question:'Apakah alat muzik diraja yang menjadi warisan Kedah?', options:['Nobat','Gamelan Jawa','Piano','Biola'], explanation:'Nobat ialah alat muzik diraja yang menjadi salah satu warisan Kesultanan Kedah.' },
    { chapter:'Bab 9', topic:'Adat Perpatih', question:'Adat Perpatih berasaskan keturunan sebelah siapa?', options:['Ibu','Bapa','Raja','Pembesar'], explanation:'Adat Perpatih berasaskan sistem keturunan sebelah ibu.' },
    { chapter:'Bab 9', topic:'Pemerintahan Negeri Sembilan', question:'Siapakah yang memilih Yang di-Pertuan Besar?', options:['Undang Yang Empat','Pedagang','Tentera','Rakyat asing'], explanation:'Yang di-Pertuan Besar dipilih oleh Undang Yang Empat.' },
    { chapter:'Bab 9', topic:'Adat Perpatih', question:'Apakah unit kekeluargaan penting dalam Adat Perpatih?', options:['Suku','Polis','Dinasti','Legion'], explanation:'Suku ialah unit penting dalam struktur masyarakat Adat Perpatih.' },
    { chapter:'Bab 9', topic:'Permuafakatan', question:'Apakah asas membuat keputusan dalam Adat Perpatih?', options:['Permuafakatan','Paksaan','Peperangan','Undian pedagang'], explanation:'Permuafakatan menjadi asas penting dalam proses membuat keputusan.' },

    // BAB 10 — Sarawak dan Sabah
    { chapter:'Bab 10', topic:'Sarawak dalam Alam Melayu', question:'Sarawak pernah dipengaruhi oleh kesultanan apa?', options:['Brunei','Melaka sahaja','Pahang','Perak'], explanation:'Sarawak mempunyai hubungan dan pengaruh daripada Kesultanan Brunei.' },
    { chapter:'Bab 10', topic:'Sabah dalam Alam Melayu', question:'Sabah mempunyai hubungan dengan kesultanan apa?', options:['Sulu dan Brunei','Rom dan Yunani','Qin dan Han','Maurya dan Gupta'], explanation:'Sabah mempunyai hubungan dengan Kesultanan Sulu dan Brunei.' },
    { chapter:'Bab 10', topic:'Pemerintahan Tempatan', question:'Siapakah pemimpin utama sesebuah rumah panjang?', options:['Tuai Rumah','Laksamana','Syahbandar','Bendahara'], explanation:'Tuai Rumah menjadi pemimpin utama sesebuah rumah panjang.' },
    { chapter:'Bab 10', topic:'Kegiatan Ekonomi', question:'Yang manakah kegiatan ekonomi masyarakat Sarawak dan Sabah?', options:['Mengutip hasil hutan','Membina piramid','Menghasilkan papirus','Menanam zaitun'], explanation:'Mengutip hasil hutan ialah antara kegiatan ekonomi masyarakat Sarawak dan Sabah.' },
    { chapter:'Bab 10', topic:'Keunikan Masyarakat Bumiputera', question:'Apakah yang menunjukkan keunikan masyarakat bumiputera?', options:['Adat, tarian dan kraftangan','Satu bahasa sahaja','Tiada perayaan','Tiada rumah tradisional'], explanation:'Keunikan masyarakat bumiputera terserlah melalui adat, tarian, muzik, kraftangan dan bentuk rumah tradisional.' }
  ];

  window.QUESTION_BANK_T2 = RAW.map((q, index) => {
    const shift = index % 4;
    const options = q.options.slice(shift).concat(q.options.slice(0, shift));
    return {
      id: `t2-q-${String(index + 1).padStart(2, '0')}`,
      ...q,
      options,
      answer: (4 - shift) % 4,
      practiceSet: (index % 5) < 3
    };
  });
})();