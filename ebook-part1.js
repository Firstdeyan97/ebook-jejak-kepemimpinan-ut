const EBOOK_METADATA = {
  title: "Jejak Kepemimpinan: Tokoh dan Pemimpin Universitas Terbuka (1984–2030)",
  shortTitle: "Jejak Kepemimpinan Universitas Terbuka (1984–2030)",
  author: "Prof. Cherrie",
  isbn: "978-623-01-2030-9",
  publishDate: "Juni 2026",
  totalPages: 210,
  language: "Indonesia",
  format: "Ebook & Cetak",
  category: "Kepemimpinan & Pendidikan",
  status: "Resmi Terbit",
  publisher: "Penerbit Universitas Terbuka Press"
};

const CHAPTERS = [
  { id: 0, code: "PRA", title: "Bagian Awal & Pengantar Buku", period: "1984–2030", leader: "Prof. Cherrie", startPage: 1, endPage: 10 },
  { id: 1, code: "BAB I", title: "Fondasi Pendidikan Tanpa Batas", period: "1984–1992", leader: "Prof. Setijadi, M.A., Ph.D.", startPage: 11, endPage: 30 },
  { id: 2, code: "BAB II", title: "Standarisasi Modul & Jaringan Nusantara", period: "1992–1996", leader: "Prof. Dr. Benny Suprapto", startPage: 31, endPage: 50 },
  { id: 3, code: "BAB III", title: "Ketangguhan Institusi di Tengah Krisis", period: "1996–2001", leader: "Prof. Dr. Ir. Bambang Sutjiatmo", startPage: 51, endPage: 70 },
  { id: 4, code: "BAB IV", title: "Revolusi Mutu & Rintisan E-Learning", period: "2001–2009", leader: "Prof. Dr. M. Atwi Suparman, M.Sc.", startPage: 71, endPage: 95 },
  { id: 5, code: "BAB V", title: "Rekognisi Global & Kiprah Dunia", period: "2009–2017", leader: "Prof. Ir. Tian Belawati, M.Ed., Ph.D.", startPage: 96, endPage: 120 },
  { id: 6, code: "BAB VI", title: "Transformasi PTNBH & Ekosistem Digital", period: "2017–2025", leader: "Prof. Ojat Darojat, M.Bus., Ph.D.", startPage: 121, endPage: 150 },
  { id: 7, code: "BAB VII", title: "Orkestrasi Transisi & Kesinambungan", period: "2025", leader: "Dr. Mohamad Yunus, S.S., M.A.", startPage: 151, endPage: 165 },
  { id: 8, code: "BAB VIII", title: "Akselerasi Kemandirian Menuju Visi 2030", period: "2025–2030", leader: "Prof. Dr. Ali Muktiyanto, S.E., M.Si.", startPage: 166, endPage: 190 },
  { id: 9, code: "BAB IX", title: "Pilar Fakultas, UT Daerah, & Pusat Layanan", period: "1984–2030", leader: "Jajaran Pimpinan & Tokoh Kunci UT", startPage: 191, endPage: 205 },
  { id: 10, code: "BAB X", title: "Sintesis Kepemimpinan & Epilog", period: "Menuju 2030", leader: "Prof. Cherrie", startPage: 206, endPage: 210 }
];

const INITIAL_PAGES = [
  {
    page: 1,
    chapterId: 0,
    type: "cover",
    title: "Jejak Kepemimpinan: Tokoh dan Pemimpin Universitas Terbuka (1984–2030)",
    subtitle: "Catatan Sejarah, Transformasi Kelembagaan, dan Visi Masa Depan Pendidikan Terbuka dan Jarak Jauh di Indonesia",
    body1: "Karya monografis ini mendokumentasikan perjalanan panjang kepemimpinan Universitas Terbuka sejak diresmikan pada 4 September 1984 hingga peta jalan strategis menuju tahun 2030.",
    body2: "Ditulis oleh Prof. Cherrie sebagai rujukan akademik, refleksi manajerial, dan inspirasi tata kelola perguruan tinggi masa depan.",
    highlight: "Edisi Resmi Juni 2026 • ISBN 978-623-01-2030-9 • 210 Halaman",
    yearTag: "1984–2030"
  },
  {
    page: 2,
    chapterId: 0,
    type: "frontmatter",
    title: "Halaman Perancis & Identitas Karya",
    subtitle: "Jejak Kepemimpinan Universitas Terbuka (1984–2030)",
    body1: "Buku ini disusun dalam format ringkas per halaman agar memudahkan para akademisi, praktisi pendidikan, pimpinan perguruan tinggi, serta mahasiswa dalam menyerap intisari kepemimpinan dari setiap periode.",
    body2: "Setiap lembar mewakili satu gagasan utuh, satu tonggak sejarah, dan satu pelajaran kepemimpinan strategis yang membentuk wajah Universitas Terbuka.",
    highlight: "Diterbitkan untuk kalangan akademik, praktisi manajemen pendidikan, dan masyarakat luas.",
    yearTag: "2026"
  },
  {
    page: 3,
    chapterId: 0,
    type: "copyright",
    title: "Maklumat Penerbitan & Hak Cipta",
    subtitle: "ISBN: 978-623-01-2030-9",
    body1: "Judul: Jejak Kepemimpinan: Tokoh dan Pemimpin Universitas Terbuka (1984–2030). Penulis: Prof. Cherrie. Tanggal Terbit: Juni 2026. Bahasa: Indonesia. Format: Ebook & Cetak. Tebal: 210 Halaman.",
    body2: "Hak cipta dilindungi undang-undang. Dilarang memperbanyak sebagian atau seluruh isi buku ini dalam bentuk apapun tanpa izin tertulis dari penulis dan penerbit, kecuali untuk kutipan ilmiah.",
    highlight: "Kategori: Kepemimpinan & Pendidikan Tinggi Terbuka dan Jarak Jauh.",
    yearTag: "Juni 2026"
  },
  {
    page: 4,
    chapterId: 0,
    type: "dedication",
    title: "Persembahan",
    subtitle: "Untuk Para Perintis dan Pengabdi Pendidikan Tanpa Batas",
    body1: "Karya ini dipersembahkan kepada seluruh Rektor, Wakil Rektor, Dekan, Direktur, Kepala UPBJJ/UT Daerah, Kepala Perpustakaan, dosen, tutor, tenaga kependidikan, serta jutaan mahasiswa dan alumni Universitas Terbuka di seluruh pelosok Nusantara dan mancanegara.",
    body2: "Tanpa dedikasi senyap para pendidik dan ketekunan belajar mandiri para mahasiswa, cita-cita mencerdaskan kehidupan bangsa tanpa sekat ruang dan waktu tidak akan pernah terwujud.",
    highlight: "“Pendidikan tinggi adalah hak setiap warga negara, di mana pun mereka berada.”",
    yearTag: "Dedikasi"
  },
  {
    page: 5,
    chapterId: 0,
    type: "preface",
    title: "Kata Pengantar Penulis (Bagian I)",
    subtitle: "Mengapa Menulis Jejak Kepemimpinan UT?",
    body1: "Empat dekade lebih perjalanan Universitas Terbuka bukanlah sekadar rentetan angka statistik kelulusan. Di balik transformasi dari modul cetak yang dikirim lewat pos hingga ekosistem pembelajaran berbasis kecerdasan buatan, terdapat tangan-tangan dingin para pemimpin visioner.",
    body2: "Setiap pemimpin hadir menjawab tantangan zamannya masing-masing: mulai dari keraguan publik terhadap kuliah jarak jauh pada 1984, badai krisis ekonomi 1998, disrupsi internet 2000-an, pandemi global 2020, hingga kemandirian PTNBH menuju 2030.",
    highlight: "Prof. Cherrie — Pondok Cabe, Tangerang Selatan, Juni 2026.",
    yearTag: "Pengantar"
  },
  {
    page: 6,
    chapterId: 0,
    type: "preface",
    title: "Kata Pengantar Penulis (Bagian II)",
    subtitle: "Metode Penyusunan Ringkas 210 Halaman",
    body1: "Buku ini sengaja dirancang dengan arsitektur mikro-narasi: tepat 210 halaman yang masing-masing memuat fokus bahasan yang padat, jernih, dan langsung pada intisari kebijakan.",
    body2: "Pendekatan ini memungkinkan pembaca memahami benang merah kesinambungan kepemimpinan (leadership continuity) tanpa terjebak dalam uraian birokratis yang bertele-tele.",
    highlight: "Satu halaman, satu tonggak pemikiran, satu inspirasi kepemimpinan.",
    yearTag: "Metodologi"
  },
  {
    page: 7,
    chapterId: 0,
    type: "preface",
    title: "Prolog Sejarah: Mandat 4 September 1984",
    subtitle: "Lahirnya Perguruan Tinggi Negeri ke-45",
    body1: "Pada awal dekade 1980-an, Indonesia menghadapi ledakan lulusan SLTA yang tidak mampu ditampung oleh perguruan tinggi tatap muka konvensional, sekaligus kebutuhan mendesak meningkatkan kualifikasi ratusan ribu guru di daerah.",
    body2: "Keputusan Presiden RI Nomor 41 Tahun 1984 menjadi jawaban bersejarah: melahirkan Universitas Terbuka sebagai pelopor Pendidikan Tinggi Terbuka dan Jarak Jauh (PTTJJ) di Indonesia.",
    highlight: "Keppres RI No. 41 Tahun 1984 — Tonggak Demokratisasi Akses Pendidikan Tinggi.",
    yearTag: "1984"
  },
  {
    page: 8,
    chapterId: 0,
    type: "toc",
    title: "Daftar Isi (Bagian I: Era 1984–2009)",
    subtitle: "Struktur Bab I hingga Bab IV",
    body1: "Bagian Awal & Pengantar (Hlm. 1–10) • Bab I: Prof. Setijadi, M.A., Ph.D. — Fondasi Pendidikan Tanpa Batas 1984–1992 (Hlm. 11–30) • Bab II: Prof. Dr. Benny Suprapto — Standarisasi Modul & Jaringan Nusantara 1992–1996 (Hlm. 31–50).",
    body2: "Bab III: Prof. Dr. Ir. Bambang Sutjiatmo — Ketangguhan Institusi di Tengah Krisis 1996–2001 (Hlm. 51–70) • Bab IV: Prof. Dr. M. Atwi Suparman, M.Sc. — Revolusi Mutu & Rintisan E-Learning 2001–2009 (Hlm. 71–95).",
    highlight: "Fase Pembentukan Fondasi, Standarisasi Nasional, dan Modernisasi Awal.",
    yearTag: "Daftar Isi"
  },
  {
    page: 9,
    chapterId: 0,
    type: "toc",
    title: "Daftar Isi (Bagian II: Era 2009–2030)",
    subtitle: "Struktur Bab V hingga Bab X",
    body1: "Bab V: Prof. Ir. Tian Belawati, M.Ed., Ph.D. — Rekognisi Global 2009–2017 (Hlm. 96–120) • Bab VI: Prof. Ojat Darojat, M.Bus., Ph.D. — Transformasi PTNBH & Ekosistem Digital 2017–2025 (Hlm. 121–150) • Bab VII: Dr. Mohamad Yunus, S.S., M.A. — Orkestrasi Transisi 2025 (Hlm. 151–165).",
    body2: "Bab VIII: Prof. Dr. Ali Muktiyanto, S.E., M.Si. — Akselerasi Visi 2030 (Hlm. 166–190) • Bab IX: Pilar Fakultas, UT Daerah, & Pusat Layanan (Hlm. 191–205) • Bab X: Sintesis & Epilog (Hlm. 206–210).",
    highlight: "Fase Internasionalisasi, Kemandirian Badan Hukum, dan Masa Depan 2030.",
    yearTag: "Daftar Isi"
  },
  {
    page: 10,
    chapterId: 0,
    type: "timeline",
    title: "Linimasa Utama Kepemimpinan UT (1984–2030)",
    subtitle: "Delapan Estafet Nakhoda Universitas Terbuka",
    body1: "1. Prof. Setijadi (1984–1992) • 2. Prof. Benny Suprapto (1992–1996) • 3. Prof. Bambang Sutjiatmo (1996–2001) • 4. Prof. M. Atwi Suparman (2001–2009).",
    body2: "5. Prof. Tian Belawati (2009–2017) • 6. Prof. Ojat Darojat (2017–2025) • 7. Dr. Mohamad Yunus (Transisi 2025) • 8. Prof. Ali Muktiyanto (2025–2030).",
    highlight: "Kesinambungan visi lintas generasi yang menjadikan UT mega-university kebanggaan Indonesia.",
    yearTag: "1984–2030"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { EBOOK_METADATA, CHAPTERS, INITIAL_PAGES };
}
