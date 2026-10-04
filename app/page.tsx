import React from 'react';

export const metadata = {
  title: 'MECAI.si - Pionir Super Inteligensia di Asia',
  description: 'Landing page informasi produk berbasis teknologi masa depan. Inovator pertama di Asia dengan identitas digital .si.',
  alternates: {
    canonical: 'https://mecai.si',
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      
      {/* NAVBAR */}
      <nav className="border-b border-slate-900 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-black tracking-wider text-blue-500">
            MECAI<span className="text-emerald-400">.si</span>
          </div>
          <div className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
            Pioneer domain .SI di Asia
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
          Inovasi Digital Terdepan
        </span>
        <h1 className="mt-8 text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
          Mendahului Tren Teknologi Asia <br className="hidden sm:inline" />
          <span className="from-blue-400 to-emerald-400 bg-gradient-to-r bg-clip-text text-transparent">Dari Indonesia</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Selamat datang di <strong>mecai.si</strong>. Kami bangga membawa nama Indonesia ke panggung digital regional sebagai salah satu inovator pertama di Asia yang mengaktifkan halaman informasi produk berbasis teknologi masa depan.
        </p>
        
        {/* Info Peluncuran Produk */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto shadow-xl">
          <p className="text-sm text-slate-400 mb-2">Peluncuran Resmi Informasi Produk:</p>
          <p className="text-lg font-bold text-white">
            Senin, 5 Oktober 2026
          </p>
        </div>
      </header>

      {/* WHY .SI SECTION */}
      <section className="bg-slate-900/40 border-y border-slate-900 py-20 my-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6">
            Mengapa .SI? Menatap Masa Depan Digital Asia
          </h2>
          <p className="text-slate-3xl text-lg sm:text-xl leading-relaxed font-light max-w-3xl mx-auto">
            "Di saat dunia digital hari ini masih dipadati oleh domain masa lalu, <strong className="text-white font-semibold">MECAI</strong> mengambil langkah berani dengan mengadopsi ekstensi <span className="text-emerald-400 font-mono">.si</span> (<span className="italic text-slate-3xl">Super Intelligence</span>) sebagai identitas resmi kami. Langkah ini menjadikan kami sebagai salah satu inovator pertama di Asia yang mengintegrasikan visi kecerdasan masa depan ke dalam sebuah landing page informasi produk. Kami tidak hanya mengikuti tren teknologi—<span className="text-blue-400 font-medium">kami mendahuluinya</span>."
          </p>
        </div>
      </section>

      {/* TIGA PILAR UTAMA */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 transition hover:border-blue-500/40">
            <h3 className="text-lg font-semibold mb-2 text-white">1. Visi Regional</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Membawa standar eksposur informasi produk digital setara dengan ekosistem teknologi maju di Asia.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 transition hover:border-emerald-500/40">
            <h3 className="text-lg font-semibold mb-2 text-white">2. Kecepatan Ekstrim</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Arsitektur Next.js modern yang dideploy secara global, menjamin akses instan tanpa hambatan dari mana saja.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/60 transition hover:border-purple-500/40">
            <h3 className="text-lg font-semibold mb-2 text-white">3. Kredibilitas Informasi</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Menyajikan transparansi data produk yang bersih, akurat, dan dirancang khusus untuk kenyamanan Anda.</p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} MECAI.si. Hak Cipta Dilindungi.</p>
          <p className="mt-2 sm:mt-0">Dibuat dengan Next.js &amp; Vercel untuk Asia &amp; Indonesia</p>
        </div>
      </footer>

    </div>
  );
}
