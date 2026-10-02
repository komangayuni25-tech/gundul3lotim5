// Educational SVG illustrations for IPAS Grade 5 questions
// Encoded as clean SVG data URIs so they load instantly without external dependencies.

const encodeSvg = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

export const QUESTION_IMAGES: Record<string, { url: string; caption: string }> = {
  // POS 1: Bagaimana Aku Memenuhi Kebutuhanku
  q_pos_1_1: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FEF3C7"/>
        <text x="200" y="32" font-family="sans-serif" font-size="16" font-weight="bold" fill="#92400E" text-anchor="middle">PIRAMIDA KEBUTUHAN MANUSIA</text>
        <polygon points="200,50 340,210 60,210" fill="#FDE68A" stroke="#D97706" stroke-width="3"/>
        <line x1="150" y1="110" x2="250" y2="110" stroke="#D97706" stroke-width="2"/>
        <line x1="105" y1="160" x2="295" y2="160" stroke="#D97706" stroke-width="2"/>
        <!-- Tersier -->
        <text x="200" y="90" font-family="sans-serif" font-size="12" font-weight="bold" fill="#B45309" text-anchor="middle">👑 Tersier</text>
        <text x="200" y="104" font-family="sans-serif" font-size="9" fill="#78350F" text-anchor="middle">(Mobil Mewah, Perhiasan)</text>
        <!-- Sekunder -->
        <text x="200" y="138" font-family="sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">📱 Sekunder</text>
        <text x="200" y="152" font-family="sans-serif" font-size="9" fill="#065F46" text-anchor="middle">(Sepeda, Meja Belajar, HP)</text>
        <!-- Primer -->
        <text x="200" y="186" font-family="sans-serif" font-size="13" font-weight="bold" fill="#B91C1C" text-anchor="middle">🍚 PRIMER (Pokok)</text>
        <text x="200" y="202" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991B1B" text-anchor="middle">Pangan (Makan), Sandang (Pakaian), Papan (Rumah)</text>
      </svg>
    `),
    caption: 'Piramida Tingkatan Kebutuhan Hidup Manusia (Primer, Sekunder, dan Tersier)',
  },

  q_pos_1_2: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#EFF6FF"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1E40AF" text-anchor="middle">KEBUTUHAN POKOK (SANDANG, PANGAN, PAPAN)</text>
        <!-- Sandang -->
        <g transform="translate(40,60)">
          <rect width="95" height="135" rx="12" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
          <text x="47" y="30" font-size="34" text-anchor="middle">👕</text>
          <text x="47" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1E3A8A" text-anchor="middle">SANDANG</text>
          <text x="47" y="92" font-family="sans-serif" font-size="10" fill="#3B82F6" text-anchor="middle">Pakaian</text>
          <text x="47" y="108" font-family="sans-serif" font-size="10" fill="#3B82F6" text-anchor="middle">Seragam</text>
        </g>
        <!-- Pangan -->
        <g transform="translate(152,60)">
          <rect width="95" height="135" rx="12" fill="#DCFCE7" stroke="#10B981" stroke-width="2"/>
          <text x="47" y="30" font-size="34" text-anchor="middle">🍚</text>
          <text x="47" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#065F46" text-anchor="middle">PANGAN</text>
          <text x="47" y="92" font-family="sans-serif" font-size="10" fill="#059669" text-anchor="middle">Makanan</text>
          <text x="47" y="108" font-family="sans-serif" font-size="10" fill="#059669" text-anchor="middle">Air Minum</text>
        </g>
        <!-- Papan -->
        <g transform="translate(265,60)">
          <rect width="95" height="135" rx="12" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="47" y="30" font-size="34" text-anchor="middle">🏠</text>
          <text x="47" y="70" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400E" text-anchor="middle">PAPAN</text>
          <text x="47" y="92" font-family="sans-serif" font-size="10" fill="#D97706" text-anchor="middle">Rumah</text>
          <text x="47" y="108" font-family="sans-serif" font-size="10" fill="#D97706" text-anchor="middle">Tempat Tinggal</text>
        </g>
        <text x="200" y="222" font-family="sans-serif" font-size="11" fill="#4B5563" text-anchor="middle">Wajib dipenuhi agar kelangsungan hidup manusia tetap terjaga</text>
      </svg>
    `),
    caption: 'Tiga Kebutuhan Primer Mutlak: Sandang (Pakaian), Pangan (Makanan), dan Papan (Rumah)',
  },

  q_pos_1_3: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FDF2F8"/>
        <text x="200" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#9D174D" text-anchor="middle">PERBEDAAN KEBUTUHAN VS KEINGINAN</text>
        <!-- Kebutuhan Box -->
        <g transform="translate(30,50)">
          <rect width="160" height="150" rx="14" fill="#ECFDF5" stroke="#10B981" stroke-width="2.5"/>
          <text x="80" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065F46" text-anchor="middle">✅ KEBUTUHAN</text>
          <text x="80" y="55" font-size="28" text-anchor="middle">🩺 📚 🍲</text>
          <text x="80" y="90" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">• Wajib dipenuhi</text>
          <text x="80" y="110" font-family="sans-serif" font-size="10" fill="#065F46" text-anchor="middle">• Terancam jika tidak ada</text>
          <text x="80" y="130" font-family="sans-serif" font-size="10" fill="#065F46" text-anchor="middle">• Berdasarkan fungsi hidup</text>
        </g>
        <!-- Keinginan Box -->
        <g transform="translate(210,50)">
          <rect width="160" height="150" rx="14" fill="#FFF1F2" stroke="#F43F5E" stroke-width="2.5"/>
          <text x="80" y="28" font-family="sans-serif" font-size="13" font-weight="bold" fill="#9F1239" text-anchor="middle">🎮 KEINGINAN</text>
          <text x="80" y="55" font-size="28" text-anchor="middle">🕹️ 🛹 💎</text>
          <text x="80" y="90" font-family="sans-serif" font-size="10" font-weight="bold" fill="#BE123C" text-anchor="middle">• Bersifat kepuasan</text>
          <text x="80" y="110" font-family="sans-serif" font-size="10" fill="#9F1239" text-anchor="middle">• Bisa ditunda / dibatalkan</text>
          <text x="80" y="130" font-family="sans-serif" font-size="10" fill="#9F1239" text-anchor="middle">• Tidak mengancam nyawa</text>
        </g>
        <text x="200" y="224" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6B7280" text-anchor="middle">Dahulukan Kebutuhan sebelum menuruti Keinginan!</text>
      </svg>
    `),
    caption: 'Bagan Pembanding: Sifat Kebutuhan (Wajib/Fungsi) vs Keinginan (Kepuasan/Bisa Ditunda)',
  },

  q_pos_1_4: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#F0FDF4"/>
        <text x="200" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#166534" text-anchor="middle">FAKTOR YANG MEMPENGARUHI KEBUTUHAN</text>
        <g transform="translate(30,55)">
          <rect width="160" height="65" rx="10" fill="#DCFCE7" stroke="#22C55E" stroke-width="1.5"/>
          <text x="20" y="40" font-size="24">🏔️</text>
          <text x="55" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532D">Kondisi Alam</text>
          <text x="55" y="46" font-family="sans-serif" font-size="9" fill="#166534">Dingin butuh jaket tebal</text>
        </g>
        <g transform="translate(210,55)">
          <rect width="160" height="65" rx="10" fill="#E0E7FF" stroke="#6366F1" stroke-width="1.5"/>
          <text x="20" y="40" font-size="24">👨‍⚕️</text>
          <text x="55" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#312E81">Profesi / Profesi</text>
          <text x="55" y="46" font-family="sans-serif" font-size="9" fill="#3730A3">Dokter butuh stetoskop</text>
        </g>
        <g transform="translate(30,135)">
          <rect width="160" height="65" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
          <text x="20" y="40" font-size="24">👶</text>
          <text x="55" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#78350F">Usia &amp; Pertumbuhan</text>
          <text x="55" y="46" font-family="sans-serif" font-size="9" fill="#92400E">Bayi butuh susu &amp; popok</text>
        </g>
        <g transform="translate(210,135)">
          <rect width="160" height="65" rx="10" fill="#FCE7F3" stroke="#EC4899" stroke-width="1.5"/>
          <text x="20" y="40" font-size="24">🎎</text>
          <text x="55" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#831843">Adat &amp; Budaya</text>
          <text x="55" y="46" font-family="sans-serif" font-size="9" fill="#9D174D">Upacara adat daerah</text>
        </g>
        <text x="200" y="225" font-family="sans-serif" font-size="10" fill="#4B5563" text-anchor="middle">Setiap orang memiliki kebutuhan berbeda tergantung lingkungannya</text>
      </svg>
    `),
    caption: 'Faktor-faktor yang Mempengaruhi Keragaman Kebutuhan Setiap Manusia',
  },

  // POS 2: Sejarah Uang & Cara Memenuhi Kebutuhan
  q_pos_2_1: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FFFBEB"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#B45309" text-anchor="middle">SISTEM BARTER (TUKAR MENUKAR BARANG)</text>
        <!-- Person 1 -->
        <g transform="translate(40,65)">
          <circle cx="45" cy="35" r="22" fill="#FED7AA"/>
          <text x="45" y="42" font-size="20" text-anchor="middle">👨‍🌾</text>
          <text x="45" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7C2D12" text-anchor="middle">Petani Padi</text>
          <rect x="15" y="85" width="60" height="40" rx="8" fill="#FDE68A" stroke="#D97706"/>
          <text x="45" y="110" font-size="18" text-anchor="middle">🌾 Beras</text>
        </g>
        <!-- Exchange Arrows -->
        <g transform="translate(160,105)">
          <path d="M 0,0 L 70,0" stroke="#059669" stroke-width="4" marker-end="url(#arrow)"/>
          <polygon points="68,-5 80,0 68,5" fill="#059669"/>
          <polygon points="12,15 0,20 12,25" fill="#DC2626"/>
          <path d="M 10,20 L 80,20" stroke="#DC2626" stroke-width="4"/>
          <text x="40" y="-8" font-family="sans-serif" font-size="11" font-weight="bold" fill="#059669" text-anchor="middle">TUKAR</text>
        </g>
        <!-- Person 2 -->
        <g transform="translate(265,65)">
          <circle cx="45" cy="35" r="22" fill="#FED7AA"/>
          <text x="45" y="42" font-size="20" text-anchor="middle">🎣</text>
          <text x="45" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7C2D12" text-anchor="middle">Nelayan</text>
          <rect x="15" y="85" width="60" height="40" rx="8" fill="#BAE6FD" stroke="#0284C7"/>
          <text x="45" y="110" font-size="18" text-anchor="middle">🐟 Ikan</text>
        </g>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4B5563" text-anchor="middle">Syarat Barter: Kedua belah pihak harus saling membutuhkan barang yang ditukar</text>
      </svg>
    `),
    caption: 'Ilustrasi Barter: Petani menukar beras dengan ikan tangkapan nelayan',
  },

  q_pos_2_2: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FEF2F2"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#991B1B" text-anchor="middle">KESULITAN SISTEM BARTER PADA ZAMAN DAHULU</text>
        <g transform="translate(45,65)">
          <rect width="140" height="120" rx="12" fill="#FFFFFF" stroke="#F87171" stroke-width="2"/>
          <text x="70" y="35" font-size="26" text-anchor="middle">⚖️❓</text>
          <text x="70" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991B1B" text-anchor="middle">Sulit Menentukan Nilai</text>
          <text x="70" y="85" font-family="sans-serif" font-size="9" fill="#7F1D1D" text-anchor="middle">Berapa ekor ayam untuk</text>
          <text x="70" y="99" font-family="sans-serif" font-size="9" fill="#7F1D1D" text-anchor="middle">menukar seekor sapi?</text>
        </g>
        <g transform="translate(215,65)">
          <rect width="140" height="120" rx="12" fill="#FFFFFF" stroke="#F87171" stroke-width="2"/>
          <text x="70" y="35" font-size="26" text-anchor="middle">🤝❌</text>
          <text x="70" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991B1B" text-anchor="middle">Keinginan Tak Cocok</text>
          <text x="70" y="85" font-family="sans-serif" font-size="9" fill="#7F1D1D" text-anchor="middle">Sulit menemukan orang</text>
          <text x="70" y="99" font-family="sans-serif" font-size="9" fill="#7F1D1D" text-anchor="middle">yang butuh barang kita</text>
        </g>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B91C1C" text-anchor="middle">Kelemahan barter memicu lahirnya Uang Barang dan Logam Mulia</text>
      </svg>
    `),
    caption: 'Kelemahan Barter: Sulitnya menentukan kesetaraan nilai dan mencocokkan kebutuhan',
  },

  q_pos_2_3: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#F0FDF4"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803D" text-anchor="middle">TRANSFORMASI UANG DARI ZAMAN KE ZAMAN</text>
        <!-- Barter -->
        <g transform="translate(25,60)">
          <rect width="75" height="110" rx="10" fill="#FEF3C7" stroke="#D97706"/>
          <text x="37" y="35" font-size="24" text-anchor="middle">🐚</text>
          <text x="37" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#92400E" text-anchor="middle">Uang Barang</text>
          <text x="37" y="85" font-family="sans-serif" font-size="8" fill="#78350F" text-anchor="middle">Kulit Kerang,</text>
          <text x="37" y="97" font-family="sans-serif" font-size="8" fill="#78350F" text-anchor="middle">Garam, Hewan</text>
        </g>
        <text x="110" y="120" font-size="16" fill="#15803D" font-weight="bold">➔</text>
        <!-- Logam -->
        <g transform="translate(120,60)">
          <rect width="75" height="110" rx="10" fill="#FEF08A" stroke="#EAB308"/>
          <text x="37" y="35" font-size="24" text-anchor="middle">🪙</text>
          <text x="37" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#854D0E" text-anchor="middle">Uang Logam</text>
          <text x="37" y="85" font-family="sans-serif" font-size="8" fill="#713F12" text-anchor="middle">Emas, Perak,</text>
          <text x="37" y="97" font-family="sans-serif" font-size="8" fill="#713F12" text-anchor="middle">Tembaga, Alum</text>
        </g>
        <text x="205" y="120" font-size="16" fill="#15803D" font-weight="bold">➔</text>
        <!-- Kertas -->
        <g transform="translate(215,60)">
          <rect width="75" height="110" rx="10" fill="#DCFCE7" stroke="#22C55E"/>
          <text x="37" y="35" font-size="24" text-anchor="middle">💵</text>
          <text x="37" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#14532D" text-anchor="middle">Uang Kertas</text>
          <text x="37" y="85" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">Rupiah Kertas</text>
          <text x="37" y="97" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">Ringan &amp; Praktis</text>
        </g>
        <text x="300" y="120" font-size="16" fill="#15803D" font-weight="bold">➔</text>
        <!-- Digital -->
        <g transform="translate(308,60)">
          <rect width="75" height="110" rx="10" fill="#DBEAFE" stroke="#3B82F6"/>
          <text x="37" y="35" font-size="24" text-anchor="middle">📱💳</text>
          <text x="37" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E3A8A" text-anchor="middle">Uang Digital</text>
          <text x="37" y="85" font-family="sans-serif" font-size="8" fill="#1E40AF" text-anchor="middle">QRIS, E-Wallet,</text>
          <text x="37" y="97" font-family="sans-serif" font-size="8" fill="#1E40AF" text-anchor="middle">Kartu Debit</text>
        </g>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#374151" text-anchor="middle">Fungsi Asli Uang: Sebagai Alat Tukar dan Satuan Hitung yang Sah</text>
      </svg>
    `),
    caption: 'Evolusi Uang: Dari Uang Barang (Kerang) hingga Uang Digital (QRIS & E-Wallet)',
  },

  q_pos_2_4: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#F8FAFC"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#334155" text-anchor="middle">SYARAT BENDA DAPAT DIJADIKAN UANG</text>
        <g transform="translate(40,55)">
          <circle cx="25" cy="25" r="20" fill="#E2E8F0"/>
          <text x="25" y="32" font-size="16" text-anchor="middle">1️⃣</text>
          <text x="60" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1E293B">Diterima Secara Umum</text>
          <text x="60" y="38" font-family="sans-serif" font-size="10" fill="#64748B">Semua orang percaya dan mau menerima</text>
        </g>
        <g transform="translate(40,105)">
          <circle cx="25" cy="25" r="20" fill="#E2E8F0"/>
          <text x="25" y="32" font-size="16" text-anchor="middle">2️⃣</text>
          <text x="60" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1E293B">Tahan Lama &amp; Tidak Mudah Rusak</text>
          <text x="60" y="38" font-family="sans-serif" font-size="10" fill="#64748B">Bahan tidak cepat busuk atau hancur</text>
        </g>
        <g transform="translate(40,155)">
          <circle cx="25" cy="25" r="20" fill="#E2E8F0"/>
          <text x="25" y="32" font-size="16" text-anchor="middle">3️⃣</text>
          <text x="60" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1E293B">Mudah Dibawa &amp; Dapat Dipecah</text>
          <text x="60" y="38" font-family="sans-serif" font-size="10" fill="#64748B">Memiliki pecahan nominal tanpa mengurangi nilainya</text>
        </g>
        <text x="200" y="222" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0F766E" text-anchor="middle">Bank Indonesia (BI) adalah lembaga resmi pencetak uang Rupiah di Indonesia</text>
      </svg>
    `),
    caption: 'Syarat-syarat Benda Dapat Ditetapkan Sebagai Alat Pembayaran yang Sah',
  },

  // POS 3: Kegiatan Ekonomi di Daerahku (Produksi, Distribusi, Konsumsi)
  q_pos_3_1: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#F0FDF4"/>
        <text x="200" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#166534" text-anchor="middle">RANTAI UTAMA KEGIATAN EKONOMI</text>
        <!-- Produksi -->
        <g transform="translate(30,55)">
          <rect width="95" height="135" rx="12" fill="#FEF3C7" stroke="#D97706" stroke-width="2"/>
          <text x="47" y="35" font-size="30" text-anchor="middle">🏭</text>
          <text x="47" y="68" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400E" text-anchor="middle">PRODUKSI</text>
          <text x="47" y="90" font-family="sans-serif" font-size="9" fill="#78350F" text-anchor="middle">Menghasilkan</text>
          <text x="47" y="103" font-family="sans-serif" font-size="9" fill="#78350F" text-anchor="middle">barang/jasa</text>
          <text x="47" y="124" font-family="sans-serif" font-size="9" font-weight="bold" fill="#B45309" text-anchor="middle">Pelaku: Produsen</text>
        </g>
        <text x="140" y="125" font-size="20" fill="#059669" font-weight="bold">➔</text>
        <!-- Distribusi -->
        <g transform="translate(152,55)">
          <rect width="95" height="135" rx="12" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
          <text x="47" y="35" font-size="30" text-anchor="middle">🚚</text>
          <text x="47" y="68" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1E3A8A" text-anchor="middle">DISTRIBUSI</text>
          <text x="47" y="90" font-family="sans-serif" font-size="9" fill="#1E40AF" text-anchor="middle">Menyalurkan</text>
          <text x="47" y="103" font-family="sans-serif" font-size="9" fill="#1E40AF" text-anchor="middle">ke konsumen</text>
          <text x="47" y="124" font-family="sans-serif" font-size="9" font-weight="bold" fill="#2563EB" text-anchor="middle">Pelaku: Distributor</text>
        </g>
        <text x="262" y="125" font-size="20" fill="#059669" font-weight="bold">➔</text>
        <!-- Konsumsi -->
        <g transform="translate(275,55)">
          <rect width="95" height="135" rx="12" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="47" y="35" font-size="30" text-anchor="middle">🍽️</text>
          <text x="47" y="68" font-family="sans-serif" font-size="12" font-weight="bold" fill="#14532D" text-anchor="middle">KONSUMSI</text>
          <text x="47" y="90" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">Menggunakan /</text>
          <text x="47" y="103" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">menikmati nilai</text>
          <text x="47" y="124" font-family="sans-serif" font-size="9" font-weight="bold" fill="#16A34A" text-anchor="middle">Pelaku: Konsumen</text>
        </g>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#374151" text-anchor="middle">Ketiga kegiatan ini saling bergantung satu sama lain dalam roda perekonomian</text>
      </svg>
    `),
    caption: 'Bagan Alur Rantai Ekonomi: Produksi ➔ Distribusi ➔ Konsumsi',
  },

  q_pos_3_2: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FFF7ED"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#C2410C" text-anchor="middle">CONTOH PRODUSEN BARANG DAN PRODUSEN JASA</text>
        <g transform="translate(40,60)">
          <rect width="145" height="130" rx="12" fill="#FFFFFF" stroke="#EA580C" stroke-width="2"/>
          <text x="72" y="35" font-size="28" text-anchor="middle">🌾 🍞 👟</text>
          <text x="72" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#9A3412" text-anchor="middle">Produsen Barang</text>
          <text x="72" y="86" font-family="sans-serif" font-size="10" fill="#7C2D12" text-anchor="middle">• Petani menghasilkan beras</text>
          <text x="72" y="102" font-family="sans-serif" font-size="10" fill="#7C2D12" text-anchor="middle">• Pembuat roti membuat roti</text>
          <text x="72" y="118" font-family="sans-serif" font-size="10" fill="#7C2D12" text-anchor="middle">• Pabrik membuat sepatu</text>
        </g>
        <g transform="translate(215,60)">
          <rect width="145" height="130" rx="12" fill="#FFFFFF" stroke="#0284C7" stroke-width="2"/>
          <text x="72" y="35" font-size="28" text-anchor="middle">👨‍🏫 ✂️ 🩺</text>
          <text x="72" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369A1" text-anchor="middle">Produsen Jasa</text>
          <text x="72" y="86" font-family="sans-serif" font-size="10" fill="#075985" text-anchor="middle">• Guru memberi ilmu</text>
          <text x="72" y="102" font-family="sans-serif" font-size="10" fill="#075985" text-anchor="middle">• Tukang cukur potong rambut</text>
          <text x="72" y="118" font-family="sans-serif" font-size="10" fill="#075985" text-anchor="middle">• Dokter mengobati pasien</text>
        </g>
        <text x="200" y="218" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4B5563" text-anchor="middle">Barang berwujud fisik, sedangkan jasa berwujud layanan atau tenaga</text>
      </svg>
    `),
    caption: 'Perbedaan Penghasil Barang Fisik vs Penghasil Pelayanan/Jasa',
  },

  q_pos_3_3: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#EFF6FF"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#1E40AF" text-anchor="middle">PERAN DISTRIBUTOR DALAM EKONOMI</text>
        <!-- Factory -->
        <g transform="translate(30,70)">
          <rect width="80" height="80" rx="10" fill="#DBEAFE" stroke="#3B82F6"/>
          <text x="40" y="38" font-size="26" text-anchor="middle">🏭</text>
          <text x="40" y="60" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1E3A8A" text-anchor="middle">Pabrik Buku</text>
        </g>
        <!-- Transport / Distributor -->
        <g transform="translate(145,60)">
          <rect width="110" height="100" rx="12" fill="#FEF08A" stroke="#EAB308" stroke-width="2"/>
          <text x="55" y="35" font-size="28" text-anchor="middle">🚚 📦</text>
          <text x="55" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854D0E" text-anchor="middle">DISTRIBUTOR</text>
          <text x="55" y="74" font-family="sans-serif" font-size="9" fill="#713F12" text-anchor="middle">Agen &amp; Kurir</text>
          <text x="55" y="88" font-family="sans-serif" font-size="8" fill="#713F12" text-anchor="middle">Mengantar ke pelosok</text>
        </g>
        <!-- Consumer -->
        <g transform="translate(290,70)">
          <rect width="80" height="80" rx="10" fill="#DCFCE7" stroke="#10B981"/>
          <text x="40" y="38" font-size="26" text-anchor="middle">🏫 🎒</text>
          <text x="40" y="60" font-family="sans-serif" font-size="10" font-weight="bold" fill="#065F46" text-anchor="middle">Siswa Sekolah</text>
        </g>
        <!-- Lines -->
        <line x1="110" y1="110" x2="145" y2="110" stroke="#2563EB" stroke-width="3"/>
        <line x1="255" y1="110" x2="290" y2="110" stroke="#2563EB" stroke-width="3"/>
        <text x="200" y="200" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E3A8A" text-anchor="middle">Tanpa distributor, barang hasil pabrik tidak akan pernah sampai ke siswa!</text>
      </svg>
    `),
    caption: 'Peran Distributor Menghubungkan Pabrik Pembuat Buku dengan Siswa di Sekolah',
  },

  q_pos_3_4: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FDF4FF"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#86198F" text-anchor="middle">CONTOH KEGIATAN KONSUMSI SEHARI-HARI</text>
        <g transform="translate(30,65)">
          <rect width="100" height="110" rx="10" fill="#FFFFFF" stroke="#D946EF" stroke-width="1.5"/>
          <text x="50" y="40" font-size="30" text-anchor="middle">🍜</text>
          <text x="50" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="#701A75" text-anchor="middle">Makan Bakso</text>
          <text x="50" y="88" font-family="sans-serif" font-size="8" fill="#86198F" text-anchor="middle">Menghabiskan nilai</text>
          <text x="50" y="100" font-family="sans-serif" font-size="8" fill="#86198F" text-anchor="middle">guna makanan</text>
        </g>
        <g transform="translate(150,65)">
          <rect width="100" height="110" rx="10" fill="#FFFFFF" stroke="#D946EF" stroke-width="1.5"/>
          <text x="50" y="40" font-size="30" text-anchor="middle">👟</text>
          <text x="50" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="#701A75" text-anchor="middle">Memakai Sepatu</text>
          <text x="50" y="88" font-family="sans-serif" font-size="8" fill="#86198F" text-anchor="middle">Menggunakan manfaat</text>
          <text x="50" y="100" font-family="sans-serif" font-size="8" fill="#86198F" text-anchor="middle">barang secara berkala</text>
        </g>
        <g transform="translate(270,65)">
          <rect width="100" height="110" rx="10" fill="#FFFFFF" stroke="#D946EF" stroke-width="1.5"/>
          <text x="50" y="40" font-size="30" text-anchor="middle">🚌</text>
          <text x="50" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="#701A75" text-anchor="middle">Naik Angkot</text>
          <text x="50" y="88" font-family="sans-serif" font-size="8" fill="#86198F" text-anchor="middle">Menggunakan jasa</text>
          <text x="50" y="100" font-family="sans-serif" font-size="8" fill="#86198F" text-anchor="middle">transportasi sopir</text>
        </g>
        <text x="200" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4A044E" text-anchor="middle">Konsumen adalah pihak yang menggunakan atau menghabiskan nilai guna barang/jasa</text>
      </svg>
    `),
    caption: 'Ragam Tindakan Konsumsi Barang Maupun Jasa dalam Kehidupan Pelajar',
  },

  // POS 4: Lapangan (Kegiatan Ekonomi Daerah & Bentang Alam)
  q_pos_4_1: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#F0F9FF"/>
        <text x="200" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0369A1" text-anchor="middle">MATA PENCAHARIAN BERDASARKAN BENTANG ALAM</text>
        <!-- Pesisir Pantai -->
        <g transform="translate(25,55)">
          <rect width="105" height="135" rx="12" fill="#E0F2FE" stroke="#0284C7" stroke-width="2"/>
          <text x="52" y="32" font-size="26" text-anchor="middle">🏖️ 🎣</text>
          <text x="52" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#075985" text-anchor="middle">PESISIR PANTAI</text>
          <text x="52" y="80" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">• Nelayan Tangkap</text>
          <text x="52" y="96" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">• Petani Garam</text>
          <text x="52" y="112" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">• Budidaya Rumput Laut</text>
          <text x="52" y="128" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">• Pemandu Wisata</text>
        </g>
        <!-- Dataran Rendah -->
        <g transform="translate(148,55)">
          <rect width="105" height="135" rx="12" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2"/>
          <text x="52" y="32" font-size="26" text-anchor="middle">🌾 🏙️</text>
          <text x="52" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854D0E" text-anchor="middle">DATARAN RENDAH</text>
          <text x="52" y="80" font-family="sans-serif" font-size="9" fill="#A16207" text-anchor="middle">• Petani Padi Sawah</text>
          <text x="52" y="96" font-family="sans-serif" font-size="9" fill="#A16207" text-anchor="middle">• Pedagang Pasar</text>
          <text x="52" y="112" font-family="sans-serif" font-size="9" fill="#A16207" text-anchor="middle">• Karyawan &amp; Buruh</text>
          <text x="52" y="128" font-family="sans-serif" font-size="9" fill="#A16207" text-anchor="middle">• Peternak Unggas</text>
        </g>
        <!-- Dataran Tinggi -->
        <g transform="translate(270,55)">
          <rect width="105" height="135" rx="12" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="52" y="32" font-size="26" text-anchor="middle">⛰️ 🍵</text>
          <text x="52" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532D" text-anchor="middle">DATARAN TINGGI</text>
          <text x="52" y="80" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">• Perkebunan Teh/Kopi</text>
          <text x="52" y="96" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">• Petani Sayur &amp; Buah</text>
          <text x="52" y="112" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">• Peternak Sapi Perah</text>
          <text x="52" y="128" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">• Penginapan Villa</text>
        </g>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Bentang alam sangat menentukan profesi dan komoditas unggulan masyarakat</text>
      </svg>
    `),
    caption: 'Pengaruh Bentang Alam Terhadap Profesi Ekonomi: Pesisir, Dataran Rendah, dan Dataran Tinggi',
  },

  q_pos_4_2: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FEFCE8"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#854D0E" text-anchor="middle">PASAR TRADISIONAL VS PASAR MODERN</text>
        <g transform="translate(35,55)">
          <rect width="150" height="135" rx="12" fill="#FFFFFF" stroke="#EAB308" stroke-width="2"/>
          <text x="75" y="35" font-size="28" text-anchor="middle">🎪 🥬</text>
          <text x="75" y="62" font-family="sans-serif" font-size="12" font-weight="bold" fill="#854D0E" text-anchor="middle">Pasar Tradisional</text>
          <text x="75" y="84" font-family="sans-serif" font-size="9" fill="#713F12" text-anchor="middle">• Terjadi TAWAR MENAWAR</text>
          <text x="75" y="100" font-family="sans-serif" font-size="9" fill="#713F12" text-anchor="middle">• Penjual &amp; pembeli bertemu</text>
          <text x="75" y="116" font-family="sans-serif" font-size="9" fill="#713F12" text-anchor="middle">• Sayur &amp; ikan segar lokal</text>
          <text x="75" y="132" font-family="sans-serif" font-size="9" fill="#713F12" text-anchor="middle">• Khas budaya nusantara</text>
        </g>
        <g transform="translate(215,55)">
          <rect width="150" height="135" rx="12" fill="#FFFFFF" stroke="#0284C7" stroke-width="2"/>
          <text x="75" y="35" font-size="28" text-anchor="middle">🏬 🛒</text>
          <text x="75" y="62" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369A1" text-anchor="middle">Pasar Modern</text>
          <text x="75" y="84" font-family="sans-serif" font-size="9" fill="#075985" text-anchor="middle">• HARGA PAS (Barcode/Label)</text>
          <text x="75" y="100" font-family="sans-serif" font-size="9" fill="#075985" text-anchor="middle">• Swalayan (ambil sendiri)</text>
          <text x="75" y="116" font-family="sans-serif" font-size="9" fill="#075985" text-anchor="middle">• Ruangan ber-AC nyaman</text>
          <text x="75" y="132" font-family="sans-serif" font-size="9" fill="#075985" text-anchor="middle">• Bayar tunai / kartu / QRIS</text>
        </g>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4B5563" text-anchor="middle">Ciri utama pasar tradisional adalah adanya proses tawar-menawar harga</text>
      </svg>
    `),
    caption: 'Perbandingan Ciri Pasar Tradisional (Tawar-Menawar) dan Pasar Modern (Supermarket Harga Pas)',
  },

  q_pos_4_3: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#F0FDF4"/>
        <text x="200" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#15803D" text-anchor="middle">KERJASAMA ANTARDAERAH MEMENUHI KEBUTUHAN</text>
        <!-- Pegunungan -->
        <g transform="translate(30,60)">
          <rect width="145" height="110" rx="12" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
          <text x="72" y="35" font-size="26" text-anchor="middle">⛰️ 🥦 🥕</text>
          <text x="72" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532D" text-anchor="middle">Daerah Pegunungan</text>
          <text x="72" y="78" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">Surplus: Sayuran, Kol, Teh</text>
          <text x="72" y="94" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">Kekurangan: Ikan Laut &amp; Garam</text>
        </g>
        <!-- Pesisir -->
        <g transform="translate(225,60)">
          <rect width="145" height="110" rx="12" fill="#E0F2FE" stroke="#0284C7" stroke-width="2"/>
          <text x="72" y="35" font-size="26" text-anchor="middle">🏖️ 🐟 🧂</text>
          <text x="72" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#075985" text-anchor="middle">Daerah Pesisir</text>
          <text x="72" y="78" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">Surplus: Ikan Segar, Garam</text>
          <text x="72" y="94" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">Kekurangan: Sayuran Segar</text>
        </g>
        <!-- Arrows -->
        <path d="M 180,85 Q 200,70 220,85" stroke="#16A34A" stroke-width="3" fill="none"/>
        <text x="200" y="80" font-size="10" text-anchor="middle">Sayur ➔</text>
        <path d="M 220,135 Q 200,150 180,135" stroke="#0284C7" stroke-width="3" fill="none"/>
        <text x="200" y="160" font-size="10" text-anchor="middle">Ikan ➔</text>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#374151" text-anchor="middle">Perdagangan antardaerah saling melengkapi kekayaan alam masing-masing daerah</text>
      </svg>
    `),
    caption: 'Interaksi Ekonomi Antardaerah: Petani Dataran Tinggi Bertransaksi dengan Nelayan Pesisir',
  },

  q_pos_4_4: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#F8FAFC"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#0F172A" text-anchor="middle">USAHA EKONOMI MASYARAKAT (AGRARIS, MARITIM, INDUSTRI)</text>
        <g transform="translate(30,55)">
          <rect width="100" height="120" rx="10" fill="#FEF3C7" stroke="#F59E0B"/>
          <text x="50" y="38" font-size="26" text-anchor="middle">🌾</text>
          <text x="50" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400E" text-anchor="middle">AGRARIS</text>
          <text x="50" y="85" font-family="sans-serif" font-size="9" fill="#78350F" text-anchor="middle">Memanfaatkan tanah</text>
          <text x="50" y="99" font-family="sans-serif" font-size="9" fill="#78350F" text-anchor="middle">Pertanian, sawah,</text>
          <text x="50" y="113" font-family="sans-serif" font-size="9" fill="#78350F" text-anchor="middle">dan perkebunan</text>
        </g>
        <g transform="translate(150,55)">
          <rect width="100" height="120" rx="10" fill="#E0F2FE" stroke="#0284C7"/>
          <text x="50" y="38" font-size="26" text-anchor="middle">🚢</text>
          <text x="50" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#075985" text-anchor="middle">MARITIM</text>
          <text x="50" y="85" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">Memanfaatkan laut</text>
          <text x="50" y="99" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">Perikanan laut &amp;</text>
          <text x="50" y="113" font-family="sans-serif" font-size="9" fill="#0369A1" text-anchor="middle">jasa transportasi air</text>
        </g>
        <g transform="translate(270,55)">
          <rect width="100" height="120" rx="10" fill="#F1F5F9" stroke="#64748B"/>
          <text x="50" y="38" font-size="26" text-anchor="middle">🏭</text>
          <text x="50" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B" text-anchor="middle">INDUSTRI</text>
          <text x="50" y="85" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">Mengolah bahan baku</text>
          <text x="50" y="99" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">menjadi barang jadi</text>
          <text x="50" y="113" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">seperti tekstil &amp; kayu</text>
        </g>
        <text x="200" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0284C7" text-anchor="middle">Indonesia dikenal sebagai negara Agraris dan Maritim yang kaya sumber daya</text>
      </svg>
    `),
    caption: 'Pengelompokan Bidang Usaha Ekonomi: Agraris, Maritim, dan Industri Pengolahan',
  },

  // POS 5: Gudang (Aku Pelaku Ekonomi yang Bijak)
  q_pos_5_1: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FEF3C7"/>
        <text x="200" y="30" font-family="sans-serif" font-size="15" font-weight="bold" fill="#92400E" text-anchor="middle">TABEL SKALA PRIORITAS KEBUTUHAN SISWA</text>
        <!-- Table -->
        <g transform="translate(30,50)">
          <!-- Header -->
          <rect width="340" height="30" rx="6" fill="#F59E0B"/>
          <text x="20" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Prioritas</text>
          <text x="140" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Kategori Kebutuhan</text>
          <text x="280" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF">Tindakan</text>
          <!-- Row 1 -->
          <rect y="35" width="340" height="35" rx="6" fill="#FEF9C3" stroke="#FDE047"/>
          <text x="20" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B91C1C">Tingkat I</text>
          <text x="140" y="53" font-family="sans-serif" font-size="10" font-weight="bold" fill="#78350F">Penting &amp; Mendesak</text>
          <text x="140" y="65" font-family="sans-serif" font-size="9" fill="#92400E">(Buku tulis habis, obat flu)</text>
          <text x="280" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857">Beli Sekarang!</text>
          <!-- Row 2 -->
          <rect y="75" width="340" height="35" rx="6" fill="#ECFDF5" stroke="#A7F3D0"/>
          <text x="20" y="98" font-family="sans-serif" font-size="11" font-weight="bold" fill="#D97706">Tingkat II</text>
          <text x="140" y="93" font-family="sans-serif" font-size="10" font-weight="bold" fill="#065F46">Penting tapi Tidak Mendesak</text>
          <text x="140" y="105" font-family="sans-serif" font-size="9" fill="#047857">(Sepatu cadangan, ensiklopedia)</text>
          <text x="280" y="98" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369A1">Bisa Ditunda</text>
          <!-- Row 3 -->
          <rect y="115" width="340" height="35" rx="6" fill="#FFF1F2" stroke="#FECDD3"/>
          <text x="20" y="138" font-family="sans-serif" font-size="11" font-weight="bold" fill="#6B7280">Tingkat III</text>
          <text x="140" y="133" font-family="sans-serif" font-size="10" font-weight="bold" fill="#9F1239">Kurang Penting / Keinginan</text>
          <text x="140" y="145" font-family="sans-serif" font-size="9" fill="#BE123C">(Mainan mahal, top-up game online)</text>
          <text x="280" y="138" font-family="sans-serif" font-size="10" font-weight="bold" fill="#DC2626">Batalkan / Nanti</text>
        </g>
        <text x="200" y="222" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B45309" text-anchor="middle">Menyusun skala prioritas menghindarkan kita dari perilaku boros</text>
      </svg>
    `),
    caption: 'Tabel Skala Prioritas: Urutan Pembelian Berdasarkan Tingkat Kepentingan & Keterdesakan',
  },

  q_pos_5_2: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#ECFDF5"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#047857" text-anchor="middle">MANFAAT MEMBIASAKAN MENABUNG SEJAK DINI</text>
        <!-- Celengan -->
        <g transform="translate(45,65)">
          <rect width="135" height="120" rx="14" fill="#FFFFFF" stroke="#10B981" stroke-width="2"/>
          <text x="67" y="42" font-size="36" text-anchor="middle">🐷🪙</text>
          <text x="67" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="#065F46" text-anchor="middle">Celengan &amp; Bank</text>
          <text x="67" y="95" font-family="sans-serif" font-size="9" fill="#047857" text-anchor="middle">Sisihkan uang saku</text>
          <text x="67" y="108" font-family="sans-serif" font-size="9" fill="#047857" text-anchor="middle">di awal, bukan sisa!</text>
        </g>
        <!-- Keuntungan -->
        <g transform="translate(205,65)">
          <rect width="150" height="120" rx="14" fill="#FFFFFF" stroke="#059669" stroke-width="2"/>
          <text x="75" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065F46" text-anchor="middle">Manfaat Menabung:</text>
          <text x="15" y="52" font-family="sans-serif" font-size="9" fill="#047857">✓ Dana darurat saat sakit</text>
          <text x="15" y="70" font-family="sans-serif" font-size="9" fill="#047857">✓ Biaya pendidikan lanjutan</text>
          <text x="15" y="88" font-family="sans-serif" font-size="9" fill="#047857">✓ Membeli barang impian sendiri</text>
          <text x="15" y="106" font-family="sans-serif" font-size="9" fill="#047857">✓ Belajar hidup mandiri &amp; hemat</text>
        </g>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">Pepatah: "Hemat pangkal kaya, rajin pangkal pandai"</text>
      </svg>
    `),
    caption: 'Manfaat Menabung Uang Saku Sejak Kecil untuk Masa Depan',
  },

  q_pos_5_3: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#F0FDF4"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#166534" text-anchor="middle">EKONOMI HIJAU &amp; SIRKULAR: PRINSIP 3R</text>
        <!-- Reduce -->
        <g transform="translate(30,60)">
          <rect width="100" height="120" rx="12" fill="#FFFFFF" stroke="#22C55E" stroke-width="2"/>
          <text x="50" y="38" font-size="26" text-anchor="middle">🛑 🛍️</text>
          <text x="50" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803D" text-anchor="middle">REDUCE</text>
          <text x="50" y="85" font-family="sans-serif" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle">Mengurangi</text>
          <text x="50" y="99" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">Bawa tas belanja</text>
          <text x="50" y="111" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">sendiri tanpa plastik</text>
        </g>
        <!-- Reuse -->
        <g transform="translate(150,60)">
          <rect width="100" height="120" rx="12" fill="#FFFFFF" stroke="#22C55E" stroke-width="2"/>
          <text x="50" y="38" font-size="26" text-anchor="middle">🔄 🍶</text>
          <text x="50" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803D" text-anchor="middle">REUSE</text>
          <text x="50" y="85" font-family="sans-serif" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle">Menggunakan Ulang</text>
          <text x="50" y="99" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">Bawa botol tumbler,</text>
          <text x="50" y="111" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">pakai wadah makanan</text>
        </g>
        <!-- Recycle -->
        <g transform="translate(270,60)">
          <rect width="100" height="120" rx="12" fill="#FFFFFF" stroke="#22C55E" stroke-width="2"/>
          <text x="50" y="38" font-size="26" text-anchor="middle">♻️ 📦</text>
          <text x="50" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803D" text-anchor="middle">RECYCLE</text>
          <text x="50" y="85" font-family="sans-serif" font-size="9" font-weight="bold" fill="#166534" text-anchor="middle">Mendaur Ulang</text>
          <text x="50" y="99" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">Kardus bekas diolah</text>
          <text x="50" y="111" font-family="sans-serif" font-size="8" fill="#166534" text-anchor="middle">jadi karya kerajinan</text>
        </g>
        <text x="200" y="210" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803D" text-anchor="middle">Pelaku ekonomi bijak tidak hanya mencari keuntungan, tapi menjaga kelestarian bumi</text>
      </svg>
    `),
    caption: 'Penerapan Prinsip 3R (Reduce, Reuse, Recycle) Sebagai Konsumen Peduli Lingkungan',
  },

  q_pos_5_4: {
    url: encodeSvg(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%">
        <rect width="400" height="240" rx="16" fill="#FDF4FF"/>
        <text x="200" y="32" font-family="sans-serif" font-size="15" font-weight="bold" fill="#701A75" text-anchor="middle">PRINSIP EKONOMI: MEMILIH DENGAN CERDAS</text>
        <g transform="translate(45,60)">
          <rect width="310" height="125" rx="14" fill="#FFFFFF" stroke="#C026D3" stroke-width="2"/>
          <text x="155" y="35" font-size="28" text-anchor="middle">🧠 💡 🔍</text>
          <text x="155" y="65" font-family="sans-serif" font-size="12" font-weight="bold" fill="#86198F" text-anchor="middle">
            Ciri Konsumen Cerdas &amp; Bertanggung Jawab:
          </text>
          <text x="30" y="90" font-family="sans-serif" font-size="10" fill="#4A044E">
            1. Membandingkan harga &amp; kualitas barang sebelum membeli
          </text>
          <text x="30" y="108" font-family="sans-serif" font-size="10" fill="#4A044E">
            2. Memeriksa tanggal kadaluarsa (expired date) dan sertifikasi halal/BPOM
          </text>
          <text x="30" y="126" font-family="sans-serif" font-size="10" fill="#4A044E">
            3. Membeli barang sesuai kebutuhan, bukan karena gengsi atau tergiur promo
          </text>
        </g>
        <text x="200" y="215" font-family="sans-serif" font-size="11" font-weight="bold" fill="#701A75" text-anchor="middle">
          Prinsip Ekonomi: Mengeluarkan pengorbanan tertentu untuk memperoleh hasil maksimal
        </text>
      </svg>
    `),
    caption: 'Ciri-ciri Konsumen yang Menerapkan Prinsip Ekonomi Cerdas dan Teliti',
  },
};
