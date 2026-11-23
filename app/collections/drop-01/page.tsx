import React from 'react';
import Link from 'next/link';

const ALL_PRODUCTS = [
  {
    id: 'noir-black-lotus',
    name: 'NOIR BLACK LOTUS SET',
    tag: 'LIMITED RUN // DROP EXCLUSIVE',
    price: '₹2,399',
    gsm: '300 GSM COMBED FLEECE',
    motif: 'HIGH-DENSITY SACRED LOTUS PUFF PRINT',
    fit: 'BOXY OVERSIZED + RELAXED TRACK',
    image: '/designs/black/Black Embroidered Lotus Tracksuit.png',
  },
  {
    id: 'midnight-warli',
    name: 'MIDNIGHT WARLI CROPPED SET',
    tag: 'INDIGO CORE // ARCHIVE 01',
    price: '₹2,299',
    gsm: '300 GSM BIO-WASHED FLEECE',
    motif: 'TRIBAL WARLI HIGH-DENSITY PRINT',
    fit: 'CROPPED ZIP HOODIE + WIDE-LEG TRACK',
    image: '/designs/midnight-navy/Model_posing_in_streetwear_98dda641-clean.png',
  },
  {
    id: 'raw-khadi',
    name: 'RAW KHADI HERITAGE HOODIE',
    tag: 'UNBLEACHED NATURAL // RUN 15',
    price: '₹2,499',
    gsm: '320 GSM HEAVYWEIGHT KHADI WEAVE',
    motif: 'EMBROIDERED BOTANICAL MOTIFS',
    fit: 'DROP-SHOULDER STRUCTURED FIT',
    image: '/designs/raw-khadi/Hoodie_and_trousers_on_mannequin_526e0421-clean.png',
  },
  {
    id: 'crimson-carpet',
    name: 'CRIMSON CARPET FESTIVE SET',
    tag: 'ANTIQUE GOLD // PRAYER ARCH',
    price: '₹2,199',
    gsm: '300 GSM COMBED FLEECE',
    motif: 'CRIMSON ARCH & TRADITIONAL SCREEN PRINT',
    fit: 'STRUCTURED CROPPED ZIP + TRACK',
    image: '/designs/maroon/Maroon Patchwork Bohemian Tracksuit Portrait.png',
  },
  {
    id: 'ash-grey-warli',
    name: 'ASH GREY WARLI CO-ORD SET',
    tag: 'MONOCHROME FOLK // RUN 20',
    price: '₹2,099',
    gsm: '300 GSM BIO-WASHED FLEECE',
    motif: 'TRIBAL WARLI FOLK ART',
    fit: 'DROP-SHOULDER RELAXED CO-ORD',
    image: '/designs/ash-grey/Young_person_posing_in_streetwear_eabd19ed-clean.png',
  },
  {
    id: 'sandstone-taupe',
    name: 'SANDSTONE TAUPE GEOMETRIC SET',
    tag: 'EARTH TONE // RUN 20',
    price: '₹2,199',
    gsm: '300 GSM COMBED FLEECE',
    motif: 'SACRED ARCHITECTURAL LINE EMBROIDERY',
    fit: 'BOXY HOODIE + TAPERED TRACK',
    image: '/designs/taupe/Taupe Embroidered Tracksuit Portrait.png',
  },
  {
    id: 'two-tone-cargo',
    name: 'ONYX & SLATE TWO-TONE CARGO SET',
    tag: 'TACTICAL SPLIT // RUN 20',
    price: '₹2,499',
    gsm: '340 GSM HEAVYWEIGHT RIPSTOP FLEECE',
    motif: 'MINIMAL CHROME HARDWARE & EMBROIDERY',
    fit: 'TACTICAL BOXY FIT + UTILITY POCKETS',
    image: '/designs/two-tone-black-grey/WhatsApp Image 2026-11-18 at 8.40.31 PM (2).jpeg',
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f4f1de] selection:bg-white selection:text-black">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md px-6 py-5 sm:px-10 md:px-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans text-xl font-black tracking-[0.18em] text-white hover:opacity-80 transition-opacity"
        >
          ARAEL
        </Link>
        <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">
          DROP 01 // COMPLETE CATALOG [07 PIECES]
        </div>
        <Link
          href="/"
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
        >
          ← HERO VIEW
        </Link>
      </header>

      {/* Hero Banner for Collection */}
      <div className="border-b border-white/10 px-6 py-12 sm:px-10 sm:py-16 md:px-14">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
            ALL-INDIA RELEASE // LIMITED PRODUCTION
          </span>
          <h1 className="mt-2 font-sans text-4xl font-extrabold uppercase tracking-[0.08em] sm:text-6xl text-white">
            DROP 01 CATALOGUE
          </h1>
          <p className="mt-4 max-w-xl font-mono text-xs leading-relaxed tracking-wider text-white/60 uppercase">
            300 GSM Combed bio-washed cotton fleece engineered with sacred Indian tribal prints, botanical embroidery, and custom hardware. Every piece is numbered in an edition of 100.
          </p>
        </div>
      </div>

      {/* Garments Grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 md:px-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_PRODUCTS.map((prod) => (
            <article
              key={prod.id}
              id={prod.id}
              className="group flex flex-col justify-between border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:border-white/40"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase">
                  <span>{prod.tag}</span>
                  <span className="text-white/80">IN STOCK</span>
                </div>

                <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden bg-white/[0.02]">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h2 className="mt-6 font-mono text-sm font-bold tracking-[0.18em] uppercase text-white">
                  {prod.name}
                </h2>
                <div className="mt-2 space-y-1 font-mono text-[10px] tracking-[0.15em] text-white/50">
                  <p>{prod.gsm}</p>
                  <p>{prod.motif}</p>
                  <p className="text-white/70">{prod.fit}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-base font-bold tracking-wider text-white">
                    {prod.price}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-white/50">
                    TAX INCLUDED
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full border border-white bg-transparent py-3 text-center font-mono text-xs font-bold tracking-[0.25em] uppercase text-white transition-all duration-300 hover:bg-white hover:text-black rounded-none"
                >
                  ADD TO BAG
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Back to Hero */}
      <div className="border-t border-white/10 px-6 py-12 text-center">
        <Link
          href="/"
          className="inline-block border border-white/30 px-8 py-3 font-mono text-xs tracking-[0.25em] uppercase text-white/70 hover:border-white hover:text-white transition-colors"
        >
          RETURN TO HERO LOOKBOOK ↑
        </Link>
      </div>
    </main>
  );
}

