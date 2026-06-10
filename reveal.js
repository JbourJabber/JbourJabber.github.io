document.addEventListener("DOMContentLoaded", function () {
  // Tag the main content blocks for reveal
  const targets = document.querySelectorAll("main h2, main .grid, main p");
  targets.forEach(el => el.classList.add("reveal-on-scroll"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
});