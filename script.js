
const yearSpan = document.getElementById('year');
if(yearSpan) {
  yearSpan.innerText = new Date().getFullYear();
}


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if(hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    
   
    const icon = hamburger.querySelector('i');
    if(navLinks.classList.contains('open')) {
      icon.className = 'fas fa-times';
    } else {
      icon.className = 'fas fa-bars';
    }
  });

 
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.querySelector('i').className = 'fas fa-bars';
    });
  });
}

// BACK TO TOP BUTTON
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// SCROLL REVEAL ANIMATION
const revealTargets = document.querySelectorAll('.card');
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));