/* ---------- Spa 101 ---------- */

export type Spa101Item = {
  label: string;
  body: string;
};

export type Spa101Step = {
  key: string;
  icon: "clock" | "check" | "arrow";
  title: string;
  subtitle: string;
  items: Spa101Item[];
};

export const spa101 = {
  eyebrow: "Spa 101",
  title: "Apa yang perlu Anda ketahui sebelum datang",
  intro:
    "Relaksasi sejati dimulai dari persiapan yang baik. Mengetahui apa yang terjadi di balik pintu ruang perawatan akan membuat waktu Anda terasa lebih tenang, lebih hadir, dan lebih bermakna.",
  steps: [
    {
      key: "before",
      icon: "clock",
      title: "Sebelum",
      subtitle: "Bersiap. Joyful Rejuvenation Menanti!",
      items: [
        {
          label: "Ketibaan",
          body: "Mohon datang paling lambat 30 menit sebelum jadwal Anda. Waktu ini cukup untuk check-in yang tenang, berganti pakaian, dan menikmati secangkir teh di area relaksasi. Demi kenyamanan semua tamu, durasi layanan kami mungkin dipangkas bila Anda terlambat datang.",
        },
        {
          label: "Kondisi medis",
          body: "Sampaikan kondisi medis, alergi, atau perawatan yang sedang Anda jalankan kepada tim sebelum layanan dimulai. Kami menyesuaikan tekanan dan pilihan treatment agar selalu aman untuk tubuh Anda.",
        },
      ],
    },
    {
      key: "during",
      icon: "check",
      title: "Selama",
      subtitle: "Anda sedang dalam KAMA Mode.",
      items: [
        {
          label: "Ruang loker",
          body: "Setelah check-in, silakan menuju ruang loker untuk berganti dengan nyaman, lalu memakai robe dan sandal KAMA. Semua perhiasan yang berpotensi mengganggu layanan sebaiknya dilepas dan disimpan dengan aman di loker Anda.",
        },
        {
          label: "High touch, low tech",
          body: "Ini adalah ruang untuk beristirahat dari riuh di luar. Matikan dering ponsel dan simpan di loker pribadi Anda. Tim kami menjaga ruang tetap hening dan hangat sepanjang layanan.",
        },
        {
          label: "Peace & quiet",
          body: "Untuk menjaga suasana tenang bagi seluruh tamu, anak-anak dan bayi tidak diperkenankan mendampingi kunjungan Anda. Terima kasih telah membantu kami mempertahankan ruang relaksasi yang sesungguhnya.",
        },
      ],
    },
    {
      key: "after",
      icon: "arrow",
      title: "Setelah",
      subtitle: "Kami menghargai waktu Anda.",
      items: [
        {
          label: "Tip",
          body: "Banyak tamu kami bertanya soal tip. Jika Anda merasa puas dengan layanan, customary 18–22% dari harga standar sebelum diskon adalah nilai yang kami rekomendasikan.",
        },
        {
          label: "Sesudahnya",
          body: "Minum air putih, beri tubuh Anda ruang untuk kembali ke ritmenya sendiri, dan nikmati sisa hari Anda. Kami selalu senang menjadi bagian dari rutinitas Anda.",
        },
      ],
    },
  ] as Spa101Step[],
  policies: [
    {
      label: "Kebijakan pembatalan",
      title: "Cancellation policy",
      body: "Kami memerlukan pemberitahuan 24 jam untuk membatalkan janji, dan nomor kartu kredit diperlukan untuk menahan reservasi. Reservasi grup berisi 3 orang atau lebih wajib dibatalkan 72 jam sebelumnya. Janji yang terlewat akan dibebankan penuh, sedangkan pembatalan dalam rentang 24 jam akan dibebankan 50% dari biaya layanan.",
    },
    {
      label: "Ruang loker",
      title: "Locker rooms",
      body: "Begitu tiba dan check-in selesai, Anda dapat berganti di ruang loker dengan tingkat kenyamanan yang Anda inginkan, kemudian memakai robe dan sandal KAMA. Semua perhiasan yang berpotensi mengganggu layanan sebaiknya dilepas dan disimpan di loker.",
    },
    {
      label: "Suasana tenang",
      title: "Peace & quiet",
      body: "Supaya setiap tamu dapat menikmati ruang yang tenang, anak-anak dan bayi tidak diperkenankan mendampingi kunjungan. Ruang yang tenang adalah tanggung jawab kita bersama.",
    },
    {
      label: "Tip",
      title: "Gratuity",
      body: "Jika Anda merasa puas, customary tip 18–22% dari harga standar sebelum diskon sangat dihargai oleh para terapis kami.",
    },
  ],
  minorPolicy: [
    {
      label: "Body services",
      body: "Usia minimum 14 tahun. Orang tua wajib berada di ruang perawatan bersama tamu minor sampai usia 17 tahun.",
    },
    {
      label: "Skincare services",
      body: "Usia minimum 12 tahun. Orang tua tidak wajib berada di ruang perawatan, namun harus ada di spa segera setelah layanan selesai.",
    },
    {
      label: "Bath ritual",
      body: "Usia minimum 12 tahun. Orang tua wajib menunggu di area spa dan dapat menemani hingga layanan selesai.",
    },
    {
      label: "Face ritual",
      body: "Usia minimum 12 tahun. Orang tua wajib berada di ruang perawatan bersama tamu minor yang menerima layanan.",
    },
  ],
};

/* ---------- Membership ---------- */

export const membership = {
  eyebrow: "Membership",
  title:
    "Lebih dari sekadar keanggotaan — ini gerbang menuju gaya hidup spa yang habitual dan holistic.",
  intro:
    "Pastikan waktu me-time Anda selalu tercatat. Setiap bulan Anda mendapat kredit untuk satu essential service, harga yang lebih ringan, serta penawaran khusus untuk anggota KAMA.",
  price: "Just Rp 1.5jt a month.",
  benefits: [
    {
      title: "Satu essential service setiap bulan",
      body: "Satu layanan dari daftar Essential Services kami sudah termasuk dalam harga keanggotaan. Nikmati tanpa perlu berpikir panjang.",
    },
    {
      title: "Layanan tambahan dengan harga anggota",
      body: "Seluruh essential service berikutnya tersedia dengan harga yang lebih ringan, jadi meningkatkan rutinitas Anda kapan saja menjadi mudah.",
    },
    {
      title: "Diskon untuk seluruh menu",
      body: "Nikmati harga khusus anggota untuk semua treatment, termasuk paket All Day Spa dan ritual wajah.",
    },
    {
      title: "10% off produk retail",
      body: "Hemat saat membeli produk kualitas tinggi untuk rutinitas perawatan di rumah Anda.",
    },
  ],
  servicesIntro:
    "Dengan menjadi anggota, Anda mendapat akses eksklusif ke essential services KAMA — treatment yang disesuaikan dengan kebutuhan wellness Anda.",
  services: [
    {
      name: "Sukma Laya",
      description:
        "Massage tradisional berakar pada budaya Jawa, dengan tekanan ritmis yang memadukan akupresur dan teknik deep tissue untuk mengembalikan keseimbangan alami tubuh.",
    },
    {
      name: "Urip Padma",
      description:
        "Massage full-body holistik yang terinspirasi teknik Bali: akupresur, peregangan lembut, refleksologi, dan aromaterapi untuk menyeimbangkan energi dan membawa ketenangan.",
    },
    {
      name: "Chair Spa",
      description:
        "Perawatan relaksasi terkurasi: ritual meditasi aromatik, tekanan yang disengaja di titik-titik kunci lengan, punggung, dan kaki, ditutup dengan ritual kaki yang menenangkan.",
    },
    {
      name: "Face Ritual",
      description:
        "Treatment wajah dengan pendekatan akupresur — melepaskan ketegangan, membangkitkan sirkulasi, dan mengembalikan glow alami kulit Anda.",
    },
    {
      name: "Body Scrub",
      description:
        "Eksfoliasi lembut yang mengangkat sisa-sisa kulit mati dan memperbarui radiance kulit, dengan pilihan blend scrub khusus kami.",
    },
    {
      name: "Bath Ritual",
      description:
        "Perendaman menenangkan di bathtub dengan infuse tea blend khas kami untuk relaksasi mendalam dan regenerasi.",
    },
  ],
  plans: [
    {
      name: "Individual",
      price: "Rp 1,5jt",
      billed: "Ditagihkan bulanan",
      note: "Pilihan paling populer, khusus untuk Anda.",
      features: [
        "Satu essential service setiap bulan sudah termasuk dalam harga keanggotaan",
        "Tanpa komitmen jangka panjang",
        "Layanan essential tambahan dengan harga anggota",
        "Diskon signifikan pada seluruh paket All Day Spa",
        "Kredit dapat dibagikan dengan biaya tambahan Rp 100rb",
        "10% off pembelian produk retail",
        "Bonus Rp 250rb saat mengajak anggota baru",
        "Benefit ulang tahun: add-on gratis hingga Rp 250rb",
      ],
    },
    {
      name: "Keluarga",
      price: "Rp 1,5jt",
      billed: "Ditagihkan bulanan",
      note: "Semua yang ada di paket Individual, plus tambahan untuk keluarga.",
      features: [
        "Semua benefit paket Individual",
        "Harga diskon untuk seluruh menu treatment",
        "Biaya pendaftaran sekali bayar Rp 290rb untuk maksimal tiga anggota keluarga",
        "Benefit ulang tahun untuk setiap anggota keluarga",
        "Hari perpisahan dan acara khusus anggota",
      ],
    },
    {
      name: "Tim KAMA",
      price: "Custom",
      billed: "Disesuaikan untuk perusahaan",
      note: "Pastikan tim Anda punya kehidupan wellness yang utuh.",
      features: [
        "Keanggotaan untuk seluruh tim dengan harga khusus",
        "Jalur prioritas pemesanan dan penjadwalan bersama",
        "Program wellness on-site dan pengalaman bersama tim",
        "Ringkasan wellness tim untuk perusahaan",
      ],
    },
  ],
  faq: [
    {
      q: "Apakah kredit saya bisa dibagikan?",
      a: "Bisa. Pembagian kredit antar anggota dibebankan Rp 100rb per hari, atau Anda dapat menambahkan anggota keluarga ke keanggotaan yang sama.",
    },
    {
      q: "Apakah kredit saya kedaluwarsa?",
      a: "Ya, kredit berlaku 120 hari sejak diterbitkan. Perawatannya sederhana: pesan sebelum kredit habis.",
    },
    {
      q: "Apakah kredit bisa digunakan untuk layanan lain yang lebih panjang?",
      a: "Bisa. Kredit essential service dapat diaplikasikan pada layanan yang lebih mahal, termasuk paket All Day Spa seperti Samådhåna, Dhåranå, dan Åroha.",
    },
    {
      q: "Apakah keanggotaan berlaku di semua lokasi KAMA?",
      a: "Ya. Keanggotaan KAMA valid di seluruh lokasi kami, termasuk lokasi baru di Sudirman dan Kebayoran sewaktu keduanya dibuka.",
    },
    {
      q: "Bisakah saya membekukan keanggotaan saat bepergian?",
      a: "Bisa, hingga 3 bulan sebagai courtesy sekali dalam masa keanggotaan. Pembekuan tambahan akan dikenakan biaya Rp 290rb.",
    },
    {
      q: "Bagaimana cara membatalkan keanggotaan KAMA?",
      a: "Permintaan pembatalan harus disampaikan secara tertulis 30 hari sebelum tanggal tagihan berikutnya. Silakan hubungi kami melalui hello@kamaspa.id untuk membantu prosesnya.",
    },
  ],
};

/* ---------- Gift cards ---------- */

export const giftCards = {
  eyebrow: "Gift Cards",
  title: "Best. Gift. Ever.",
  intro:
    "Hadiahkan relaksasi. KAMA Gift Card dapat ditukar untuk seluruh layanan di semua lokasi KAMA, tidak kedaluwarsa, dan selalu dibuat dengan perhatian.",
  denominations: [
    {
      value: "Rp 250rb",
      label: "KAMA Gift Card",
      body: "Cukup untuk Sukma Laya 60 menit atau Face Ritual.",
      image: "/img/the-heights-retail-p-800.jpg",
    },
    {
      value: "Rp 500rb",
      label: "KAMA Gift Card",
      body: "Untuk massage 90 menit atau paket ritual pilihan Anda.",
      image: "/img/IMG_5651-min.jpg",
    },
    {
      value: "Rp 1jt",
      label: "KAMA Gift Card",
      body: "Hadiah yang berarti: nikmati paket Samådhåna dua jam sepenuhnya.",
      image: "/img/BANNER_IMG.webp",
    },
    {
      value: "Rp 2jt",
      label: "KAMA Gift Card",
      body: "Paket Åroha tiga setengah jam, tanpa batas rasa bersalah.",
      image: "/img/We_We_Are_Image.webp",
    },
  ],
  specials: [
    {
      title: "Ritual untuk Ibu",
      eyebrow: "Mother's Day Special",
      body: "Ajak orang terdekat merayakan Mama dengan ritual empat jam Karuna — memuaskan tubuh, menenangkan pikiran, dan memulihkan energi yang tersisa.",
      price: "Rp 1,5jt",
      period: "Berlaku sepanjang bulan Mei",
      image: "/img/Southlake_SPA_ROOM_ELLENYANG_003.jpg",
    },
    {
      title: "Ayah yang Sibuk",
      eyebrow: "Father's Day Special",
      body: "Paket 75 menit Chair Body Recovery untuk Ayah. Sebagian durasi untuk pundak dan punggung yang keras, sisanya untuk kepala yang penuh.",
      price: "Rp 399rb",
      period: "Berlaku sepanjang bulan Juni",
      image: "/img/stone-oak-15.jpg",
    },
    {
      title: "Coba Something New",
      eyebrow: "Try Something New",
      body: "Kenali layanan yang belum pernah Anda coba. Anggota mendapat harga anggota dan diskon tambahan 10% sepanjang bulan.",
      price: "Diskon hingga 20%",
      period: "Setiap hari Senin–Kamis",
      image: "/img/The_Lab_Location2.webp",
    },
  ],
  packagingTitle: "Butuh kemasan yang cantik?",
  packagingBody:
    "Kunjungi KAMA Spa di Kramat Pela untuk membeli gift card lengkap dengan kartu ucapan, menu spa, dan gift box dalam warna signature kami. Tidak perlu membungkus sendiri.",
  signatureTitle: "Paket Signature",
  signatureBody:
    "Dengan perawatan yang konsisten, Anda membiarkan beauty bersinar baik dari luar maupun dari dalam. Telusuri seluruh layanan untuk menyusun rutinitas yang benar-benar milik Anda.",
};

/* ---------- Journal ---------- */

export type JournalPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  readTime: string;
  image: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "javanese-massage-roots",
    category: "Massage",
    title: "The Roots of Javanese Healing: Sukma Laya",
    excerpt:
      "Discover the ancient rhythm of Javanese massage — deep rhythmic pressure, acupressure, and a philosophy of restoring the body's natural balance.",
    body: [
      "Ada massage yang terasa seperti percakapan panjang antara tangan dan tubuh, bukan sekadar urutan gerakan.",
      "Sukma Laya mengambil nama dari tradisi massage Jawa yang dikenal dengan tekanan dalam dan ritmis. Setiap gerakan diarahkan pada jalur energi tubuh, kemudian dilanjutkan dengan akupresur ringan yang menenangkan titik-titik yang menegang.",
      "Tradisi ini bukan sekadar teknik. Ada philosophy yang mengikuti siklus harian: tahu kapan tubuh perlu dorongan lebih keras, dan kapan cukup dengan genggaman yang ringan.",
      "Di KAMA, kami mempertahankan ritme itu — dengan harga yang lebih ramah dan ruang yang tenang untuk mengembalikan ketenangan yang utuh.",
    ],
    date: "18 Juni 2026",
    readTime: "5 menit",
    image: "/img/IMG_5652-min.jpg",
  },
  {
    slug: "corporate-wellness-jakarta",
    category: "Corporate",
    title: "Wellness at Work: A Guide to Corporate Wellness in Jakarta",
    excerpt:
      "Employee wellness is no longer just a benefit. Here is how leading teams in Jakarta build engagement, focus, and retention through meaningful reset experiences.",
    body: [
      "Dulu, wellness di kantor dianggap program kecil yang dipangkas budget ketika tahun anggaran memanas. Sekarang, tim terbaik di Jakarta memperlakukannya sebagai infrastruktur.",
      "Chair massage 30 menit untuk tim yang rapat seharian, pojok relaksasi di kantor, atau hari spa yang menggantikan seluruh hari kerja — semuanya memberi hasil yang sama: orang kembali ke meja dengan perhatian yang lebih baik.",
      "Kunci program yang berhasil bukan intensitasnya, melainkan frekuensinya. Satu reset singkat setiap dua minggu mengubah jauh lebih banyak daripada satu perawatan panjang yang jarang terjadi.",
    ],
    date: "2 Juni 2026",
    readTime: "6 menit",
    image: "/img/IMG_5654-min.jpg",
  },
  {
    slug: "pre-wedding-ritual",
    category: "Package",
    title: "Karuna: A Soulful Pre-Wedding Journey",
    excerpt:
      "A four-hour ritual designed to comfort the body, calm the mind, and illuminate the inner glow of every bride-to-be.",
    body: [
      "Ada momen sebelum hari besar di mana stres mulai menumpuk di bahu, di punggung, dan di kepala. Karuna dirancang untuk momen itu.",
      "Empat jam yang dibagi secara sadar: massage tubuh, stimulasi bahu, perut & pinggul, ritual wajah, body scrub, body mask, terapi Ms.V, dan ritual bath sebagai penutup.",
      "Kami percaya istirahat adalah bagian dari persiapan. Bukan tambahan yang dipaksakan, tapi bagian dari kebiasaan yang membuat Anda merasa siap.",
    ],
    date: "20 Mei 2026",
    readTime: "4 menit",
    image: "/img/IMG_5653-min.jpg",
  },
  {
    slug: "morning-ritual-jakarta",
    category: "Ritual",
    title: "A Slower Morning: Building a Ritual That Actually Sticks",
    excerpt:
      "Kebiasaan baik tidak datang dari tekad besar. Ia tumbuh dari ritual kecil yang dibuat mudah dan menyenangkan.",
    body: [
      "Pertanyaan yang paling sering kami dengar bukan soal treatment mana yang terbaik, tapi soal bagaimana memulai kebiasaan.",
      "Mulailah dari yang kecil: satu treatment, satu ritual, satu waktu yang konsisten. Foot bath gratis sebelum Sukma Laya adalah cara yang lembut untuk memulai.",
      "Konsistensi mengalahkan intensitas. Rutinitas mingguan yang diulang lebih baik daripada sekali dalam sebulan.",
    ],
    date: "8 Mei 2026",
    readTime: "4 menit",
    image: "/img/IMG_5657-min.jpg",
  },
  {
    slug: "back-pain-office-workers",
    category: "Massage",
    title: "Nyeri Punggung bagi Kerja Kantoran: Apa yang Perlu Anda Tahu",
    excerpt:
      "Nyeri punggung adalah tanda tubuh sedang berdiri terlalu lama. Berikut cara kami membacanya, dan treatment yang paling membantu.",
    body: [
      "Nyeri punggung pada pekerja kantoran biasanya bukan satu masalah, tapi hasil jam-jam yang menumpuk: posisi mouse, meja yang terlalu tinggi, dan tegang yang tidak terasa sampai malam.",
      "Kami selalu memulai dengan membaca kondisi, bukan langsung menekan. Treatment dengan assisted stretching dan warm compress membantu melepaskan ketegangan yang bertahan lama.",
      "Satu sesi 75 menit Chair Body Recovery sering cukup untuk mengembalikan gerak.",
    ],
    date: "24 April 2026",
    readTime: "5 menit",
    image: "/img/IMG_5660-min.jpg",
  },
  {
    slug: "scrub-and-bath-ritual",
    category: "Ritual",
    title: "Scrub lalu Bath: Sepadanan Dua Treatment yang Saling Melengkapi",
    excerpt:
      "Menggabungkan eksfoliasi dan perendaman membuat ritual yang jauh lebih memuaskan daripada keduanya sendiri.",
    body: [
      "Ada urutan yang terasa wajar: tubuh dibersihkan dari luar, lalu diberi ruang untuk beristirahat di air hangat.",
      "Body Scrub kami menggunakan blend yang dipilih untuk jenis kulit, sementara Bath Ritual memberi perendaman dengan tea blend yang menenangkan dan membantu tubuh melepaskan apa yang telah dilepaskan oleh scrub.",
      "Keduanya bisa ditambahkan pada massage mana pun — atau berdiri sendiri, untuk satu jam yang sepenuhnya devoted untuk kulit dan kepala Anda.",
    ],
    date: "11 April 2026",
    readTime: "4 menit",
    image: "/img/IMG_5662-min.jpg",
  },
];

/* ---------- Join our team ---------- */

export const careers = {
  eyebrow: "Join Our Team",
  title: "Mari tingkatkan karier Anda bersama tim yang hangat dan suportif.",
  intro:
    "KAMA Spa sedang bertumbuh, dan kami selalu mencari talenta baru. Jika Anda memimpin dengan perhatian, bangga akan keahlian Anda, dan senang membuat orang lain merasa terbaik, kami ingin terhubung.",
  positionsIntro:
    "Posisi yang biasanya kami buka. Kirimkan CV Anda ke tim kami, dan kami akan menghubungi Anda begitu posisi yang cocok tersedia.",
  positions: [
    { title: "Massage Therapist", type: "Full-time", location: "South Jakarta" },
    { title: "Body & Scrub Therapist", type: "Full-time", location: "South Jakarta" },
    { title: "Esthetician", type: "Full-time", location: "South Jakarta" },
    { title: "Guest Experience Concierge", type: "Full-time", location: "South Jakarta" },
    { title: "Reservation Concierge", type: "Full-time", location: "South Jakarta" },
    { title: "Housekeeping", type: "Part-time", location: "South Jakarta" },
    { title: "Assistant Spa Manager", type: "Full-time", location: "South Jakarta" },
    { title: "Spa Manager", type: "Full-time", location: "South Jakarta" },
  ],
  benefits: [
    {
      value: "100%",
      title: "Liputan kesehatan menyeluruh",
      body: "Kami menyediakan manfaat kesehatan, gigi, dan penglihatan bagi karyawan penuh waktu, mencakup kebutuhan kesehatan penting Anda tanpa kompromi.",
    },
    {
      value: "Dana",
      title: "Tabungan pensiun",
      body: "Seluruh karyawan mendapat akses program tabungan pensiun dengan pilihan perencanaan keuangan yang kuat untuk masa depan Anda.",
    },
    {
      value: "10.000+",
      title: "Basis tamu yang sudah mapan",
      body: "Bekerja dengan basis tamu yang stabil dari ribuan anggota KAMA Spa, sehingga arus pelanggan Anda tetap konsisten.",
    },
    {
      value: "Move",
      title: "Program membership & wellness",
      body: "Tetap sehat dan aktif dengan membership kebugaran dan program wellness yang kami berikan sebagai bagian dari komitmen kami pada kesejahteraan Anda.",
    },
    {
      value: "Spa life",
      title: "Diskon produk & layanan",
      body: "Nikmati diskon substansial untuk produk dan layanan, memperluas akses Anda terhadap item perawatan berkualitas.",
    },
    {
      value: "Clean & green",
      title: "Lingkungan kerja yang bersih",
      body: "Ruang kerja yang bebas dari substansi berbahaya, dengan prioritas pada ruang yang bersih dan sehat untuk semua orang.",
    },
  ],
  reviews: [
    {
      quote:
        "Selama bertahun-tahun KAMA bukan sekadar tempat kerja bagi saya. Ini tempat saya tumbuh sebagai profesional dan menemukan passion saya dalam pekerjaan yang ia syukai.",
      name: "Trini S.",
      role: "Educator",
    },
    {
      quote:
        "Saya menikmati bekerja sebagai Massage Therapist karena KAMA memberi saya kesempatan untuk membantu orang lain menemukan kelegaan, relaksasi, dan penyembuhan lewat sentuhan.",
      name: "Jelani W.",
      role: "Massage Therapist",
    },
    {
      quote:
        "Kami berbeda karena anggota tim kami benar-benar peduli pada kesejahteraan tamu dan satu sama lain. Cahaya di dalam setiap dari kami memancar.",
      name: "Hillary",
      role: "Lead Esthetician",
    },
  ],
};

/* ---------- Privacy policy ---------- */

export type PolicySection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const privacyPolicy: { intro: string; sections: PolicySection[] } = {
  intro:
    "Selamat datang di platform KAMA Spa (“KAMA”). Dengan mengakses atau menggunakan situs web ini, Anda menyetujui penggunaan data pribadi Anda sesuai kebijakan privasi yang kami tetapkan di bawah ini.",
  sections: [
    {
      title: "Informasi yang Kami Kumpulkan",
      paragraphs: [
        "Kami mengumpulkan berbagai jenis informasi agar dapat memberikan layanan yang lebih baik dan relevan bagi Anda:",
      ],
      bullets: [
        "Informasi pribadi: nama, alamat email, nomor telepon, alamat, dan informasi preferensi yang Anda berikan saat membuat reservasi, melakukan pembelian, menghubungi kami, atau mengikuti promosi.",
        "Data penggunaan: halaman yang Anda kunjungi, fitur yang Anda gunakan, durasi kunjungan, dan perangkat yang Anda gunakan untuk mengakses layanan kami.",
        "Informasi perangkat: jenis perangkat, sistem operasi, jenis browser, dan alamat IP.",
      ],
    },
    {
      title: "Bagaimana Kami Menggunakan Informasi Anda",
      paragraphs: ["Informasi Anda digunakan untuk tujuan berikut:"],
      bullets: [
        "Menyediakan dan meningkatkan layanan kami.",
        "Memproses reservasi dan pembelian Anda.",
        "Mengirim komunikasi pemasaran dan promosi, dengan persetujuan Anda.",
        "Menjawab pertanyaan dan permintaan Anda.",
        "Mempersonalisasi pengalaman Anda bersama kami.",
        "Mematuhi ketentuan hukum dan regulasi yang berlaku.",
      ],
    },
    {
      title: "Pembagian Informasi Anda",
      paragraphs: [
        "Kami tidak pernah menjual informasi pribadi Anda kepada pihak ketiga.",
        "Kami mungkin berbagi informasi Anda dengan penyedia layanan pihak ketiga yang membantu kami menjalankan layanan. Penyedia tersebut diwajibkan menjaga kerahasiaan informasi Anda dan hanya menggunakannya untuk tujuan yang telah kami izinkan.",
        "Informasi juga dapat dibagikan dalam keadaan tertentu untuk mematuhi ketentuan hukum, mencegah kegiatan yang tidak sah, serta melindungi hak dan keselamatan pihak lain.",
      ],
    },
    {
      title: "Pilihan Anda",
      paragraphs: ["Anda memiliki kendali atas informasi Anda. Anda dapat:"],
      bullets: [
        "Mengakses dan memperbarui data pribadi Anda dengan menghubungi tim kami.",
        "Berhenti menerima komunikasi pemasaran dan promosi dari kami kapan saja.",
        "Meminta penghapusan data pribadi Anda.",
      ],
    },
    {
      title: "Cookies dan Teknologi Pelacakan",
      paragraphs: [
        "Kami menggunakan cookies dan teknologi pelacakan lain untuk mengumpulkan informasi tentang cara Anda menggunakan layanan. Anda dapat mengatur penggunaan cookies di tingkat peramban. Menonaktifkan cookies mungkin membatasi sebagian fitur di situs kami.",
      ],
    },
    {
      title: "Kebijakan Pemasaran SMS",
      paragraphs: [
        "Bagian ini berlaku khusus untuk pemasaran SMS dan tidak menggantikan Kebijakan Privasi kami secara keseluruhan.",
        "Nomor telepon Anda hanya dikumpulkan ketika Anda memberikan secara sukarela, misalnya saat melakukan transaksi, melakukan inquiry, atau mendaftar untuk pesan promosi. Anda dapat berhenti berlangganan kapan saja dengan mengirim STOP atau UNSUBSCRIBE. Setelah opted out, nomor Anda tidak akan dijual atau dialihkan ke pihak ketiga untuk keperluan pemasaran.",
        "Berlangganan pesan SMS tidak diperlukan untuk mengakses promosi atau diskon, yang juga tersedia langsung di situs kami.",
      ],
    },
    {
      title: "Perubahan atas Kebijakan Ini",
      paragraphs: [
        "Kami dapat memperbarui kebijakan ini secara berkala. Perubahan signifikan akan dipublikasikan di situs kami. Pembaruan terakhir: 1 Januari 2026.",
      ],
    },
    {
      title: "Hubungi Kami",
      paragraphs: [
        "Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin memperbarui data Anda, hubungi kami di hello@kamaspa.id atau +62 813-1605-2040.",
      ],
    },
  ],
};

/* ---------- Terms & conditions ---------- */

export const termsConditions: { intro: string; sections: PolicySection[] } = {
  intro:
    "Selamat datang di platform KAMA Spa (“KAMA”). Dengan mengakses atau menggunakan situs web ini, Anda menyetujui ketentuan penggunaan berikut.",
  sections: [
    {
      title: "Ketentuan Penggunaan",
      paragraphs: [
        "Anda menyatakan bahwa berusia minimal 17 tahun. Anda bertanggung jawab memastikan penggunaan layanan kami sesuai dengan hukum dan peraturan yang berlaku.",
        "Konten, teks, gambar, dan materi di dalam situs ini dilindungi oleh hak kekayaan intelektual. Penggunaan konten yang tidak diizinkan dapat berujung pada penghentian akses Anda.",
        "Tautan ke situs pihak ketiga disediakan semata-mata untuk kenyamanan dan bukan sebagai endorsements. KAMA tidak bertanggung jawab atas isi maupun keakuratan situs di luar.",
      ],
    },
    {
      title: "Reservasi dan Jadwal",
      paragraphs: [
        "Reservasi dapat dibuat melalui WhatsApp, telepon, atau formulir di situs ini. Jadwal yang dikonfirmasi berlaku untuk tamu yang hadir pada waktu yang telah disepakati.",
        "Permintaan pembatalan atau perubahan jadwal perlu disampaikan sesuai kebijakan pembatalan yang berlaku.",
      ],
    },
    {
      title: "Kebijakan Pembatalan",
      paragraphs: [
        "Kami memerlukan pemberitahuan 24 jam untuk membatalkan janji, dan nomor kartu kredit diperlukan untuk menahan reservasi.",
        "Reservasi grup berisi 3 orang atau lebih wajib dibatalkan 72 jam sebelumnya. Janji yang terlewat akan dibebankan penuh, sedangkan pembatalan dalam rentang 24 jam akan dibebankan 50% dari biaya layanan.",
        "Kami berhak membatalkan atau menunda layanan bila terjadi keadaan kahar, dan dalam hal tersebut akan menginformasikan Anda secepatnya.",
      ],
    },
    {
      title: "Pembayaran",
      paragraphs: [
        "Harga tercantum dalam Rupiah dan belum termasuk pajak pemerintah sebesar 10%. Metode pembayaran yang diterima dapat langsung saat konfirmasi reservasi.",
        "Kartu kredit yang dipakai untuk menahan reservasi hanya digunakan untuk keperluan pembatalan atau no-show.",
      ],
    },
    {
      title: "Perlakuan yang Diharapkan",
      paragraphs: [
        "Kami menjunjung tinggi privasi dan ketenangan setiap tamu. Kami meminta ponsel dimatikan selama layanan berlangsung dan anak-anak tidak mendampingi tamu lain.",
        "Perilaku yang mengganggu, sikap yang tidak sopan, atau penolakan terhadap arahan terapis dapat menyebabkan layanan dihentikan tanpa refund.",
      ],
    },
    {
      title: "Hazard & Keselamatan",
      paragraphs: [
        "Anda wajib menyampaikan kondisi medis, alergi, kehamilan, atau kondisi lain yang relevan sebelum layanan dimulai. Kami tidak bertanggung jawab atas kondisi yang belum kami ketahui sebelumnya.",
        "Barang bawaan yang hilang atau rusak berada di luar tanggung jawab kami, kecuali kerusakan yang disebabkan oleh kelalaian pihak kami.",
      ],
    },
    {
      title: "Perubahan atas Ketentuan Ini",
      paragraphs: [
        "Kami berhak memperbarui ketentuan ini kapan saja. Perubahan akan dipublikasikan di situs ini dan berlaku sejak tanggal pencantuman di atas.",
      ],
    },
    {
      title: "Hubungi Kami",
      paragraphs: [
        "Untuk pertanyaan mengenai ketentuan ini, hubungi kami di hello@kamaspa.id atau +62 813-1605-2040, atau datang ke KAMA Spa di Kramat Pela, Jakarta Selatan.",
      ],
    },
  ],
};
