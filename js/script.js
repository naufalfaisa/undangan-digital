/* ========== SHOW MENU ========== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Menu hidden
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ========== ADD BLUR HEADER ========== */
const blurHeader = () => {
  const header = document.getElementById('header');
  
  if (window.scrollY >= 50) {
    header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    header.style.backdropFilter = 'none';
  }
};
window.addEventListener('scroll', blurHeader);

/* ========== SHOW SCROLL UP ========== */
const scrollUp = () => {
  const scrollUpBtn = document.getElementById('scroll-top');
  
  if (window.scrollY >= 350) {
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
};
window.addEventListener('scroll', scrollUp);

/* ========== SCROLL TO TOP ========== */
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ========== SCROLL SECTIONS ACTIVE LINK ========== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass?.classList.add('active-link');
    } else {
      sectionsClass?.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);

/* ========== SCROLL REVEAL ANIMATION ========== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Elements to animate
const animateElements = document.querySelectorAll('.katalog__card, .fitur__card, .step, .kontak__card');
animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

/* ========== LAZY LOAD IMAGES ========== */
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

/* ========== SMOOTH SCROLL FOR ALL LINKS ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ========== WHATSAPP MESSAGE FORMATTER ========== */
// Sudah dihandle di HTML dengan href yang sudah di-encode

/* ========== LOADING ANIMATION (Optional) ========== */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  // Animate hero section
  const heroContent = document.querySelector('.hero__content');
  const heroImage = document.querySelector('.hero__image');
  
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    setTimeout(() => {
      heroContent.style.transition = 'all 0.8s ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
  
  if (heroImage) {
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'scale(0.9)';
    setTimeout(() => {
      heroImage.style.transition = 'all 0.8s ease';
      heroImage.style.opacity = '1';
      heroImage.style.transform = 'scale(1)';
    }, 300);
  }
});

/* ========== CONSOLE MESSAGE ========== */
console.log('%c🎉 Elegant Wedding Invitation', 'font-size: 20px; color: #D4AF37; font-weight: bold;');
console.log('%cWebsite berhasil dimuat! Hubungi kami di WhatsApp: +62 812-3456-7890', 'font-size: 14px; color: #666;');
