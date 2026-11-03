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
    { name: "Sukma Laya (60 min)", description: "Full reflexology treatment focused on the feet and shoulders." },
    { name: "Face Ritual (30 min)", description: "Elevated acupressure-inspired treatment for the face." },
    { name: "Head & Scalp Treatment (15 min)", description: "Calming therapy that soothes the scalp and eases stress." },
    { name: "Body Scrub (15 min)", description: "Gentle exfoliation that buffs away dullness and renews skin radiance." },
    { name: "Body Mask (15 min)", description: "Nourishing body wrap that deeply hydrates and restores balance." },
    { name: "Bath Ritual (15 min)", description: "Soothing soak in the bathtub, infused with special tea bag blend." },
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
