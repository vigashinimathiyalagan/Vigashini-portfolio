// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Add dark mode toggle functionality
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Dark Mode Styles (Add these to CSS)
document.styleSheets[0].insertRule(`
  body.dark-mode {
    background-color: #333;
    color: #fff;
  }
`, 0);
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 150); // Stagger delay
    }
  });
}, { threshold: 0.1 });

projectCards.forEach(card => observer.observe(card));
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


