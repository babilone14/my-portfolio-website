let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
  });

  let header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

navLinks.forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };
});

window.addEventListener('load', () => {
  const titleElement = document.querySelector('.home-content h1');
  if (titleElement) {
    const originalText = titleElement.textContent;
    setTimeout(() => {
      typeWriter(titleElement, originalText, 80);
    }, 1000);
  }
});

function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.querySelectorAll('.portfolio-box').forEach(box => {
  box.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-15px) scale(1.03)';
  });

  box.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('intro-video');
  const playBtn = document.getElementById('play-btn');
  const videoOverlay = document.querySelector('.video-overlay');
  const videoFallback = document.getElementById('video-fallback');
  const videoContent = document.querySelector('.video-content');

  if (playBtn && video) {
    playBtn.addEventListener('click', function () {
      if (video.paused) {
        video.play();
        videoOverlay.style.opacity = '0';
        playBtn.innerHTML = '<i class="bx bx-pause"></i>';
      } else {
        video.pause();
        videoOverlay.style.opacity = '1';
        playBtn.innerHTML = '<i class="bx bx-play"></i>';
      }
    });

    video.addEventListener('play', function () {
      videoOverlay.style.opacity = '0';
      playBtn.innerHTML = '<i class="bx bx-pause"></i>';
    });

    video.addEventListener('pause', function () {
      videoOverlay.style.opacity = '1';
      playBtn.innerHTML = '<i class="bx bx-play"></i>';
    });

    video.addEventListener('ended', function () {
      videoOverlay.style.opacity = '1';
      playBtn.innerHTML = '<i class="bx bx-play"></i>';
    });

    video.addEventListener('error', function () {
      videoContent.style.display = 'none';
      videoFallback.style.display = 'block';
    });

    video.addEventListener('loadeddata', function () {
      videoContent.style.display = 'block';
      videoFallback.style.display = 'none';
    });
  }
});

function initializeMobileFeatures() {
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  if (isTouchDevice && window.innerWidth <= 768) {
    const skillsBoxes = document.querySelectorAll('.skills-box');

    skillsBoxes.forEach(box => {
      let isActive = false;

      box.addEventListener('click', function (e) {
        e.preventDefault();

        skillsBoxes.forEach(otherBox => {
          if (otherBox !== box) {
            otherBox.classList.remove('mobile-active');
          }
        });

        isActive = !isActive;
        if (isActive) {
          this.classList.add('mobile-active');
        } else {
          this.classList.remove('mobile-active');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) &&
        !menuIcon.contains(e.target) &&
        navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
      }
    });
  }
}

window.addEventListener('load', initializeMobileFeatures);
window.addEventListener('resize', initializeMobileFeatures);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('h1, h2, h3').forEach(heading => {
    heading.classList.add('text-glow');
  });

  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.add('btn-glow', 'ripple-effect');
  });

  document.querySelectorAll('.skills-box, .future-box, .portfolio-box').forEach(box => {
    box.classList.add('shadow-floating');
  });

  document.querySelectorAll('section').forEach(section => {
    section.classList.add('page-transition');
  });

  createFloatingParticles();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});