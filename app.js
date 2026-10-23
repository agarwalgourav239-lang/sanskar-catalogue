// Sanskar catalogue setup. Replace each image, salePrice and originalPrice when they are ready.
const BUSINESS_WHATSAPP = '917439075469';

const products = [
  {
    id: 'riwaayat-1', name: 'Riwaayat Royal Set', category: 'Riwaayat Collection',
    originalPrice: 2999, salePrice: 2499, image: 'assets/products/riwaayat.jpg', royal: true,
    note: 'Riwaayat means tradition. Ruby-pink blossoms flow into a river of emerald green, creating a statement set for the day the whole family gathers around you. Gold-tone finish, ruby-pink and emerald stones, with matching earrings.'
  },
  {
    id: 'gulnaar-1', name: 'Gulnaar Necklace Set', category: 'Necklaces',
    originalPrice: 2499, salePrice: 1999, image: 'assets/products/gulnaar.jpg',
    note: 'Gulnaar is the pomegranate blossom of old Persian gardens. Purple stones open like petals at your collarbone, made for an evening to remember. Silver-tone finish, purple stones, with matching earrings.'
  },
  {
    id: 'meher-1', name: 'Meher Necklace Set', category: 'Necklaces',
    originalPrice: 2299, salePrice: 1799, image: 'assets/products/meher.jpg',
    note: 'Meher means grace and kindness. Warm gold and ruby-pink drops sway softly when you laugh, for the woman who lights up a room without trying. Gold-tone finish, ruby-pink drops, with matching earrings.'
  },
  {
    id: 'jhilmil-1', name: 'Jhilmil Necklace Set', category: 'Necklaces',
    originalPrice: 2199, salePrice: 1699, image: 'assets/products/jhilmil.jpg',
    note: 'Jhilmil is the shimmer of diyas on a festival night. Yellow stones set in golden arches catch the light and glow with every step. Gold-tone finish, yellow stones, with matching earrings.'
  },
  {
    id: 'noor-1', name: 'Noor Lattice Bangle', category: 'Elite Bracelets',
    originalPrice: 1299, salePrice: 999, image: 'assets/products/noor.jpg',
    note: 'Noor means light. A golden lattice wraps your wrist like a woven ray of sun, studded with clear flowers that sparkle as you move. Gold-tone bangle style with clear floral stones.'
  },
  {
    id: 'neelam-1', name: 'Neelam Blue-Stone Bracelet', category: 'Elite Bracelets',
    originalPrice: 999, salePrice: 799, image: 'assets/products/neelam.jpg',
    note: 'Neelam is the sapphire. One deep blue stone rests at the heart of a golden wave, a quiet colour that says confidence. Gold-tone bracelet with a blue centre stone.'
  },
  {
    id: 'chandni-1', name: 'Chandni Adjustable Bracelet', category: 'Bracelet Chains',
    originalPrice: 799, salePrice: 499, image: 'assets/products/chandni-detail.jpg',
    note: 'Chandni is moonlight. Snowflake and flower motifs glitter along a slim golden chain, like frost lit by the moon. Gold-tone adjustable slider bracelet with sparkling stones.'
  },
  {
    id: 'lehar-gold', name: 'Lehar Pendant Set · Gold', category: 'Pendant Sets',
    originalPrice: 1299, salePrice: 899, image: 'assets/products/lehar-gold.jpg',
    note: 'Lehar is a wave. A pearl drop falls through a graceful teardrop frame and ripples as you move. Gold-tone finish with a pearl drop and matching earrings.'
  },
  {
    id: 'lehar-silver', name: 'Lehar Pendant Set · Silver', category: 'Pendant Sets',
    originalPrice: 1199, salePrice: 799, image: 'assets/products/lehar-silver.jpg',
    note: 'Lehar is a wave. A pearl drop falls through a graceful teardrop frame and ripples as you move. Silver-tone finish with a pearl drop and matching earrings.'
  },
  {
    id: 'titli-1', name: 'Titli Butterfly Pendant Set', category: 'Pendant Sets',
    originalPrice: 1299, salePrice: 999, image: 'assets/products/titli.jpg',
    note: 'Titli is the butterfly. Purple stones fill a lace-like wing, ready to take flight at every celebration. Silver-tone finish, purple stones, butterfly lattice, with matching earrings.'
  },
  {
    id: 'rubina-1', name: 'Rubina Pendant Set', category: 'Pendant Sets',
    originalPrice: 999, salePrice: 799, image: 'assets/products/rubina.jpg',
    note: 'Rubina is the little ruby. Square ruby-pink stones in a golden frame make a small piece with big warmth, perfect for gifting. Gold-tone finish with ruby-pink stones and matching earrings.'
  },
  {
    id: 'ragini-1', name: 'Ragini Jhumka Earrings', category: 'Royal Earrings',
    originalPrice: 999, salePrice: 699, image: 'assets/products/ragini.jpg',
    note: 'Raagini is a melody. These golden jhumkas sway and shimmer with every turn of your head, like a song you can wear. Gold-tone jhumka style.'
  },
  {
    id: 'jhankar-1', name: 'Jhankar Floral Jhumkas', category: 'Royal Earrings',
    originalPrice: 799, salePrice: 499, image: 'assets/products/jhankar.jpg',
    note: 'Jhankar is the soft chime of a jhumka. A flower of stones crowns a sparkling dome with a teardrop swinging below: small enough for every day, pretty enough for every celebration. Gold-tone finish, flower stud top, sparkling dome and teardrop stone.'
  },
  {
    id: 'pari-1', name: 'Pari Fairy Pendant Set', category: 'Pendant Sets',
    originalPrice: 799, salePrice: 499, image: 'assets/products/pari.jpg',
    note: 'Pari is a fairy. A tiny dancer floats inside a golden ring, a charm for the dreamer in your life. Gold-tone fairy ring pendant with matching earrings.'
  },
  {
    id: 'heer-1', name: 'Heer Double-Heart Pendant Set', category: 'Pendant Sets',
    originalPrice: 799, salePrice: 499, image: 'assets/products/heer.jpg',
    note: 'Heer is a love story in gold. Two hearts hold one green stone close, a gift that says what words cannot. Gold-tone double-heart design with a green centre stone and matching earrings.'
  }
];
let cart = [];
let currentFilter = 'Necklaces';
const collectionViews = {
  All: { categories: null, title: 'All<br />pieces.', kicker: 'Sanskar collection' },
  Necklaces: { categories: ['Necklaces'], title: 'Necklace<br />sets.', kicker: 'Sanskar collection' },
  Bracelets: { categories: ['Elite Bracelets', 'Bracelet Chains'], title: 'Bracelet<br />edits.', kicker: 'Sanskar collection' },
  'Pendant Sets': { categories: ['Pendant Sets'], title: 'Pendant<br />sets.', kicker: 'Sanskar collection' },
  Riwaayat: { categories: ['Riwaayat Collection'], title: 'Riwaayat<br />collection.', kicker: 'The royal edit' },
  Earrings: { categories: ['Royal Earrings', 'Earring Sets'], title: 'Earring<br />edits.', kicker: 'Sanskar collection' }
};
const fmt = value => `₹${Number(value).toLocaleString('en-IN')}`;
const grid = document.querySelector('#product-grid');
const cartDrawer = document.querySelector('#cart-drawer');
const overlay = document.querySelector('#overlay');
const toast = document.querySelector('#toast');
const whatsappIcon = '<svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 1.9 17.7L.5 23.5l5.9-1.4A11.8 11.8 0 1 0 20.5 3.5Z"/><path d="M8.1 6.7c-.3-.7-.6-.7-.9-.7h-.7c-.2 0-.6.1-.9.5s-1.2 1.2-1.2 3 .1 3.4 1.4 5.1c1.3 1.7 3 3 5.1 3.8 1.8.7 2.2.6 2.6.5.4-.1 1.3-.5 1.5-1.1s.2-1 .1-1.1-.3-.2-.6-.4l-1.5-.7c-.2-.1-.4-.1-.6.1l-.6.7c-.2.2-.3.2-.6.1a6.2 6.2 0 0 1-1.8-1.1 6.7 6.7 0 0 1-1.2-1.5c-.1-.3 0-.4.1-.6l.4-.5.2-.4c.1-.2 0-.4 0-.5l-.7-1.6Z"/></svg>';

function priceMarkup(product) {
  if (product.salePrice == null) return '<span class="price-pending">Price coming soon</span>';
  const hasDiscount = product.originalPrice && product.originalPrice > product.salePrice;
  const original = hasDiscount ? `<s>${fmt(product.originalPrice)}</s>` : '';
  const discount = hasDiscount ? `<small class="discount-label">${Math.round((1 - product.salePrice / product.originalPrice) * 100)}% off</small>` : '';
  return `<span class="sale-price">${fmt(product.salePrice)}</span>${original}${discount}`;
}

function productVisual(product, placement = 'product') {
  if (product.image) return `<img class="product-photo" src="${product.image}" alt="${product.name}" />`;
  return `<div class="image-pending image-pending-${placement}"><span>S</span><small>Image coming soon</small></div>`;
}

function renderProducts() {
  const selectedView = collectionViews[currentFilter];
  const shown = selectedView?.categories == null ? products : products.filter(product => selectedView?.categories?.includes(product.category) || product.category === currentFilter);
  grid.innerHTML = shown.map(product => `
    <article class="product ${product.royal ? 'product-royal' : ''}">
      <div class="product-image ${product.image ? 'has-photo' : 'image-placeholder'} ${product.royal ? 'royal-image' : ''}" data-quick="${product.id}" role="button" tabindex="0" aria-label="View details for ${product.name}">
        ${product.royal ? '<span class="royal-ribbon">Riwaayat · The royal edit</span>' : ''}
        ${productVisual(product)}
      </div>
      <div class="product-info">
        <div><h3>${product.name}</h3><p>${product.category}</p>${product.royal ? '<p class="royal-note">Limited royal collection</p>' : ''}${product.variants ? '<p class="variant-preview">Single · Set of 2 · Set of 3</p>' : ''}</div>
        <div class="product-price">${priceMarkup(product)}</div>
      </div>
    </article>`).join('');
}

function updateCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector('#cart-count').textContent = count;
  document.querySelector('#drawer-count').textContent = `(${count})`;
  const allPriced = cart.every(item => item.salePrice != null);
  document.querySelector('#cart-total').textContent = allPriced ? fmt(cart.reduce((sum, item) => sum + item.salePrice * item.quantity, 0)) : 'Price on request';
  document.querySelector('#cart-items').innerHTML = cart.length
    ? cart.map(item => `<div class="cart-line"><div class="cart-thumb ${item.image ? 'has-photo' : 'image-placeholder'}">${productVisual(item, 'cart')}</div><div><h3>${item.name}</h3><p>${item.salePrice == null ? 'Price on request' : fmt(item.salePrice)} · Qty ${item.quantity}</p><button class="remove" data-remove="${item.id}">Remove</button></div><strong>${item.salePrice == null ? '—' : fmt(item.salePrice * item.quantity)}</strong></div>`).join('')
    : '<p class="empty-state">Your bag is waiting for a little sparkle.</p>';
}

function openCart() { cartDrawer.classList.add('open'); overlay.classList.add('open'); cartDrawer.setAttribute('aria-hidden', 'false'); }
function closeCart() { cartDrawer.classList.remove('open'); overlay.classList.remove('open'); cartDrawer.setAttribute('aria-hidden', 'true'); }
function showToast(message) { toast.textContent = message; toast.classList.add('visible'); setTimeout(() => toast.classList.remove('visible'), 2600); }

function addToCart(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  const line = cart.find(item => item.id === product.id);
  if (line) line.quantity += 1; else cart.push({ ...product, quantity: 1 });
  updateCart();
  showToast(`${product.name} added to your bag`);
}

function openQuickView(id) {
  const product = products.find(item => item.id === id);
  const variants = product.variants ? `<div class="variant-list"><p>Choose your set</p>${product.variants.map(variant => `<div><span>${variant.label}</span><em>${variant.salePrice == null ? 'Price coming soon' : fmt(variant.salePrice)}</em></div>`).join('')}</div>` : '';
  const message = encodeURIComponent(`Hello Sanskar, I’m interested in ${product.name}. Please share the final price and availability.`);
  const action = `<div class="product-actions"><button class="button product-add" data-add="${product.id}">Add to bag <span>→</span></button><a class="product-whatsapp" href="https://wa.me/${BUSINESS_WHATSAPP}?text=${message}" target="_blank" rel="noreferrer">Order on WhatsApp ${whatsappIcon}</a></div>`;
  document.querySelector('#dialog-content').innerHTML = `<div class="dialog-art ${product.image ? 'has-photo' : 'image-placeholder'}">${productVisual(product, 'dialog')}</div><div class="dialog-text"><p class="eyebrow">${product.category}</p><h2>${product.name}</h2><div class="dialog-price">${priceMarkup(product)}</div><p>${product.note}</p>${variants}${action}</div>`;
  document.querySelector('#product-dialog').showModal();
}

function closeSearch() { document.querySelector('#search-panel').classList.remove('open'); document.querySelector('#search-panel').setAttribute('aria-hidden', 'true'); }
function renderSearch(query = '') {
  const matches = products.filter(product => `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, 6);
  document.querySelector('#search-results').innerHTML = query
    ? (matches.length ? matches.map(product => `<div class="search-result"><span>${product.name} <small>· ${product.salePrice == null ? 'Price coming soon' : fmt(product.salePrice)}</small></span><button data-search-product="${product.id}">View piece</button></div>`).join('') : '<p class="empty-state">No pieces found yet.</p>')
    : '<p class="empty-state">Search the Sanskar collection.</p>';
}

function selectCollection(collection) {
  currentFilter = collection;
  const selectedView = collectionViews[collection] || { title: `${collection}<br />pieces.`, kicker: 'Sanskar collection' };
  document.querySelector('#collection-title').innerHTML = selectedView.title;
  document.querySelector('#collection-kicker').textContent = selectedView.kicker;
  document.querySelectorAll('.collection-link').forEach(link => link.classList.toggle('active', link.dataset.collection === collection));
  document.querySelectorAll('.filter').forEach(filter => filter.classList.toggle('active', filter.dataset.filter === collection));
  renderProducts();
}

renderProducts();
updateCart();
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#cart-button').addEventListener('click', openCart);
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', closeCart));
overlay.addEventListener('click', closeCart);
document.querySelector('#filter-button').addEventListener('click', () => { const filters = document.querySelector('#filters'); filters.hidden = !filters.hidden; });
document.querySelector('#filters').addEventListener('click', event => { if (!event.target.matches('.filter')) return; selectCollection(event.target.dataset.filter); });
document.querySelectorAll('.collection-link').forEach(link => link.addEventListener('click', event => { event.preventDefault(); selectCollection(link.dataset.collection); document.querySelector('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
grid.addEventListener('click', event => { const image = event.target.closest('.product-image[data-quick]'); if (image) openQuickView(image.dataset.quick); });
grid.addEventListener('keydown', event => { const image = event.target.closest('.product-image[data-quick]'); if (!image || (event.key !== 'Enter' && event.key !== ' ')) return; event.preventDefault(); openQuickView(image.dataset.quick); });
document.querySelector('#product-dialog').addEventListener('click', event => { if (event.target.matches('.dialog-close')) event.currentTarget.close(); const add = event.target.closest('[data-add]'); if (add) { addToCart(add.dataset.add); event.currentTarget.close(); } });
document.querySelector('#cart-items').addEventListener('click', event => { const button = event.target.closest('[data-remove]'); if (button) { cart = cart.filter(item => item.id !== button.dataset.remove); updateCart(); } });
document.querySelector('#checkout-button').addEventListener('click', () => {
  if (!cart.length) return showToast('Add a piece to your bag first.');
  const lines = cart.map(item => `• ${item.name} × ${item.quantity} — ${item.salePrice == null ? 'Price to be confirmed' : fmt(item.salePrice * item.quantity)}`).join('\n');
  const total = cart.every(item => item.salePrice != null) ? `\n\nTotal: ${fmt(cart.reduce((sum, item) => sum + item.salePrice * item.quantity, 0))}` : '\n\nPlease confirm the final total.';
  window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(`Hello Sanskar, I’d like to order:\n${lines}${total}`)}`, '_blank', 'noopener');
});
document.querySelector('#search-button').addEventListener('click', () => { const panel = document.querySelector('#search-panel'); panel.classList.add('open'); panel.setAttribute('aria-hidden', 'false'); renderSearch(); setTimeout(() => document.querySelector('#product-search').focus(), 100); });
document.querySelector('[data-search-close]').addEventListener('click', closeSearch);
document.querySelector('#product-search').addEventListener('input', event => renderSearch(event.target.value));
document.querySelector('#search-results').addEventListener('click', event => { const item = event.target.closest('[data-search-product]'); if (item) { closeSearch(); openQuickView(item.dataset.searchProduct); } });
document.querySelector('#menu-button').addEventListener('click', () => showToast('Shop and About are available above on desktop.'));

