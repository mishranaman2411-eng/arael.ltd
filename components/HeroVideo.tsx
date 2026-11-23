'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

/**
 * Responsive full-bleed luxury streetwear hero section for ARAEL.
 *
 * Requirements addressed:
 * 1. Zero Double-Download: Evaluates `window.matchMedia('(max-width: 768px)')` on mount to conditionally
 *    render ONLY the matching video source. Never mounts two <video> tags in the DOM.
 * 2. Mobile Address-bar Jump Prevention: Container locked to `h-[100svh] w-full overflow-hidden bg-[#0a0a0a]`
 *    with `object-cover` to prevent layout shifts.
 * 3. Video attributes: `autoPlay`, `muted`, `loop`, `playsInline`, `preload="metadata"`, `poster="/images/arael-hero-poster.webp"`.
 * 4. Baked-in text synchronization: The video contains baked-in bold typography at ~5.7s to 10.0s.
 *    The HTML wordmark syncs dynamically: visible during the cinematic opening (0s–5.6s),
 *    smoothly fading so the baked-in video typography takes center stage without clashing or ghosting.
 * 5. Minimal sharp-edged CTA: "SHOP DROP 01" linking to `/collections/drop-01` with raw editorial aesthetics.
 */
export default function HeroVideo() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isBakedInActive, setIsBakedInActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Match media listener to ensure zero double-download
  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const targetSrc = e.matches
        ? '/videos/arael-hero-mobile.mp4'
        : '/videos/arael-hero-desktop.mp4';

      setVideoSrc(targetSrc);
    };

    // Initial evaluation on mount
    handleMediaChange(mobileQuery);

    // Modern and legacy event listener fallback
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener('change', handleMediaChange);
      return () => mobileQuery.removeEventListener('change', handleMediaChange);
    } else {
      mobileQuery.addListener(handleMediaChange);
      return () => mobileQuery.removeListener(handleMediaChange);
    }
  }, []);

  // Ensure autoplay triggers reliably even if browser autoplay policies are strict
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback, video remains ready on user gesture
      });
    }
  }, [videoSrc]);

  // Sync with video playback: detect when the baked-in "ARAEL" text appears (t ≈ 5.6s to 9.8s)
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    // Between 5.6s and 9.8s in the 10s loop, baked-in title is displayed
    const hasBakedText = time >= 5.6 && time <= 9.8;
    if (hasBakedText !== isBakedInActive) {
      setIsBakedInActive(hasBakedText);
    }
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Editorial High-Fashion Vignette / Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-radial-[at_center]_transparent_50%,rgba(0,0,0,0.4)_100%" />

      {/* Video / Poster Canvas - Exactly ONE <video> tag in the DOM */}
      {videoSrc ? (
        <video
          ref={videoRef}
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/arael-hero-poster.webp"
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          src="/images/arael-hero-poster.webp"
          alt="ARAEL Streetwear Lookbook"
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        />
      )}

      {/* Editorial Navigation Micro-Bar (Top) */}
      <header className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 py-6 sm:px-10 md:px-14">
        <div className="flex items-center gap-3">
          <span className="inline-block h-1.5 w-1.5 bg-red-600 animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
            DROP 01 // AUTUMN-WINTER
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-8 font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">
          <span>EDITION OF 100</span>
          <span>300 GSM FLEECE</span>
          <span className="text-white/90">PAN-INDIA COD</span>
        </div>
        <Link
          href="/collections/drop-01"
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors duration-200"
        >
          CATALOG [07]
        </Link>
      </header>

      {/* Dead-Center Brand Lockup & Minimal Sharp-Edged CTA */}
      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        {/*
          Crisp white geometric sans-serif wordmark reading ARAEL (tracking-[0.18em], font-black uppercase).
          Smoothly transitions opacity to sync cleanly with video's baked-in wordmark without double-text clash.
        */}
        <div className="relative flex flex-col items-center justify-center">
          <h1
            className={`select-none font-sans text-6xl font-black uppercase tracking-[0.18em] text-white transition-opacity duration-500 ease-out sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] ${
              isBakedInActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{
              textShadow: '0 4px 30px rgba(0,0,0,0.6)',
              fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
            }}
          >
            ARAEL
          </h1>

          {/* Sub-label under brand mark during intro cut */}
          <p
            className={`mt-2 font-mono text-[11px] tracking-[0.35em] text-white/70 uppercase transition-opacity duration-500 sm:text-xs ${
              isBakedInActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            HERITAGE MEETS STREETWEAR
          </p>

          {/* Minimal Sharp-Edged CTA Button (0px border-radius, pure high-fashion architectural lines) */}
          <div className="mt-8 sm:mt-10">
            <Link
              href="/collections/drop-01"
              className="group relative inline-flex items-center justify-center border border-white/80 bg-black/40 px-8 py-3.5 sm:px-10 sm:py-4 backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white text-white hover:text-black rounded-none"
            >
              <span className="font-mono text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-200">
                SHOP DROP 01
              </span>
              <svg
                className="ml-3 h-3 w-3 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1M11 1H3M11 1V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Editorial Bottom Metadata Footer Bar */}
      <footer className="absolute bottom-0 inset-x-0 z-20 flex items-end justify-between px-6 py-6 sm:px-10 md:px-14">
        <div className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase">
          <p className="hidden sm:block">COORD: 28.6139° N, 77.2090° E</p>
          <p className="text-white/70">ARCHIVE © 2026</p>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-mono text-[9px] tracking-[0.3em] text-white/60 uppercase animate-bounce">
            SCROLL ↓
          </span>
        </div>

        <div className="text-right font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase">
          <p className="text-white/80">AUTHENTIC KHADI & INDIGO</p>
          <p className="hidden sm:block">LIMITED RUN ALLOCATIONS</p>
        </div>
      </footer>
    </section>
  );
}
