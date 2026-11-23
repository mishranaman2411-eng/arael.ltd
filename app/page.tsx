import React from 'react';
import Link from 'next/link';
import HeroVideo from '@/components/HeroVideo';

// Curated Drop 01 pieces for the editorial lookbook
const LOOKBOOK_ITEMS = [
  {
    id: '01',
    name: 'NOIR BLACK LOTUS SET',
    edition: '25 / 100',
    spec: '300 GSM FLEECE // PUFF PRINT',
    price: '₹2,399',
    tag: 'LIMITED RUN',
    image: '/designs/black/Black Embroidered Lotus Tracksuit.png',
    link: '/collections/drop-01#noir-black-lotus',
  },
  {
    id: '02',
    name: 'MIDNIGHT WARLI CROPPED SET',
    edition: '30 / 100',
    spec: 'BIO-WASHED COTTON // BORDER MOTIF',
    price: '₹2,299',
    tag: 'INDIGO CORE',
    image: '/designs/midnight-navy/Model_posing_in_streetwear_98dda641-clean.png',
    link: '/collections/drop-01#midnight-warli',
  },
  {
    id: '03',
    name: 'RAW KHADI HERITAGE HOODIE',
    edition: '15 / 100',
    spec: 'UNBLEACHED NATURAL TEXTURE',
    price: '₹2,499',
    tag: 'ARCHIVAL',
    image: '/designs/raw-khadi/Hoodie_and_trousers_on_mannequin_526e0421-clean.png',
    link: '/collections/drop-01#raw-khadi',
  },
  {
    id: '04',
    name: 'CRIMSON CARPET FESTIVE SET',
    edition: '20 / 100',
    spec: 'ANTIQUE GOLD FOIL // CROPPED ZIP',
    price: '₹2,199',
    tag: 'DROP EXCLUSIVE',
    image: '/designs/maroon/Maroon Patchwork Bohemian Tracksuit Portrait.png',
    link: '/collections/drop-01#crimson-carpet',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f1de] selection:bg-white selection:text-black">
      {/* 1. Responsive Full-Bleed Hero Video Section */}
      <HeroVideo />

      {/* 2. Editorial Manifesto Strip */}
      <section className="relative z-10 border-t border-white/10 bg-[#0a0a0a] px-6 py-16 sm:px-10 sm:py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
                PROLOGUE // STATEMENT
              </span>
              <h2 className="mt-3 font-sans text-3xl font-light uppercase tracking-tight sm:text-5xl md:text-6xl text-white">
                HEAVYWEIGHT SILHOUETTES.<br />
                <span className="font-serif italic text-white/70">SACRED GEOMETRY.</span>
              </h2>
            </div>
            <p className="max-w-md font-mono text-xs leading-relaxed tracking-wider text-white/60 uppercase">
              ARAEL converges centuries-old Indian artisan techniques—Warli tribal scripts, Khadi weaving, and temple brass borders—with boxy 300 GSM streetwear cuts engineered for the metropolis.
            </p>
          </div>
        </div>
      </section>

      {/* 3. High-Fashion Editorial Lookbook Grid */}
      <section id="lookbook" className="relative z-10 border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 md:px-16">
          <div className="flex items-center justify-between pb-8 border-b border-white/10">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/80">
              DROP 01 // SELECTED PIECES
            </span>
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">
              [04 / 07 ARCHIVED]
            </span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 border-b border-white/10">
            {LOOKBOOK_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between p-6 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                    <span>{item.id} // {item.tag}</span>
                    <span>{item.edition}</span>
                  </div>

                  <div className="relative mt-6 aspect-[3/4] w-full overflow-hidden bg-white/[0.03]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="mt-6 font-mono text-xs font-bold tracking-[0.2em] uppercase text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.15em] text-white/50">
                    {item.spec}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-sm font-semibold tracking-wider text-white">
                    {item.price}
                  </span>
                  <Link
                    href={item.link}
                    className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-200"
                  >
                    INSPECT +
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Minimalist Raw Editorial Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#0a0a0a] px-6 py-14 sm:px-10 md:px-16">
        <div className="mx-auto max-w-7xl flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <div className="font-sans text-2xl font-black tracking-[0.18em] text-white">
              ARAEL
            </div>
            <p className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-white/50">
              WEAR YOUR VIBE, HONOR YOUR ROOTS // NEW DELHI, INDIA
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 font-mono text-[10px] tracking-[0.2em] uppercase text-white/60">
            <Link href="/collections/drop-01" className="hover:text-white transition-colors">
              ALL GARMENTS
            </Link>
            <span className="text-white/20">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              CARE & SPECIFICATIONS
            </span>
            <span className="text-white/20">/</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              AUTHENTICITY VERIFICATION
            </span>
          </div>

          <div className="font-mono text-[10px] tracking-[0.2em] text-white/40">
            © 2026 ARAEL. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </main>
  );
}

