import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  initHeroEntrance();
  initFloatingSkills();
  initProcessLineDraw();
  initScrollReveals();
  initMagneticElements();
  initCounterAnimations();
}

/**
 * Orchestrated Hero Entrance Timeline
 */
function initHeroEntrance() {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 1.1 }
  });

  // Nav entrance
  tl.from('.site-nav', {
    y: -40,
    opacity: 0,
    duration: 0.9
  })
  // Aura glow bloom
  .from('.hero-aura-glow', {
    scale: 0.6,
    opacity: 0,
    duration: 1.6,
    ease: 'power2.out'
  }, '-=0.6')
  // Main title reveal
  .from('.hero-title-greeting', {
    y: 45,
    opacity: 0,
    duration: 0.9,
    ease: 'back.out(1.4)'
  }, '-=1.2')
  .from('.hero-title-role', {
    y: 50,
    opacity: 0,
    duration: 1.0,
    ease: 'power4.out'
  }, '-=0.8')
  // Central portrait fade up
  .from('.hero-portrait-wrapper', {
    y: 60,
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: 'power3.out'
  }, '-=0.9')
  // Floating pill status & social proof (left)
  .from('.hero-pill-status', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.5)'
  }, '-=0.7')
  .from('.hero-social-proof', {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  // Tagline & CTA button (right)
  .from('.hero-bio-tagline', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.7')
  .from('.hero-cta-btn', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.5)'
  }, '-=0.6')
  // Brands logo bar
  .from('.brand-logo-item', {
    y: 20,
    opacity: 0,
    stagger: 0.08,
    duration: 0.6
  }, '-=0.4')
  // Teaser banner
  .from('.hero-teaser-banner', {
    y: 40,
    opacity: 0,
    duration: 0.9
  }, '-=0.3');
}

/**
 * Organic continuous floating physics for skill pills
 */
function initFloatingSkills() {
  const pills = document.querySelectorAll('.floating-skill-pill');
  if (!pills.length) return;

  pills.forEach((pill, idx) => {
    // Unique frequency and distance for human natural float
    const duration = 3.5 + (idx % 3) * 0.8;
    const distanceY = 10 + (idx % 2) * 6;
    const distanceX = 6 - (idx % 3) * 4;

    gsap.to(pill, {
      y: `+=${distanceY}`,
      x: `+=${distanceX}`,
      rotation: idx % 2 === 0 ? 1.5 : -1.5,
      duration: duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: idx * 0.2
    });
  });
}

/**
 * Animated SVG squiggly connecting line for Process steps
 */
function initProcessLineDraw() {
  const path = document.querySelector('.process-connector-path');
  if (!path) return;

  const length = path.getTotalLength ? path.getTotalLength() : 600;
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.process-section',
      start: 'top 70%',
      end: 'bottom 80%',
      scrub: 1
    }
  });

  // Stagger reveal of the 3 process cards
  gsap.from('.process-card', {
    y: 60,
    opacity: 0,
    stagger: 0.25,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.process-cards-container',
      start: 'top 80%'
    }
  });
}

/**
 * ScrollTrigger reveals for sections & cards
 */
function initScrollReveals() {
  // Philosophy statement reveal
  gsap.from('.philosophy-statement', {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.philosophy-section',
      start: 'top 75%'
    }
  });

  // Floating skill pills entrance
  gsap.from('.floating-skill-pill', {
    scale: 0,
    opacity: 0,
    stagger: 0.12,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.philosophy-section',
      start: 'top 70%'
    }
  });

  // Experience cards
  gsap.from('.experience-card', {
    y: 60,
    opacity: 0,
    stagger: 0.25,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.experience-grid',
      start: 'top 80%'
    }
  });

  // Testimonial cards
  gsap.from('.testimonial-card', {
    y: 60,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.testimonials-grid',
      start: 'top 80%'
    }
  });

  // Service cards
  gsap.from('.service-card', {
    y: 60,
    opacity: 0,
    stagger: 0.18,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.services-grid',
      start: 'top 80%'
    }
  });

  // Contact box
  gsap.from('.contact-card-box', {
    scale: 0.95,
    y: 50,
    opacity: 0,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%'
    }
  });
}

/**
 * Subtle magnetic effect on interactive buttons & pills
 */
function initMagneticElements() {
  // Only apply on non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const magneticBtns = document.querySelectorAll('[data-magnetic]');
  
  magneticBtns.forEach(btn => {
    const strength = parseFloat(btn.getAttribute('data-magnetic')) || 0.3;
    
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1.2, 0.4)'
      });
    });
  });
}

/**
 * Animated number counter when metrics section enters viewport
 */
function initCounterAnimations() {
  const metricItems = document.querySelectorAll('.metric-big-num');
  if (!metricItems.length) return;

  ScrollTrigger.create({
    trigger: '.metrics-container',
    start: 'top 85%',
    onEnter: () => {
      metricItems.forEach(el => {
        const targetStr = el.getAttribute('data-count');
        if (!targetStr) return;

        // Parse numerical part and symbols
        const match = targetStr.match(/([^\d]*)([\d\.]+)([^\d]*)/);
        if (match) {
          const prefix = match[1] || '';
          const targetNum = parseFloat(match[2]);
          const suffix = match[3] || '';
          const isDecimal = targetStr.includes('.');

          const obj = { val: 0 };
          gsap.to(obj, {
            val: targetNum,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = `${prefix}${isDecimal ? obj.val.toFixed(1) : Math.round(obj.val)}${suffix}`;
            }
          });
        }
      });
    }
  });
}
