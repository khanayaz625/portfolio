import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from './portfolio-data.js';
import { initAnimations } from './animations.js';

gsap.registerPlugin(ScrollTrigger);

// App State
let lenis = null;

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initCursor();
  initThemeSystem();
  initNavigation();
  initTechStackSection();
  initContactActions();
  initAnimations();
});

/**
 * Ultra-smooth Lenis momentum scrolling synced with GSAP ScrollTrigger
 */
function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.95
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const nav = document.querySelector('.site-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

/**
 * Bespoke Magnetic & Trailing Cursor with All-Card Hover Reaction
 */
function initCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function updateFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    requestAnimationFrame(updateFollower);
  }
  updateFollower();

  const bindHoverEvents = () => {
    // Select all clickable items and cards across the portfolio
    const interactives = document.querySelectorAll(
      'a, button, .stack-item-card, .process-card, .experience-card, .service-card, .testimonial-card, ' +
      '.hero-teaser-banner, .hero-pill-status, .hero-social-proof, .brand-logo-item, ' +
      '.contact-card-box, .sidebar-cta-card, .floating-skill-pill, .email-copy-pill, ' +
      '.nav-whatsapp-btn, .floating-whatsapp-btn, .whatsapp-pill-btn, .theme-toggle-btn, .sidebar-theme-btn'
    );

    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
    });
  };

  bindHoverEvents();
  window.addEventListener('stackRendered', bindHoverEvents);
}

/**
 * Modern Dark / Light Theme System with Default Dark Mode & Persistence
 */
function initThemeSystem() {
  const themeBtns = document.querySelectorAll('#themeToggle, #sidebarThemeToggle');
  if (!themeBtns.length) return;

  // Check saved theme. Default is ALWAYS 'dark' unless user explicitly saved 'light'
  const savedTheme = localStorage.getItem('ayaz-portfolio-theme');
  const isDark = savedTheme !== 'light'; // Default to Dark Mode!

  const applyTheme = (dark) => {
    if (dark) {
      document.body.classList.add('dark-theme');
      themeBtns.forEach(btn => {
        const icon = btn.querySelector('.theme-icon');
        if (icon) icon.textContent = '☀️';
        btn.setAttribute('title', 'Switch to Light Mode');
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      });
    } else {
      document.body.classList.remove('dark-theme');
      themeBtns.forEach(btn => {
        const icon = btn.querySelector('.theme-icon');
        if (icon) icon.textContent = '🌙';
        btn.setAttribute('title', 'Switch to Dark Mode');
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      });
    }
  };

  // Apply initial theme state
  applyTheme(isDark);

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentlyDark = document.body.classList.contains('dark-theme');
      const newDark = !currentlyDark;
      applyTheme(newDark);
      localStorage.setItem('ayaz-portfolio-theme', newDark ? 'dark' : 'light');
      showToast(newDark ? 'Dark Mode Activated 🌙' : 'Light Mode Activated ☀️');
    });
  });
}

/**
 * Modern Slide-Out Sidebar Navigation Drawer & Smooth anchor jumping
 */
function initNavigation() {
  const menuBtn = document.getElementById('menuToggle');
  const backdrop = document.getElementById('sidebarBackdrop');
  const panel = document.getElementById('sidebarPanel');
  const closeBtn = document.getElementById('sidebarCloseBtn');
  const navLinks = document.querySelectorAll('.sidebar-link, .sidebar-action-btn, .smooth-anchor');

  if (menuBtn && backdrop) {
    const openSidebar = () => {
      backdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();
    };

    const closeSidebar = () => {
      backdrop.classList.remove('is-active');
      document.body.style.overflow = '';
      if (lenis) lenis.start();
    };

    menuBtn.addEventListener('click', openSidebar);

    if (closeBtn) {
      closeBtn.addEventListener('click', closeSidebar);
    }

    // Close when clicking the backdrop outside the panel
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeSidebar();
      }
    });

    // Close on Escape key press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('is-active')) {
        closeSidebar();
      }
    });

    // Handle smooth scrolling for all anchor links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          closeSidebar();
          const targetEl = document.querySelector(href);
          if (targetEl) {
            if (lenis) {
              lenis.scrollTo(targetEl, { offset: -30, duration: 1.3 });
            } else {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      });
    });
  }
}

/**
 * Render and filter Tech Stack Cards
 */
function initTechStackSection() {
  const container = document.getElementById('stackCardsContainer');
  const tabs = document.querySelectorAll('.stack-tab-btn');
  if (!container || !tabs.length) return;

  const renderStack = (key) => {
    const list = portfolioData.techStack[key] || [];
    container.innerHTML = list.map(item => `
      <div class="stack-item-card">
        <div class="stack-card-header">
          <span class="stack-card-icon">${item.icon}</span>
          <span class="stack-card-level">${item.level}</span>
        </div>
        <h3 class="stack-card-name">${item.name}</h3>
        <p class="stack-card-desc">${item.desc}</p>
      </div>
    `).join('');

    gsap.from('.stack-item-card', {
      opacity: 0,
      y: 20,
      stagger: 0.06,
      duration: 0.4,
      ease: 'power2.out'
    });

    window.dispatchEvent(new Event('stackRendered'));
    ScrollTrigger.refresh();
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const stackKey = tab.getAttribute('data-stack');
      renderStack(stackKey);
    });
  });

  // Initial render
  renderStack('mern');
}

/**
 * Copy Email to Clipboard & Toast
 */
function initContactActions() {
  const copyBtn = document.querySelector('.email-copy-pill');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = portfolioData.developer.email;
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard! ✓`);
      
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<span>Copied to Clipboard! ✓</span>`;
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2500);
    });
  });
}

/**
 * Toast Notification Utility
 */
export function showToast(message) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('is-visible');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3200);
}
