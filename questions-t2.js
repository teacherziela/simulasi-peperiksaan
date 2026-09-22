// SEJARAH TINGKATAN 2 — bank objektif standard peperiksaan.
// Setiap bab mempunyai 5 item: 2 aras rendah, 2 aras sederhana, 1 aras tinggi.
// Aplikasi membina setiap set 20 soalan dengan agihan 8 rendah + 8 sederhana + 4 tinggi.
// Label aras ini tidak dipaparkan kepada murid.
window.QUESTION_BANK_T2 = [
  // ================= BAB 1 =================
  {
    id:'t2-b1-e1', chapter:'Bab 1', topic:'Konsep Alam Melayu', level:'rendah',
    question:'Apakah maksud Alam Melayu?',
    options:[
      'Kawasan tanah besar Asia Tenggara sahaja',
      'Kawasan kepulauan Asia Tenggara sahaja',
      'Kawasan yang merangkumi kepulauan dan tanah besar Asia Tenggara',
      'Kawasan Asia Tenggara yang berada di bawah pengaruh Barat'
    ],
    answer:2,
    explanation:'Alam Melayu merangkumi gugusan kepulauan dan tanah besar Asia Tenggara.'
  },
  {
    id:'t2-b1-e2', chapter:'Bab 1', topic:'Konsep Alam Melayu', level:'rendah',
    question:'Siapakah tokoh Barat yang mengemukakan konsep Alam Melayu?',
    options:['George Coedès','Alfred Russel Wallace','Paul Wheatley','R. O. Winstedt'],
    answer:1,
    explanation:'Alfred Russel Wallace ialah antara tokoh Barat yang mengemukakan konsep Alam Melayu.'
  },
  {
    id:'t2-b1-m1', chapter:'Bab 1', topic:'Kerajaan Masyhur', level:'sederhana',
    question:'Maklumat berikut berkaitan peluasan kuasa kerajaan Funan.',
    context:['Funan berjaya menguasai wilayah di bahagian selatan Myanmar.'],
    options:[
      'Menguasai jalan perdagangan yang penting',
      'Memindahkan pusat pemerintahan ke kawasan pedalaman',
      'Mengurangkan hubungan dengan pedagang asing',
      'Menghentikan kegiatan perdagangan maritim'
    ],
    answer:0,
    explanation:'Penguasaan wilayah strategik membantu Funan menguasai laluan perdagangan utama.'
  },
  {
    id:'t2-b1-m2', chapter:'Bab 1', topic:'Kerajaan Masyhur', level:'sederhana',
    question:'Siapakah pengasas kerajaan Srivijaya pada tahun 683 M?',
    options:['Jayavarman II','Patih Gajah Mada','Dapunta Hyang Sri Jayanasa','Sangramadhananjaya'],
    answer:2,
    explanation:'Dapunta Hyang Sri Jayanasa dikaitkan dengan pengasasan dan peluasan Srivijaya pada abad ketujuh.'
  },
  {
    id:'t2-b1-h1', chapter:'Bab 1', topic:'Kegemilangan Kerajaan Alam Melayu', level:'tinggi',
    question:'Bagaimanakah kedudukan kerajaan seperti Funan dan Srivijaya membantu kerajaan tersebut menjadi masyhur?',
    options:[
      'Mengawal laluan perdagangan strategik dan membina hubungan dengan kerajaan luar',
      'Mengurangkan kemasukan pedagang bagi melindungi pasaran tempatan',
      'Menumpukan kegiatan ekonomi kepada pertanian sara diri sahaja',
      'Memindahkan petempatan utama jauh daripada sungai dan pesisir'
    ],
    answer:0,
    explanation:'Kedudukan strategik membolehkan kerajaan menguasai laluan perdagangan dan membina hubungan luar yang mengukuhkan kemasyhuran.'
  },

  // ================= BAB 2 =================
  {
    id:'t2-b2-e1', chapter:'Bab 2', topic:'Sistem Pemerintahan', level:'rendah',
    question:'Apakah sistem pemerintahan yang diamalkan oleh kerajaan-kerajaan Alam Melayu?',
    options:['Oligarki','Autokrasi','Demokrasi langsung','Pemerintahan beraja'],
    answer:3,
    explanation:'Kerajaan Alam Melayu mengamalkan sistem pemerintahan beraja.'
  },
  {
    id:'t2-b2-e2', chapter:'Bab 2', topic:'Kegiatan Pertanian', level:'rendah',
    question:'Pemerintah Angkor membina baray. Apakah kepentingan binaan tersebut?',
    options:[
      'Memastikan bekalan air mencukupi untuk pertanian',
      'Menjadi pusat penyimpanan barang dagangan',
      'Menjadi kubu utama pertahanan kerajaan',
      'Menjadi tempat kediaman golongan pembesar'
    ],
    answer:0,
    explanation:'Baray ialah takungan air yang penting untuk kegiatan pertanian.'
  },
  {
    id:'t2-b2-m1', chapter:'Bab 2', topic:'Hasil Hutan', level:'sederhana',
    question:'Maklumat berikut berkaitan hasil hutan Alam Melayu.',
    context:['Gaharu — Sungai Mekong, Tanah Melayu dan Sumatera','Kapur barus — Sumatera dan Borneo'],
    options:[
      'Digunakan sebagai bahan pewangi',
      'Digunakan sebagai bahan binaan kapal',
      'Digunakan sebagai makanan ruji',
      'Digunakan sebagai alat pembayaran cukai'
    ],
    answer:0,
    explanation:'Gaharu dan kapur barus mendapat permintaan tinggi antaranya kerana digunakan sebagai bahan pewangi.'
  },
  {
    id:'t2-b2-m2', chapter:'Bab 2', topic:'Pentadbiran Pusat dan Wilayah', level:'sederhana',
    question:'Mengapakah pembesar penting dalam sistem pemerintahan kerajaan Alam Melayu?',
    options:[
      'Membantu raja mengurus pentadbiran pusat dan wilayah',
      'Menggantikan kedudukan raja dalam semua urusan pemerintahan',
      'Menentukan dasar luar tanpa persetujuan pemerintah',
      'Menguasai semua hasil perdagangan untuk kepentingan sendiri'
    ],
    answer:0,
    explanation:'Pembesar membantu raja mengurus pentadbiran dan melaksanakan tugas di pusat serta wilayah.'
  },
  {
    id:'t2-b2-h1', chapter:'Bab 2', topic:'Pemerintahan dan Ekonomi', level:'tinggi',
    question:'Bagaimanakah sistem pemerintahan yang teratur dapat membantu perkembangan kegiatan ekonomi kerajaan Alam Melayu?',
    options:[
      'Pentadbiran yang tersusun memudahkan pengurusan hasil, keselamatan dan perdagangan',
      'Pembesar mengambil alih semua kegiatan ekonomi daripada rakyat',
      'Kerajaan mengehadkan hubungan perdagangan dengan kawasan luar',
      'Raja menumpukan pentadbiran kepada upacara istana sahaja'
    ],
    answer:0,
    explanation:'Pentadbiran yang teratur menyokong keselamatan, pengurusan hasil dan kelancaran perdagangan.'
  },

  // ================= BAB 3 =================
  {
    id:'t2-b3-e1', chapter:'Bab 3', topic:'Bahasa', level:'rendah',
    question:'Apakah bahasa yang berperanan penting sebagai bahasa perhubungan di Alam Melayu?',
    options:['Bahasa Sanskrit','Bahasa Melayu','Bahasa Tamil','Bahasa Cina'],
    answer:1,
    explanation:'Bahasa Melayu berkembang sebagai bahasa perhubungan penting di Alam Melayu.'
  },
  {
    id:'t2-b3-e2', chapter:'Bab 3', topic:'Tulisan', level:'rendah',
    question:'Antara berikut, yang manakah tulisan yang digunakan oleh masyarakat kerajaan Alam Melayu?',
    context:['I Pallava','II Kawi','III Kuneiform','IV Hieroglif'],
    options:['I dan II','I dan IV','II dan III','III dan IV'],
    answer:0,
    explanation:'Tulisan Pallava dan Kawi digunakan dalam perkembangan bahasa dan persuratan Alam Melayu.'
  },
  {
    id:'t2-b3-m1', chapter:'Bab 3', topic:'Persuratan', level:'sederhana',
    question:'Penemuan batu bersurat membuktikan perkembangan aspek apakah dalam masyarakat kerajaan Alam Melayu?',
    options:['Bahasa dan persuratan','Pertanian dan penternakan','Perkapalan dan pelayaran','Ketenteraan dan pertahanan'],
    answer:0,
    explanation:'Batu bersurat menjadi bukti perkembangan bahasa, tulisan dan persuratan.'
  },
  {
    id:'t2-b3-m2', chapter:'Bab 3', topic:'Seni Bina', level:'sederhana',
    question:'Apakah yang dapat disimpulkan daripada pembinaan candi seperti Borobudur?',
    options:[
      'Masyarakat mempunyai kemahiran tinggi dalam seni bina',
      'Masyarakat bergantung sepenuhnya pada teknologi luar',
      'Kegiatan persuratan tidak berkembang dalam kerajaan',
      'Struktur sosial masyarakat tidak mempunyai pembahagian tugas'
    ],
    answer:0,
    explanation:'Pembinaan candi menunjukkan kemahiran tinggi masyarakat dalam seni bina dan organisasi kerja.'
  },
  {
    id:'t2-b3-h1', chapter:'Bab 3', topic:'Bahasa, Tulisan dan Persuratan', level:'tinggi',
    question:'Bagaimanakah perkembangan bahasa, tulisan dan persuratan membantu mengukuhkan sesebuah kerajaan Alam Melayu?',
    options:[
      'Memudahkan penyampaian maklumat, pencatatan dan urusan pentadbiran',
      'Menggantikan sepenuhnya peranan pembesar dalam pemerintahan',
      'Mengurangkan hubungan kerajaan dengan masyarakat luar',
      'Menyebabkan kegiatan ekonomi hanya tertumpu pada pertanian'
    ],
    answer:0,
    explanation:'Bahasa dan tulisan membantu pencatatan, penyampaian maklumat serta urusan pentadbiran dan keagamaan.'
  },

  // ================= BAB 4 =================
  {
    id:'t2-b4-e1', chapter:'Bab 4', topic:'Animisme', level:'rendah',
    question:'Apakah yang dimaksudkan dengan animisme?',
    options:[
      'Kepercayaan bahawa unsur alam dan benda mempunyai roh',
      'Kepercayaan terhadap kuasa perdagangan',
      'Kepercayaan bahawa raja dipilih oleh rakyat',
      'Kepercayaan bahawa tulisan menentukan kedudukan seseorang'
    ],
    answer:0,
    explanation:'Animisme ialah kepercayaan bahawa unsur alam atau benda mempunyai roh.'
  },
  {
    id:'t2-b4-e2', chapter:'Bab 4', topic:'Dinamisme', level:'rendah',
    question:'Apakah maksud dinamisme?',
    options:[
      'Kepercayaan terhadap kuasa atau semangat ghaib',
      'Kepercayaan terhadap sistem pemerintahan beraja',
      'Kepercayaan terhadap perdagangan sebagai sumber kuasa',
      'Kepercayaan terhadap satu bentuk tulisan rasmi'
    ],
    answer:0,
    explanation:'Dinamisme merujuk kepercayaan terhadap kuasa atau semangat ghaib.'
  },
  {
    id:'t2-b4-m1', chapter:'Bab 4', topic:'Peranan Pemerintah', level:'sederhana',
    question:'Bagaimanakah pemerintah kerajaan Alam Melayu membantu perkembangan agama?',
    options:[
      'Membina tempat ibadat dan menyokong kegiatan keagamaan',
      'Menutup hubungan dengan kerajaan luar',
      'Menghapuskan semua adat masyarakat tempatan',
      'Melarang pembinaan monumen keagamaan'
    ],
    answer:0,
    explanation:'Pemerintah membantu perkembangan agama melalui pembinaan tempat ibadat dan sokongan terhadap kegiatan keagamaan.'
  },
  {
    id:'t2-b4-m2', chapter:'Bab 4', topic:'Kedatangan Islam', level:'sederhana',
    question:'Mengapakah hubungan perdagangan penting dalam perkembangan Islam di Alam Melayu?',
    options:[
      'Pedagang Islam membawa bersama agama dan budaya ketika berdagang',
      'Pedagang asing menggantikan pemerintah tempatan',
      'Perdagangan menyebabkan semua pelabuhan ditutup kepada bukan Islam',
      'Hubungan dagang menghapuskan terus kepercayaan tempatan'
    ],
    answer:0,
    explanation:'Hubungan perdagangan menjadi salah satu saluran penting penyebaran Islam ke Alam Melayu.'
  },
  {
    id:'t2-b4-h1', chapter:'Bab 4', topic:'Keunikan Warisan', level:'tinggi',
    question:'Bagaimanakah masyarakat Alam Melayu dapat menerima pengaruh Hindu, Buddha dan Islam tanpa kehilangan identiti tempatan?',
    options:[
      'Menyesuaikan pengaruh luar dengan adat dan budaya tempatan',
      'Menggantikan semua budaya tempatan dengan budaya luar',
      'Mengasingkan masyarakat daripada kerajaan luar',
      'Menghapuskan semua bentuk kepercayaan yang pernah diamalkan'
    ],
    answer:0,
    explanation:'Keunikan warisan terbentuk apabila pengaruh luar disesuaikan dengan budaya tempatan.'
  },

  // ================= BAB 5 =================
  {
    id:'t2-b5-e1', chapter:'Bab 5', topic:'Pengasasan Melaka', level:'rendah',
    question:'Siapakah pengasas Kesultanan Melayu Melaka?',
    options:['Parameswara','Raja Ali','Raja Muzaffar','Raja Melewar'],
    answer:0,
    explanation:'Parameswara mengasaskan Kesultanan Melayu Melaka sekitar tahun 1400.'
  },
  {
    id:'t2-b5-e2', chapter:'Bab 5', topic:'Pengakhiran Melaka', level:'rendah',
    question:'Apakah peristiwa yang berlaku pada tahun 1511?',
    options:[
      'Portugis menawan Melaka',
      'Belanda menawan Melaka',
      'British menguasai Melaka',
      'Siam menawan Melaka'
    ],
    answer:0,
    explanation:'Portugis menawan Melaka pada tahun 1511.'
  },
  {
    id:'t2-b5-m1', chapter:'Bab 5', topic:'Kedudukan Strategik', level:'sederhana',
    question:'Mengapakah kedudukan Melaka di Selat Melaka membantu perkembangan kesultanan tersebut?',
    options:[
      'Melaka berada pada laluan perdagangan yang sering digunakan pedagang',
      'Melaka jauh daripada laluan kapal dagang',
      'Melaka tidak mempunyai hubungan dengan pelabuhan lain',
      'Melaka hanya bergantung pada pertanian untuk memperoleh hasil'
    ],
    answer:0,
    explanation:'Kedudukan di Selat Melaka menjadikan Melaka strategik bagi perdagangan dan pelayaran.'
  },
  {
    id:'t2-b5-m2', chapter:'Bab 5', topic:'Perundangan', level:'sederhana',
    question:'Seorang nakhoda ingin mengetahui peraturan berkaitan pelayaran, tugas anak kapal dan keselamatan di laut. Apakah undang-undang yang patut dirujuk?',
    options:['Hukum Kanun Melaka','Undang-Undang Laut Melaka','Undang-Undang 99 Perak','Adat Perpatih'],
    answer:1,
    explanation:'Undang-Undang Laut Melaka mengandungi peraturan berkaitan pelayaran dan kehidupan di laut.'
  },
  {
    id:'t2-b5-h1', chapter:'Bab 5', topic:'Kegemilangan Melaka', level:'tinggi',
    question:'Bagaimanakah Sistem Pembesar Empat Lipatan dan undang-undang bertulis membantu Kesultanan Melayu Melaka mencapai kegemilangan?',
    options:[
      'Mewujudkan pentadbiran teratur dan menjamin keselamatan urusan perdagangan',
      'Memberikan semua kuasa pentadbiran kepada pedagang asing',
      'Mengurangkan peranan pemerintah dalam mengurus kerajaan',
      'Menghadkan kegiatan perdagangan kepada penduduk tempatan sahaja'
    ],
    answer:0,
    explanation:'Pentadbiran yang tersusun dan undang-undang yang jelas membantu menjamin kestabilan serta keselamatan perdagangan.'
  },

  // ================= BAB 6 =================
  {
    id:'t2-b6-e1', chapter:'Bab 6', topic:'Pengasasan Johor Riau', level:'rendah',
    question:'Siapakah pengasas Kesultanan Johor Riau pada tahun 1528?',
    options:['Raja Ali','Parameswara','Raja Muhammad','Raja Melewar'],
    answer:0,
    explanation:'Raja Ali mengasaskan Kesultanan Johor Riau pada tahun 1528.'
  },
  {
    id:'t2-b6-e2', chapter:'Bab 6', topic:'Pengasasan Johor Riau', level:'rendah',
    question:'Apakah gelaran Raja Ali selepas menjadi pemerintah Johor Riau?',
    options:['Sultan Alauddin Riayat Shah I','Sultan Mansur Shah','Sultan Muzaffar Shah','Sultan Zainal Abidin I'],
    answer:0,
    explanation:'Raja Ali memakai gelaran Sultan Alauddin Riayat Shah I.'
  },
  {
    id:'t2-b6-m1', chapter:'Bab 6', topic:'Cabaran Johor Riau', level:'sederhana',
    question:'Antara berikut, yang manakah cabaran yang dihadapi oleh Kesultanan Johor Riau?',
    context:['I Portugis','II Acheh','III Jambi','IV Siam'],
    options:['I, II dan III','I, II dan IV','I, III dan IV','II, III dan IV'],
    answer:0,
    explanation:'Johor Riau menghadapi cabaran daripada Portugis, Acheh dan Jambi.'
  },
  {
    id:'t2-b6-m2', chapter:'Bab 6', topic:'Kegemilangan Perdagangan', level:'sederhana',
    question:'Mengapakah Johor Riau mampu berkembang sebagai pusat perdagangan unggul?',
    options:[
      'Kedudukan strategik dan pengurusan pelabuhan yang cekap',
      'Pengharaman pedagang luar daripada memasuki pelabuhan',
      'Penutupan laluan laut kepada kapal asing',
      'Pengurangan kegiatan perdagangan antarabangsa'
    ],
    answer:0,
    explanation:'Kedudukan strategik dan pengurusan pelabuhan yang cekap menyokong kegemilangan perdagangan Johor Riau.'
  },
  {
    id:'t2-b6-h1', chapter:'Bab 6', topic:'Strategi Menghadapi Cabaran', level:'tinggi',
    question:'Bagaimanakah Kesultanan Johor Riau dapat terus bertahan walaupun berhadapan dengan ancaman Portugis, Acheh dan Jambi?',
    options:[
      'Menggunakan strategi pertahanan dan diplomasi mengikut keadaan',
      'Menghentikan semua kegiatan perdagangan di pelabuhan',
      'Menyerahkan pentadbiran kepada kuasa asing',
      'Memutuskan hubungan dengan semua kerajaan serantau'
    ],
    answer:0,
    explanation:'Johor Riau menggunakan strategi pertahanan dan diplomasi bagi menghadapi cabaran yang berubah-ubah.'
  },

  // ================= BAB 7 =================
  {
    id:'t2-b7-e1', chapter:'Bab 7', topic:'Pengasasan Kesultanan', level:'rendah',
    question:'Siapakah pengasas Kesultanan Pahang?',
    options:['Raja Muhammad','Raja Muzaffar','Raja Ali','Raja Melewar'],
    answer:0,
    explanation:'Kesultanan Pahang diasaskan oleh Raja Muhammad.'
  },
  {
    id:'t2-b7-e2', chapter:'Bab 7', topic:'Pengasasan Kesultanan', level:'rendah',
    question:'Siapakah pengasas Kesultanan Perak?',
    options:['Raja Muzaffar','Raja Muhammad','Raja Ali','Raja Syed Hussin Jamalullail'],
    answer:0,
    explanation:'Kesultanan Perak diasaskan oleh Raja Muzaffar.'
  },
  {
    id:'t2-b7-m1', chapter:'Bab 7', topic:'Warisan Melaka', level:'sederhana',
    question:'Apakah warisan Kesultanan Melayu Melaka yang diteruskan oleh Pahang, Perak, Terengganu dan Selangor?',
    context:['I Pemerintahan beraja','II Agama Islam','III Adat istiadat','IV Demokrasi Athens'],
    options:['I, II dan III','I, II dan IV','I, III dan IV','II, III dan IV'],
    answer:0,
    explanation:'Kesultanan tersebut meneruskan pemerintahan beraja, agama Islam dan adat istiadat.'
  },
  {
    id:'t2-b7-m2', chapter:'Bab 7', topic:'Perundangan dan Persuratan', level:'sederhana',
    question:'Mengapakah perundangan dan persuratan penting dalam mengekalkan warisan kesultanan Melayu?',
    options:[
      'Menjadi panduan pentadbiran serta merekodkan adat dan sejarah kerajaan',
      'Menggantikan sepenuhnya peranan pemerintah',
      'Mengurangkan hubungan antara pemerintah dengan rakyat',
      'Menghapuskan adat istiadat yang diwarisi'
    ],
    answer:0,
    explanation:'Perundangan dan persuratan membantu mengekalkan aturan pentadbiran, adat serta sejarah kerajaan.'
  },
  {
    id:'t2-b7-h1', chapter:'Bab 7', topic:'Kesinambungan Kesultanan', level:'tinggi',
    question:'Bagaimanakah penerusan warisan Kesultanan Melayu Melaka membantu kestabilan kesultanan Melayu yang muncul kemudian?',
    options:[
      'Mengekalkan institusi, adat dan undang-undang yang sudah dikenali masyarakat',
      'Menggantikan semua pembesar dengan pedagang asing',
      'Menghapuskan hubungan kekeluargaan antara kerabat diraja',
      'Mengurangkan peranan agama dalam kehidupan masyarakat'
    ],
    answer:0,
    explanation:'Penerusan institusi, adat dan undang-undang mewujudkan kesinambungan serta kestabilan pemerintahan.'
  },

  // ================= BAB 8 =================
  {
    id:'t2-b8-e1', chapter:'Bab 8', topic:'Negeri Sembilan', level:'rendah',
    question:'Siapakah pemerintah yang diterima dari Pagar Ruyung untuk memerintah Negeri Sembilan?',
    options:['Raja Melewar','Raja Ali','Raja Muhammad','Raja Muzaffar'],
    answer:0,
    explanation:'Raja Melewar dari Pagar Ruyung diterima sebagai pemerintah Negeri Sembilan.'
  },
  {
    id:'t2-b8-e2', chapter:'Bab 8', topic:'Perlis', level:'rendah',
    question:'Perlis pada asalnya merupakan sebahagian daripada negeri',
    options:['Kedah','Kelantan','Perak','Pahang'],
    answer:0,
    explanation:'Perlis pada asalnya merupakan sebahagian daripada Kedah.'
  },
  {
    id:'t2-b8-m1', chapter:'Bab 8', topic:'Perlis', level:'sederhana',
    question:'Siapakah pemerintah Perlis yang menggunakan gelaran Raja?',
    options:['Raja Syed Hussin Jamalullail','Raja Melewar','Raja Muhammad','Raja Ali'],
    answer:0,
    explanation:'Raja Syed Hussin Jamalullail menjadi pemerintah Perlis dengan gelaran Raja.'
  },
  {
    id:'t2-b8-m2', chapter:'Bab 8', topic:'Hubungan Antara Kerajaan', level:'sederhana',
    question:'Bagaimanakah hubungan antara kerajaan Melayu dapat diperkukuhkan?',
    options:[
      'Melalui diplomatik, perkahwinan diraja dan perdagangan',
      'Dengan menghentikan hubungan antara kerabat diraja',
      'Dengan menutup pelabuhan kepada pedagang negeri lain',
      'Dengan memutuskan semua bantuan pertahanan'
    ],
    answer:0,
    explanation:'Hubungan diperkukuh melalui diplomatik, perkahwinan diraja, perdagangan dan bantuan pertahanan.'
  },
  {
    id:'t2-b8-h1', chapter:'Bab 8', topic:'Hubungan Antara Kerajaan', level:'tinggi',
    question:'Bagaimanakah hubungan diplomatik, perkahwinan diraja dan perdagangan menyumbang kepada kelangsungan kerajaan Melayu?',
    options:[
      'Mengukuhkan keselamatan, hubungan politik dan kemakmuran ekonomi',
      'Mengurangkan kuasa pemerintah dalam semua urusan negeri',
      'Menyebabkan setiap kerajaan bergantung sepenuhnya pada negeri lain',
      'Menghapuskan identiti dan adat setiap kerajaan'
    ],
    answer:0,
    explanation:'Hubungan antara kerajaan membantu keselamatan, kestabilan politik dan kemakmuran ekonomi.'
  },

  // ================= BAB 9 =================
  {
    id:'t2-b9-e1', chapter:'Bab 9', topic:'Warisan Kedah', level:'rendah',
    question:'Apakah alat muzik diraja yang menjadi salah satu warisan Kesultanan Kedah?',
    options:['Nobat','Gamelan','Kompang','Rebana ubi'],
    answer:0,
    explanation:'Nobat ialah alat muzik diraja yang menjadi warisan Kesultanan Kedah.'
  },
  {
    id:'t2-b9-e2', chapter:'Bab 9', topic:'Adat Perpatih', level:'rendah',
    question:'Adat Perpatih berasaskan keturunan sebelah',
    options:['ibu','bapa','raja','pembesar'],
    answer:0,
    explanation:'Adat Perpatih berasaskan sistem keturunan sebelah ibu.'
  },
  {
    id:'t2-b9-m1', chapter:'Bab 9', topic:'Pemerintahan Negeri Sembilan', level:'sederhana',
    question:'Siapakah yang memilih Yang di-Pertuan Besar Negeri Sembilan?',
    options:['Undang Yang Empat','Pembesar Empat Lipatan','Syahbandar','Penghulu mukim'],
    answer:0,
    explanation:'Yang di-Pertuan Besar dipilih oleh Undang Yang Empat.'
  },
  {
    id:'t2-b9-m2', chapter:'Bab 9', topic:'Permuafakatan', level:'sederhana',
    question:'Mengapakah permuafakatan penting dalam Adat Perpatih?',
    options:[
      'Keputusan dibuat melalui perbincangan dan persetujuan bersama',
      'Semua keputusan ditentukan oleh seorang pemimpin sahaja',
      'Jawatan pemerintah diwarisi tanpa sebarang proses pemilihan',
      'Masyarakat tidak mempunyai peranan dalam urusan kepimpinan'
    ],
    answer:0,
    explanation:'Permuafakatan menekankan perbincangan dan persetujuan bersama dalam membuat keputusan.'
  },
  {
    id:'t2-b9-h1', chapter:'Bab 9', topic:'Keunikan Pemerintahan Negeri Sembilan', level:'tinggi',
    question:'Bagaimanakah amalan pemilihan Yang di-Pertuan Besar mencerminkan prinsip permuafakatan dalam Adat Perpatih?',
    options:[
      'Pemimpin dipilih melalui peranan Undang Yang Empat, bukan melalui pewarisan mutlak',
      'Pemimpin dilantik terus oleh pedagang yang paling berpengaruh',
      'Pemimpin dipilih berdasarkan kekayaan keluarga semata-mata',
      'Pemimpin ditentukan oleh kuasa luar tanpa penglibatan pemimpin tempatan'
    ],
    answer:0,
    explanation:'Pemilihan melalui Undang Yang Empat menunjukkan unsur perundingan dan permuafakatan dalam sistem pemerintahan Negeri Sembilan.'
  },

  // ================= BAB 10 =================
  {
    id:'t2-b10-e1', chapter:'Bab 10', topic:'Sarawak dalam Alam Melayu', level:'rendah',
    question:'Sarawak mempunyai hubungan sejarah dengan kesultanan',
    options:['Brunei','Perak','Pahang','Selangor'],
    answer:0,
    explanation:'Sarawak mempunyai hubungan dengan Kesultanan Brunei.'
  },
  {
    id:'t2-b10-e2', chapter:'Bab 10', topic:'Sabah dalam Alam Melayu', level:'rendah',
    question:'Sabah mempunyai hubungan dengan kesultanan',
    options:['Sulu dan Brunei','Johor Riau dan Perak','Pahang dan Selangor','Kedah dan Kelantan'],
    answer:0,
    explanation:'Sabah mempunyai hubungan dengan Kesultanan Sulu dan Brunei.'
  },
  {
    id:'t2-b10-m1', chapter:'Bab 10', topic:'Pemerintahan Tempatan', level:'sederhana',
    question:'Siapakah pemimpin utama sesebuah rumah panjang di Sarawak?',
    options:['Tuai Rumah','Datu','Syahbandar','Bendahara'],
    answer:0,
    explanation:'Tuai Rumah menjadi pemimpin utama sesebuah rumah panjang.'
  },
  {
    id:'t2-b10-m2', chapter:'Bab 10', topic:'Kegiatan Ekonomi', level:'sederhana',
    question:'Bagaimanakah kedudukan petempatan berhampiran sungai dan pesisir membantu kegiatan ekonomi masyarakat Sarawak dan Sabah?',
    options:[
      'Memudahkan perhubungan, menangkap hasil laut dan menjalankan perdagangan',
      'Menghalang pergerakan penduduk ke kawasan lain',
      'Mengurangkan kegiatan pertukaran barang antara masyarakat',
      'Menyebabkan kegiatan ekonomi hanya tertumpu pada pemburuan'
    ],
    answer:0,
    explanation:'Sungai dan pesisir menjadi laluan perhubungan serta menyokong kegiatan perdagangan dan mendapatkan sumber.'
  },
  {
    id:'t2-b10-h1', chapter:'Bab 10', topic:'Pemerintahan dan Ekonomi Tempatan', level:'tinggi',
    question:'Bagaimanakah bentuk muka bumi Sarawak dan Sabah mempengaruhi corak pemerintahan dan kegiatan ekonomi masyarakat tempatan?',
    options:[
      'Kawasan yang berbeza melahirkan kepimpinan setempat serta kegiatan ekonomi mengikut sumber yang tersedia',
      'Semua kawasan menggunakan satu bentuk kepimpinan dan kegiatan ekonomi yang sama',
      'Masyarakat pesisir tidak mempunyai hubungan dengan masyarakat pedalaman',
      'Bentuk muka bumi menyebabkan semua kegiatan perdagangan dihentikan'
    ],
    answer:0,
    explanation:'Keadaan geografi yang pelbagai membentuk kepimpinan setempat dan kegiatan ekonomi yang berbeza mengikut kawasan serta sumber.'
  }
];


// Tambahan bank soalan daripada kertas UASA Tingkatan 2 2026.
// Soalan ini digabungkan ke dalam bank sedia ada dan TIDAK dilabel kepada murid.
window.QUESTION_BANK_T2.push(
  {
    id:'t2-uasa26-01', chapter:'Bab 1', topic:'Kerajaan Srivijaya', level:'rendah',
    question:'Siapakah pengasas kerajaan Srivijaya?',
    options:['Dapunta Hyang','Parameswara','Raja Melewar','Sultan Mansur Shah'],
    answer:0,
    explanation:'Dapunta Hyang Sri Jayanasa ialah pengasas kerajaan Srivijaya.'
  },
  {
    id:'t2-uasa26-02', chapter:'Bab 1', topic:'Perkembangan Kerajaan Alam Melayu', level:'sederhana',
    question:'Mengapakah kerajaan Alam Melayu mampu berkembang pesat pada zaman awal?',
    options:['Kedudukan strategik','Hubungan dengan Portugis','Sokongan kuasa Barat','Kegiatan perindustrian'],
    answer:0,
    explanation:'Kedudukan strategik membantu kerajaan Alam Melayu berkembang melalui perdagangan dan hubungan dengan kerajaan luar.'
  },
  {
    id:'t2-uasa26-03', chapter:'Bab 2', topic:'Sistem Pemerintahan', level:'sederhana',
    question:'Apakah peranan utama golongan pembesar dalam kerajaan Alam Melayu?',
    options:['Menguruskan perdagangan antarabangsa','Membantu raja dalam pentadbiran','Menguasai perdagangan rempah','Menyebarkan agama Hindu'],
    answer:1,
    explanation:'Golongan pembesar membantu raja dalam urusan pentadbiran kerajaan.'
  },
  {
    id:'t2-uasa26-04', chapter:'Bab 2', topic:'Perdagangan Maritim', level:'sederhana',
    question:'Mengapakah perdagangan maritim menjadi kegiatan ekonomi penting masyarakat Alam Melayu?',
    options:['Kedudukan di laluan utama perdagangan','Hubungan rapat dengan Eropah','Perkembangan teknologi moden','Kewujudan perjanjian antarabangsa'],
    answer:0,
    explanation:'Kedudukan kerajaan Alam Melayu pada laluan perdagangan utama menggalakkan kegiatan perdagangan maritim.'
  },
  {
    id:'t2-uasa26-05', chapter:'Bab 2', topic:'Hasil Hutan', level:'sederhana',
    question:'Jadual berikut berkaitan dengan hasil hutan yang terdapat di Alam Melayu. Mengapakah hasil hutan tersebut mendapat permintaan tinggi daripada pedagang asing?',
    context:['Gaharu — Sungai Mekong, Tanah Melayu dan Sumatera','Kapur barus — Sumatera dan Borneo'],
    options:['Bahan makanan','Bahan pewangi','Bahan perubatan','Bahan perhiasan'],
    answer:1,
    explanation:'Gaharu dan kapur barus mendapat permintaan tinggi antaranya kerana digunakan sebagai bahan pewangi.'
  },
  {
    id:'t2-uasa26-06', chapter:'Bab 3', topic:'Seni Bina Gangga Nagara', level:'rendah',
    question:'Apakah bukti penemuan yang menunjukkan kerajaan Gangga Nagara mencapai kemajuan dalam bidang seni bina?',
    options:['Patung Hindu','Kapal besar','Senjata','Patung Buddha'],
    answer:3,
    explanation:'Penemuan patung Buddha merupakan antara bukti seni bina masyarakat kerajaan Gangga Nagara.'
  },
  {
    id:'t2-uasa26-07', chapter:'Bab 4', topic:'Kepercayaan Masyarakat Iban', level:'rendah',
    question:'Gambar berikut menunjukkan kepercayaan masyarakat Iban dalam sambutan Perayaan Hari Gawai. Apakah kepercayaan masyarakat tersebut?',
    context:['Ilustrasi menunjukkan masyarakat Iban menjalankan upacara semasa sambutan Hari Gawai.'],
    options:['Animisme','Dinamisme','Liberalisme','Sekularisme'],
    answer:0,
    explanation:'Kepercayaan masyarakat tersebut dikaitkan dengan animisme.'
  },
  {
    id:'t2-uasa26-08', chapter:'Bab 5', topic:'Pentadbiran Kesultanan Melayu Melaka', level:'rendah',
    question:'Siapakah Bendahara terkenal yang membantu mengukuhkan Kesultanan Melayu Melaka?',
    options:['Tun Seri Lanang','Tun Perak','Tun Mutahir','Tun Ali'],
    answer:1,
    explanation:'Tun Perak ialah Bendahara terkenal yang membantu mengukuhkan Kesultanan Melayu Melaka.'
  },
  {
    id:'t2-uasa26-09', chapter:'Bab 5', topic:'Kedudukan Strategik Melaka', level:'sederhana',
    question:'Mengapakah kedudukan Melaka di Selat Melaka penting kepada perkembangan perdagangan?',
    options:['Memudahkan kapal berlabuh','Meningkatkan hasil pertanian','Menyebarkan agama Kristian','Menghapuskan ancaman Portugis'],
    answer:0,
    explanation:'Kedudukan di Selat Melaka memudahkan kapal singgah dan berlabuh untuk menjalankan perdagangan.'
  },
  {
    id:'t2-uasa26-10', chapter:'Bab 6', topic:'Pengasasan Kesultanan Johor Riau', level:'rendah',
    question:'Selepas kejatuhan Melaka, siapakah yang meneruskan pemerintahan dengan menubuhkan Kesultanan Johor Riau?',
    options:['Sultan Mahmud Shah','Sultan Alauddin Riayat Shah II','Tun Seri Lanang','Sultan Mansur Shah'],
    answer:1,
    explanation:'Berdasarkan pilihan jawapan dalam set sumber, jawapan yang dimaksudkan ialah Sultan Alauddin Riayat Shah II.'
  },
  {
    id:'t2-uasa26-11', chapter:'Bab 6', topic:'Kesinambungan Melaka', level:'sederhana',
    question:'Johor Riau sering digelar penyambung kegemilangan Melaka. Apakah sebab utama gelaran ini diberikan?',
    options:['Mewarisi sistem pentadbiran Melaka','Menjalin hubungan dengan Portugis','Menguasai Pulau Pinang','Menjadi pusat penyebaran Kristian'],
    answer:0,
    explanation:'Johor Riau meneruskan tradisi dan sistem pentadbiran Kesultanan Melayu Melaka.'
  },
  {
    id:'t2-uasa26-12', chapter:'Bab 6', topic:'Warisan Kesultanan Melayu Melaka', level:'sederhana',
    question:'Apakah faktor yang membuktikan Kesultanan Johor Riau mewarisi kegemilangan Kesultanan Melaka?',
    options:['Mengamalkan sistem pembesar empat lipatan','Meniru sistem pemerintahan Barat sepenuhnya','Melantik pembesar dari Portugis','Menghapuskan pengaruh adat tempatan'],
    answer:0,
    explanation:'Penerusan sistem pembesar merupakan antara bukti kesinambungan warisan pentadbiran Melaka.'
  },
  {
    id:'t2-uasa26-13', chapter:'Bab 7', topic:'Adat Istiadat Diraja', level:'sederhana',
    question:'Antara berikut, yang manakah merupakan adat istiadat diraja?',
    context:['I Adat berinai','II Sambutan perayaan','III Istiadat pemakaman','IV Adat pertabalan'],
    options:['I dan II','I dan IV','II dan III','III dan IV'],
    answer:3,
    explanation:'Istiadat pemakaman dan adat pertabalan merupakan antara adat istiadat diraja.'
  },
  {
    id:'t2-uasa26-14', chapter:'Bab 7', topic:'Adat Istiadat Kesultanan Melayu', level:'rendah',
    question:'Gambar berikut berkaitan dengan adat istiadat Kesultanan Melayu di Negeri-Negeri Melayu. Apakah adat istiadat tersebut?',
    context:['Ilustrasi menunjukkan pasangan pengantin duduk di atas pelamin dengan pengiring.'],
    options:['Adat Berendoi','Adat Perkahwinan','Adat Pemakaman','Adat Berinai'],
    answer:1,
    explanation:'Ilustrasi tersebut menunjukkan adat perkahwinan.'
  },
  {
    id:'t2-uasa26-15', chapter:'Bab 8', topic:'Pengasasan Negeri Sembilan', level:'sederhana',
    question:'Mengapakah empat Penghulu Luak menjemput seorang Putera Minangkabau ke Negeri Sembilan pada tahun 1770?',
    options:['Menjadi penasihat sultan','Mengetuai sistem pertahanan','Melantiknya sebagai pemerintah','Mengeratkan hubungan perdagangan'],
    answer:2,
    explanation:'Putera Minangkabau dijemput untuk dilantik sebagai pemerintah Negeri Sembilan.'
  },
  {
    id:'t2-uasa26-16', chapter:'Bab 8', topic:'Hubungan Kedah dengan Siam', level:'sederhana',
    question:'Setiap dua tahun, Kedah menghantar bunga emas ke Siam. Apakah maksud sebenar amalan ini?',
    options:['Bayaran hutang','Tanda persahabatan dan perlindungan','Upacara agama','Hasil perdagangan'],
    answer:1,
    explanation:'Penghantaran bunga emas melambangkan hubungan persahabatan dan perlindungan.'
  },
  {
    id:'t2-uasa26-17', chapter:'Bab 8', topic:'Hubungan Antara Negeri Melayu', level:'tinggi',
    question:'Pada pendapat anda, apakah kepentingan hubungan kerajaan Kedah dan Perlis dengan negeri-negeri Melayu lain?',
    options:['Mengukuhkan kestabilan politik','Menyebarkan agama Kristian','Membentuk pakatan dengan Eropah','Menguasai perdagangan candu'],
    answer:0,
    explanation:'Hubungan yang baik antara negeri dapat mengukuhkan kestabilan politik dan keselamatan.'
  },
  {
    id:'t2-uasa26-18', chapter:'Bab 9', topic:'Adat Perpatih', level:'sederhana',
    question:'Upacara berikut diadakan dalam Adat Perpatih. Mengapakah Upacara Kedim diadakan?',
    context:['Upacara Kedim'],
    options:['Proses pembahagian harta pusaka','Perkahwinan antara masyarakat lain','Pelaksanaan hukuman terhadap pesalah','Penerimaan orang luar menjadi ahli suku'],
    answer:3,
    explanation:'Upacara Kedim berkaitan penerimaan orang luar menjadi ahli suku.'
  },
  {
    id:'t2-uasa26-19', chapter:'Bab 10', topic:'Sarawak dan Sabah dalam Alam Melayu', level:'sederhana',
    question:'Sarawak dan Sabah dianggap sebahagian daripada Alam Melayu. Apakah bukti yang menunjukkan perkara ini?',
    options:['Berkongsi bahasa dan budaya serumpun','Terletak di Lautan Hindi','Pernah dijajah Sepanyol','Diperintah secara republik'],
    answer:0,
    explanation:'Persamaan bahasa dan budaya serumpun menunjukkan Sarawak dan Sabah merupakan sebahagian daripada Alam Melayu.'
  },
  {
    id:'t2-uasa26-20', chapter:'Bab 10', topic:'Keunikan Masyarakat Sarawak', level:'rendah',
    question:'Apakah keunikan binaan rumah panjang di Sarawak?',
    options:['Dibina di tepi pantai untuk menangkap ikan','Dibina secara bertingkat untuk menyimpan hasil pertanian','Dibina memanjang dan didiami oleh banyak keluarga','Dibina menggunakan batu-bata untuk pertahanan'],
    answer:2,
    explanation:'Rumah panjang dibina memanjang dan dihuni oleh banyak keluarga dalam satu komuniti.'
  }
);

// Seimbangkan kedudukan jawapan betul A–D jika fungsi rawak pilihan jawapan dimatikan.
window.QUESTION_BANK_T2 = window.QUESTION_BANK_T2.map((q, index) => {
  const shift = index % 4;
  const options = q.options.slice(shift).concat(q.options.slice(0, shift));
  return { ...q, options, answer: (q.answer - shift + 4) % 4 };
});
