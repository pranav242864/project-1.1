window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const container = document.querySelector(".container");
  const spans = document.querySelectorAll(".preloader-text span");

  setTimeout(() => {
    spans.forEach((span) => {
      span.style.animation = "none";
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    });

    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.animation = "fadeOutLetter 0.6s ease forwards";
      }, index * 60); // smoother stagger
    });
  }, 2500); // 2s fade-in + 0.5s pause

  setTimeout(() => {
    preloader.classList.add("hidden");
    container.classList.add("visible");
  }, 4200); // after full fade-out
});















document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const revealOnScroll = (entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        setTimeout(() => {
          card.classList.add("visible");
        }, i * 200); // staggered reveal (200ms apart)
        observer.unobserve(card);
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
});














document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-left, .fade-right");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeElements.forEach((el) => observer.observe(el));
});

