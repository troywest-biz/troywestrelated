// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Overlay menu toggle
const menuOverlay = document.getElementById('menu-overlay');
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');

// Show overlay when clicking Menu
if(openMenuBtn){
  openMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    menuOverlay.setAttribute('aria-hidden', 'false');
  });
}

// Hide overlay when clicking Close
if(closeMenuBtn){
  closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    menuOverlay.setAttribute('aria-hidden', 'true');
  });
}

// Hide overlay when clicking any overlay nav link
document.querySelectorAll('.overlay-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    menuOverlay.setAttribute('aria-hidden', 'true');
  });
});

// Dummy newsletter subscribe handler
function subscribe(){
  alert('Thanks! You’re on the list.');
}

// Theme toggle is disabled in this layout; remove if unused

// Smooth anchor scrolling for on-page navigation
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      // adjust offset to account for any fixed elements; you can tweak the offset as needed
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// Loader progress simulation
(function(){
  const loader = document.getElementById('tw-loader');
  const num = document.getElementById('tw-num');
  let value = 0;
  const tick = () => {
    const target = value < 90 ? value + Math.max(1, Math.round((90 - value)*0.12)) : value + 1;
    value = Math.min(target, 100);
    num.textContent = value;
    if(value < 100){
      setTimeout(tick, value < 90 ? 30 : 80);
    }else{
      setTimeout(()=> loader.classList.add('is-done'), 350);
    }
  };
  window.addEventListener('load', () => tick());
})();