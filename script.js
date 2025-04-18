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
