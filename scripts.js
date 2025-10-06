/* script.js - Portafolio interactivo (versión final) */

const projects = [
  {id:1,title:"40.976 visualizaciones - 2.732 interacciones",thumb:"assets/prohibidos.webp",image:"assets/prohibidos.webp",link:"https://www.instagram.com/reel/DMq-3YesGbK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Reel. Presentación de "La Mona" Jimenez en el Estadio Bicentenario",roles:"Idea, Realización, Edición"},
  {id:2,title:"5.186 visualizaciones - 227 interacciones",thumb:"assets/numeros.webp",image:"assets/numeros.webp",link:"https://www.instagram.com/p/DMp4pQhs5gC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Carrusel; Balance del Poncho 2.025",roles:"Idea, Diseño, Edición"},
  {id:3,title:"117.855 visualizaciones - 1.271 interacciones",thumb:"assets/mandamas.webp",image:"assets/mandamas.webp",link:"https://www.instagram.com/reel/DMplO5esbQs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Reel. El Mandamás del Poncho",roles:"Idea, Diseño, Edición"},
  {id:4,title:"7.839 visualizaciones - 220 interacciones",thumb:"assets/turf.webp",image:"assets/turf.webp",link:"https://www.instagram.com/reel/DMnsx_TsnRv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Reel. Conferencia de prensa de Turf",roles:"Idea;Realización, Edición"},
  {id:5,title:"4.271 visualizaciones - 97 interacciones",thumb:"assets/desakta2.webp",image:"assets/desakta2.webp",link:"https://www.instagram.com/reel/DMih6gaxi6U/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Reel. Conferencia de prensa de DesaKta2",roles:"Realización, Edición"},
  {id:6,title:"11.034 visualizaciones - 809 interacciones",thumb:"assets/profeta.webp",image:"assets/profeta.webp",link:"https://www.instagram.com/reel/DMiIG9WsN58/?utm_source=ig_web_copy_link",desc:"Reel. Presentación de Damián Córdoba en El Patio",roles:"Realización, Edición"},
  {id:7,title:"7.982 visualizaciones - 149 interacciones",thumb:"assets/nocheros.webp",image:"assets/nocheros.webp",link:"https://www.instagram.com/reel/DMf4ovFRpGf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Reel. Presentación de Los Nocheros",roles:"Idea, Realización, Edición"},
  {id:8,title:"304.345 visualizaciones - 10.699 interacciones",thumb:"assets/lazarito.webp",image:"assets/lazarito.webp",link:"https://www.instagram.com/reel/DMbrFZBIdvX/?utm_source=ig_web_copy_link",desc:"Reel. Niño canta con Lazaro Caballero",roles:"Idea, Realización, Edición"},
  {id:9,title:"4.097 visualizaciones - 181 interacciones",thumb:"assets/valeint.webp",image:"assets/valeint.webp",link:"https://www.instagram.com/reel/DMbrFZBIdvX/?utm_source=ig_web_copy_link",desc:"Reel. Presentación de Valentin Vargas en el Poncho",roles:"Idea, Realización, Edición"},
  {id:10,title:"26.328 visualizaciones - 949 interacciones",thumb:"assets/valentin-invitados.webp",image:"assets/valentin-invitados.webp",link:"https://www.instagram.com/p/DMXwqzFsTC2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Carrusel. Repaso de los invitados de Valentin Vargas en su presentación",roles:"Idea, Realización, Edición"},
  {id:11,title:"3.677 visualizaciones - 216 interacciones",thumb:"assets/abel.webp",image:"assets/abel.webp",link:"https://www.instagram.com/p/DMS8v93Mp1B/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Carrusel. Mejores momentos de la presentación de Abel Pintos",roles:"Idea, Realización, Edición"},
  {id:12,title:"10.615 visualizaciones - 285 interacciones",thumb:"assets/ternura.webp",image:"assets/ternura.webp",link:"https://www.instagram.com/reel/DMQ0McBSMAD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Reel. Momento destacado de la inauguración del Poncho",roles:"Idea, Realización, Edición"},
  {id:13,title:"49.486 visualizaciones - 530 interacciones",thumb:"assets/villaruel.webp",image:"assets/villaruel.webp",link:"https://www.instagram.com/reel/DMQqUjnyzBd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",desc:"Reel. Visita de Victoria Villarruel a la exposición del Poncho",roles:"Idea, Realización, Edición"},
  {id:14,title:"6.559 visualizaciones - 379 interacciones",thumb:"assets/cartelera-patio.webp",image:"assets/cartelera-patio.webp",link:"https://www.instagram.com/p/DKKOuqdtl3Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",desc:"Carrusel. Cartelera del Patio 2025",roles:"Idea, Diseño, Edición"},
  
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalRoles = document.getElementById('modalRoles');
const modalLink = document.getElementById('modalLink');
const closeBtn = document.getElementById('closeBtn');
const modalBackdrop = document.getElementById('modalClose');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (!gallery || !modal || !modalImage || !modalTitle || !modalDesc || !modalRoles || !modalLink || !closeBtn) {
  console.error('Elementos del DOM faltantes. Asegúrate de que index.html contiene los IDs esperados.');
}

let currentIndex = 0;
let lastFocusedElement = null;

function renderGallery() {
  gallery.innerHTML = '';
  projects.forEach((p, i) => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = p.link || '#';
    a.dataset.index = i;
    a.setAttribute('aria-label', `${p.title} — ${p.desc}`);
    a.innerHTML = `
      <img loading="lazy" src="${p.thumb}" alt="${p.title}">
      <div class="info"><strong>${escapeHtml(p.title)}</strong> · ${escapeHtml(p.desc)}</div>
    `;
    a.addEventListener('click', onCardClick);
    gallery.appendChild(a);
  });
}

function onCardClick(e) {
  e.preventDefault();
  const idx = Number(this.dataset.index);
  if (Number.isNaN(idx) || idx < 0 || idx >= projects.length) return;
  openModal(idx);
}

function openModal(idx) {
  const p = projects[idx];
  if (!p) return;
  lastFocusedElement = document.activeElement;
  currentIndex = idx;
  showProject(p);
  modal.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-modal', 'true');
  document.body.style.overflow = 'hidden';
  closeBtn.focus();
  modalLink.setAttribute('rel', 'noopener noreferrer');
  modalLink.setAttribute('target', '_blank');
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
}

function showProject(p) {
  modalImage.src = p.image || p.thumb || '';
  modalImage.alt = p.title || '';
  modalTitle.textContent = p.title || '';
  modalDesc.textContent = p.desc || '';
  modalRoles.textContent = p.roles || '';
  if (p.link) {
    modalLink.href = p.link;
    modalLink.style.display = 'inline-block';
  } else {
    modalLink.href = '#';
    modalLink.style.display = 'none';
  }
}

/* Navegación */
function showPrev() {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  showProject(projects[currentIndex]);
}

function showNext() {
  currentIndex = (currentIndex + 1) % projects.length;
  showProject(projects[currentIndex]);
}

/* Eventos */
closeBtn.addEventListener('click', closeModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
if (prevBtn) prevBtn.addEventListener('click', showPrev);
if (nextBtn) nextBtn.addEventListener('click', showNext);

document.addEventListener('keydown', (e) => {
  const isOpen = modal.getAttribute('aria-hidden') === 'false';
  if (!isOpen) return;
  if (e.key === 'Escape') {
    e.preventDefault();
    closeModal();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    showPrev();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    showNext();
  } else if (e.key === 'Tab') {
    // Simple trap de foco dentro del modal (cierra ciclo cuando se llega al final)
    const focusable = modal.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

/* Escape HTML utility for simple injection safety in text nodes */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* Inicializar galería */

renderGallery();
