// ARAEL — Drop 01 Product Catalog & Shared Cart System
const ARAEL_PRODUCTS = [
  {
    id: 'crimson-carpet',
    slug: 'crimson-carpet',
    name: 'Crimson Carpet Festive Set',
    tag: 'CRIMSON & GOLD / PRAYER-ARCH MOTIF',
    price: 2199,
    priceStr: '₹2,199',
    desc: 'Deep crimson maroon with antique gold prayer-arch motifs. A statement colour with a relaxed, everyday silhouette.',
    material: '300 GSM 100% Combed Bio-Washed Cotton Fleece',
    artwork: 'Crimson Arch & Antique Gold Traditional Screen Print',
    fit: 'Structured Cropped Zip Hoodie + Relaxed Track',
    wash: 'Cold Gentle Machine Wash / Dry in Shade',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    heroImg: 'designs/maroon/Maroon Patchwork Bohemian Tracksuit Portrait.png',
    images: [
      { src: 'designs/maroon/Maroon Patchwork Bohemian Tracksuit Portrait.png', label: 'FULL LOOK', alt: 'Crimson Carpet Festive Set - Full Look' },
      { src: 'designs/maroon/Ghost_mannequin_hoodie_and_trousers_470d9706-clean.png', label: 'FRONT VIEW', alt: 'Crimson Carpet Festive Set - Front View' },
      { src: 'designs/maroon/Photographing_hoodie_and_trouser…_8b67168e-clean.png', label: 'STYLING', alt: 'Crimson Carpet Festive Set - Styling' },
      { src: 'designs/maroon/Photographing_hoodie_zipper_and_…_686e4268-clean.png', label: 'CLOSE-UP', alt: 'Crimson Carpet Festive Set - Zipper Detail' }
    ]
  },
  {
    id: 'midnight-warli',
    slug: 'midnight-warli',
    name: 'Midnight Warli Cropped Zip Set',
    tag: 'MIDNIGHT INDIGO / WARLI MOTIF',
    price: 2299,
    priceStr: '₹2,299',
    desc: 'Washed charcoal, cream Warli-inspired motifs and a cropped zip silhouette. Built around the contrast between dark fabric and intricate detail.',
    material: '300 GSM 100% Combed Bio-Washed Cotton Fleece',
    artwork: 'High-Density Heritage Puff & Screen Border Print',
    fit: 'Drop-Shoulder Cropped Zip Hoodie + Relaxed Wide-Leg Track',
    wash: 'Cold Gentle Machine Wash / Dry in Shade',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    heroImg: 'designs/midnight-navy/Model_posing_in_streetwear_98dda641-clean.png',
    images: [
      { src: 'designs/midnight-navy/Model_posing_in_streetwear_98dda641-clean.png', label: 'FULL LOOK', alt: 'Midnight Warli Cropped Zip Set - Full Look' },
      { src: 'designs/midnight-navy/Cropped_zip_hoodie_and_trousers_fae99eee-clean.png', label: 'FRONT VIEW', alt: 'Midnight Warli Cropped Zip Set - Front View' },
      { src: 'designs/midnight-navy/Zip_hoodie_and_trousers_display_91d2fdae-clean.png', label: 'STYLING', alt: 'Midnight Warli Cropped Zip Set - Styling' },
      { src: 'designs/midnight-navy/Macro_photograph_of_hoodie_zipper_71f7852f-clean.png', label: 'CLOSE-UP', alt: 'Midnight Warli Cropped Zip Set - Zipper Detail' }
    ]
  },
  {
    id: 'ash-grey-warli',
    slug: 'ash-grey-warli',
    name: 'Ash Grey Warli Co-ord Set',
    tag: 'ASH GREY / WARLI MOTIF',
    price: 2099,
    priceStr: '₹2,099',
    desc: 'Ash grey with folk-inspired detailing. A quieter colourway that lets the pattern do the talking.',
    material: '300 GSM 100% Combed Bio-Washed Cotton Fleece',
    artwork: 'Tribal Warli Folk Art & High-Density Puff Motifs',
    fit: 'Drop-Shoulder Relaxed Fit Co-ord with Cuffed Hem',
    wash: 'Cold Gentle Machine Wash / Dry in Shade',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    heroImg: 'designs/ash-grey/Young_person_posing_in_streetwear_eabd19ed-clean.png',
    images: [
      { src: 'designs/ash-grey/Young_person_posing_in_streetwear_eabd19ed-clean.png', label: 'FULL LOOK', alt: 'Ash Grey Warli Co-ord Set - Full Look' },
      { src: 'designs/ash-grey/Hoodie_and_trousers_on_mannequin_81ea9fe2-clean.png', label: 'FRONT VIEW', alt: 'Ash Grey Warli Co-ord Set - Front View' },
      { src: 'designs/ash-grey/Hoodie_and_trousers_on_mannequin_f4039187-clean.png', label: 'STYLING', alt: 'Ash Grey Warli Co-ord Set - Styling' },
      { src: 'designs/ash-grey/Hoodie_zipper_and_embroidered_bo…_b58ad8f3-clean.png', label: 'CLOSE-UP', alt: 'Ash Grey Warli Co-ord Set - Embroidery' },
      { src: 'designs/ash-grey/Macro_close-up_of_hoodie_zipper_d3596c6e-clean.png', label: 'DETAIL', alt: 'Ash Grey Warli Co-ord Set - Zipper' }
    ]
  },
  {
    id: 'raw-khadi-heritage',
    slug: 'raw-khadi-heritage',
    name: 'Raw Khaki Heritage Floral Set',
    tag: 'RAW KHAKI / FLORAL MOTIF',
    price: 2199,
    priceStr: '₹2,199',
    desc: 'Raw khaki tones with floral-inspired motifs. Earthy colour, relaxed proportions and a distinct visual identity.',
    material: '300 GSM 100% Organic Unbleached Cotton Fleece',
    artwork: 'Crimson Floral Border Embroidery & Sun Iconography',
    fit: 'Boxy Drop-Shoulder Zip Hoodie + Relaxed Wide-Leg Track',
    wash: 'Cold Gentle Machine Wash / Dry in Shade',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    heroImg: 'designs/raw-khadi/Model_wearing_streetwear_pose_2ced5da9-clean.png',
    images: [
      { src: 'designs/raw-khadi/Model_wearing_streetwear_pose_2ced5da9-clean.png', label: 'FULL LOOK', alt: 'Raw Khaki Heritage Floral Set - Full Look' },
      { src: 'designs/raw-khadi/Zip_hoodie_and_trousers_display_995885be-clean.png', label: 'FRONT VIEW', alt: 'Raw Khaki Heritage Floral Set - Front View' },
      { src: 'designs/raw-khadi/Back_view_of_zip_hoodie_f40007da-clean.png', label: 'STYLING', alt: 'Raw Khaki Heritage Floral Set - Back View' },
      { src: 'designs/raw-khadi/Hoodie_zipper_and_embroidered_bo…_f2a0685c-clean.png', label: 'CLOSE-UP', alt: 'Raw Khaki Heritage Floral Set - Embroidery' }
    ]
  },
  {
    id: 'sandstone-taupe',
    slug: 'sandstone-taupe',
    name: 'Sandstone Taupe Geometric Set',
    tag: 'SANDSTONE TAUPE / GEOMETRIC MOTIF',
    price: 2149,
    priceStr: '₹2,149',
    desc: 'Muted taupe with geometric detailing. A neutral base with more going on up close.',
    material: '300 GSM 100% Combed Bio-Washed Cotton Fleece',
    artwork: 'Geometric Tribal & Indian Diamond Border Needlework',
    fit: 'Cropped Zip Hoodie + Slouchy Wide-Leg Track Pants',
    wash: 'Cold Gentle Machine Wash / Dry in Shade',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    heroImg: 'designs/taupe/Taupe Embroidered Tracksuit Portrait.png',
    images: [
      { src: 'designs/taupe/Taupe Embroidered Tracksuit Portrait.png', label: 'FULL LOOK', alt: 'Sandstone Taupe Geometric Set - Full Look' },
      { src: 'designs/taupe/Hoodie_and_trousers_on_mannequin_8204bc05-clean.png', label: 'FRONT VIEW', alt: 'Sandstone Taupe Geometric Set - Front View' },
      { src: 'designs/taupe/Zip_hoodie_and_trousers_display_b9c9f80f-clean.png', label: 'STYLING', alt: 'Sandstone Taupe Geometric Set - Styling' },
      { src: 'designs/taupe/Macro_photograph_of_hoodie_zipper_dccdced5-clean.png', label: 'CLOSE-UP', alt: 'Sandstone Taupe Geometric Set - Zipper Detail' }
    ]
  },
  {
    id: 'noir-black-lotus',
    slug: 'noir-black-lotus',
    name: 'Noir Black Lotus Set',
    tag: 'NOIR BLACK / LOTUS MOTIF',
    price: 2299,
    priceStr: '₹2,299',
    desc: 'An all-black colourway with lotus-inspired details. Understated from a distance, distinctive up close.',
    material: '300 GSM 100% Combed Heavyweight Cotton Fleece',
    artwork: 'Sacred Lotus Flower Back & Chest High-Definition Embroidery',
    fit: 'Heavyweight Boxy Cropped Zip + Deep-Pocket Wide Trouser',
    wash: 'Cold Gentle Machine Wash / Dry in Shade',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    heroImg: 'designs/black/Black Embroidered Lotus Tracksuit.png',
    images: [
      { src: 'designs/black/Black Embroidered Lotus Tracksuit.png', label: 'FULL LOOK', alt: 'Noir Black Lotus Set - Full Look' },
      { src: 'designs/black/Photographing_hoodie_and_trouser…_ebcda614-clean.png', label: 'FRONT VIEW', alt: 'Noir Black Lotus Set - Front View' },
      { src: 'designs/black/Macro_close-up_of_hoodie_zipper_ec2d7ab5-clean.png', label: 'CLOSE-UP', alt: 'Noir Black Lotus Set - Zipper Detail' }
    ]
  },
  {
    id: 'two-tone-cargo',
    slug: 'two-tone-cargo',
    name: 'Onyx & Slate Two-Tone Cargo Set',
    tag: 'ONYX & SLATE / TWO-TONE CARGO',
    price: 2499,
    priceStr: '₹2,499',
    desc: 'Onyx and slate meet in a two-tone cargo silhouette. A more utility-driven direction for everyday wear.',
    material: '300 GSM Dual-Tone Combed Cotton Fleece & Twill',
    artwork: 'Minimalist Monogram Needlework & Cargo Patch Construction',
    fit: 'Structured Utility Cargo Hoodie + Multi-Pocket Track Pants',
    wash: 'Cold Gentle Machine Wash / Dry in Shade',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    heroImg: 'designs/two-tone-black-grey/Young_model_posing_in_streetwear_b0c1d276-clean.png',
    images: [
      { src: 'designs/two-tone-black-grey/Young_model_posing_in_streetwear_b0c1d276-clean.png', label: 'FULL LOOK', alt: 'Onyx & Slate Two-Tone Cargo Set - Full Look' },
      { src: 'designs/two-tone-black-grey/Hoodie_and_trousers_on_mannequin_526e0421-clean.png', label: 'FRONT VIEW', alt: 'Onyx & Slate Two-Tone Cargo Set - Front View' },
      { src: 'designs/two-tone-black-grey/Zip_hoodie_and_trousers_display_78d8345f-clean.png', label: 'STYLING', alt: 'Onyx & Slate Two-Tone Cargo Set - Styling' }
    ]
  }
];

// Helper: Clean filename comparison
function araelGetFilename(path) {
  if (!path) return '';
  return path.split('/').pop().split('\\').pop();
}

// Shared Cart System with LocalStorage Persistence
function araelGetCart() {
  try {
    const raw = localStorage.getItem('arael_cart');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function araelSaveCart(cart) {
  try {
    localStorage.setItem('arael_cart', JSON.stringify(cart));
  } catch (e) {}
}

function araelUpdateBadge() {
  const cart = araelGetCart();
  const count = cart.reduce((acc, item) => acc + (item.qty || 1), 0);
  const badge = document.getElementById('bagCount');
  if (badge) {
    badge.textContent = count;
    badge.style.transform = 'scale(1.25)';
    setTimeout(() => { badge.style.transform = 'scale(1)'; }, 180);
  }
  return count;
}

function araelAddToCart(item) {
  const cart = araelGetCart();
  const file = araelGetFilename(item.img);
  const existing = cart.find(c => araelGetFilename(c.img) === file && c.size === item.size);
  if (existing) {
    existing.qty = (existing.qty || 1) + (item.qty || 1);
  } else {
    cart.push({
      id: item.id || '',
      name: item.name,
      tag: item.tag || 'DROP 01',
      price: item.price,
      priceStr: item.priceStr,
      img: item.img,
      size: item.size || 'M',
      qty: item.qty || 1
    });
  }
  araelSaveCart(cart);
  araelUpdateBadge();
  if (typeof araelRenderCartDrawer === 'function') {
    araelRenderCartDrawer();
  }
  if (typeof showToast === 'function') {
    showToast(`Added ${item.name} (${item.size}) x ${item.qty || 1} to bag`);
  }
}

function araelChangeCartQty(index, delta) {
  const cart = araelGetCart();
  if (!cart[index]) return;
  cart[index].qty = (cart[index].qty || 1) + delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  araelSaveCart(cart);
  araelUpdateBadge();
  if (typeof araelRenderCartDrawer === 'function') {
    araelRenderCartDrawer();
  }
}

function araelRenderCartDrawer() {
  const container = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  if (!container) return;
  const cart = araelGetCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center">
        <p class="text-xs font-mono tracking-wider uppercase text-[var(--ink-muted)]">Your shopping bag is empty.</p>
        <button onclick="closeCart();" class="btn-primary mt-4 px-6 py-2.5 text-xs font-mono font-bold tracking-widest uppercase cursor-pointer">
          CONTINUE BROWSING
        </button>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    return;
  }
  let subtotal = 0;
  let html = '';
  const isSubdir = window.location.pathname.includes('/products/');
  const assetPrefix = isSubdir ? '../' : '';

  cart.forEach((c, i) => {
    subtotal += (c.price || 0) * (c.qty || 1);
    const sizeTag = c.size ? ' • Size ' + c.size : '';
    const imgSrc = c.img.startsWith('http') || c.img.startsWith('../') ? c.img : assetPrefix + c.img;
    html += `
      <div class="flex gap-4 items-center p-3.5 bg-white border border-[var(--border-hairline)] shadow-sm">
        <img loading="lazy" decoding="async" src="${imgSrc}" class="w-16 h-20 object-cover flex-none border border-[var(--border-hairline)]" alt="${c.name}">
        <div class="flex-1 min-w-0">
          <p class="text-xs font-mono font-bold uppercase truncate text-[var(--ink-primary)]">${c.name}</p>
          <p class="text-xs font-mono text-[var(--ink-muted)] mt-0.5">${c.priceStr}${sizeTag} × ${c.qty}</p>
        </div>
        <div class="flex items-center gap-1.5 flex-none">
          <button onclick="araelChangeCartQty(${i}, -1)" class="w-7 h-7 flex items-center justify-center border border-[var(--border-subtle)] font-mono font-bold hover:bg-[var(--surface-muted)] cursor-pointer text-[var(--ink-primary)]" aria-label="Decrease quantity">−</button>
          <span class="w-6 text-center text-xs font-mono font-bold text-[var(--ink-primary)]">${c.qty}</span>
          <button onclick="araelChangeCartQty(${i}, 1)" class="w-7 h-7 flex items-center justify-center border border-[var(--border-subtle)] font-mono font-bold hover:bg-[var(--surface-muted)] cursor-pointer text-[var(--ink-primary)]" aria-label="Increase quantity">+</button>
        </div>
      </div>`;
  });
  container.innerHTML = html;
  if (subtotalEl) subtotalEl.textContent = '₹' + subtotal.toLocaleString('en-IN');
}
