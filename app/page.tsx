export default function Home() {
  return (
    <main className="min-h-screen bg-[#020711] text-white overflow-x-hidden">
      {/* HERO TEXT */}
      <section className="relative flex min-h-[55vh] flex-col items-center justify-center px-6 py-20 text-center">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,220,255,0.14),transparent_42%)]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-400">
            MECAI.SI
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Salah Satu Pionir
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Domain .SI Pertama di Indonesia
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Sebuah langkah awal menuju identitas digital baru,
            <br className="hidden sm:block" />
            yang membawa visi teknologi Indonesia ke masa depan.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="flex justify-center px-4 pb-20 sm:px-6">
        <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-cyan-400/20 bg-black shadow-[0_0_60px_rgba(0,200,255,0.12)]">
          <video
            className="block h-auto w-full"
            src="/video-si.mp4"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="px-6 pb-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg font-medium leading-8 text-slate-200 sm:text-2xl sm:leading-10">
            Kehadiran <span className="text-cyan-400">.SI</span> menjadi bagian
            dari perjalanan baru MECAI dalam membangun identitas teknologi
            berbasis kecerdasan buatan di Indonesia.
          </p>

          <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
            Saksikan pengenalan awal MECAI.SI dan perjalanan teknologi yang
            melatarbelakanginya.
          </p>

          <a
            href="https://mecai.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-7 py-3 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-white"
          >
            Jelajahi MECAI.ai
            <span className="ml-2">↗</span>
          </a>
        </div>
      </section>

      {/* CREDIT */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          Dipersembahkan oleh
        </p>

        <p className="mt-3 text-sm font-medium text-slate-300">
          Inisiator Teknologi Interview Avatar AI di Indonesia
        </p>

        <p className="mt-3 text-xs text-slate-600">
          © {new Date().getFullYear()} MECAI.ai
        </p>
      </footer>
    </main>
  );
}