"use client";

import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!videoRef.current) return;

    const nextMuted = !videoRef.current.muted;

    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020711] text-white">
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

      {/* VIDEO CINEMATIC */}
      <section className="relative flex w-full justify-center bg-[#020711]">
        {/* DESKTOP:
            1 viewport penuh.
            Video portrait mengikuti tinggi viewport.
            Tidak crop dan tidak dipaksa memenuhi lebar.
        */}
        <div className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-black">
          <div className="relative h-full max-h-full w-auto aspect-[9/16]">
            <video
              ref={videoRef}
              className="block h-full w-full object-contain"
              src="/video-si.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />

            {/* CINEMATIC OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020711]/35 via-transparent to-[#020711]/10" />

            {/* SOUND BUTTON */}
            <button
              type="button"
              onClick={toggleSound}
              aria-label={isMuted ? "Aktifkan suara" : "Matikan suara"}
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/25 bg-[#061522]/55 text-cyan-200 shadow-[0_0_12px_rgba(0,220,255,0.10)] backdrop-blur-md transition-all duration-300 hover:border-cyan-200/45 hover:bg-[#082033]/70 hover:shadow-[0_0_18px_rgba(0,220,255,0.16)]"
            >
              {isMuted ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="m23 9-6 6" />
                  <path d="m17 9 6 6" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M11 5 6 9H2v6h4l5 4V5Z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="px-6 pb-24 pt-16 text-center">
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