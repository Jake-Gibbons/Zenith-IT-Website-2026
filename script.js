const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.service-card').forEach((card) => observer.observe(card));

const HEADER_MINIMIZE_SCROLL_THRESHOLD = 24;
const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  const toggleHeaderState = () => {
    siteHeader.classList.toggle('is-minimized', window.scrollY > HEADER_MINIMIZE_SCROLL_THRESHOLD);
  };

  toggleHeaderState();
  window.addEventListener('scroll', toggleHeaderState, { passive: true });
}
