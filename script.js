// small UI interactions: year & mobile nav toggle
document.getElementById('year').innerText = new Date().getFullYear();

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  if(navLinks.classList.contains('open')){
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.right = '20px';
    navLinks.style.top = '64px';
    navLinks.style.background = 'rgba(6,8,17,0.9)';
    navLinks.style.padding = '14px';
    navLinks.style.borderRadius = '8px';
  } else {
    navLinks.style.display = '';
    navLinks.style.position = '';
    navLinks.style.background = '';
  }
});
