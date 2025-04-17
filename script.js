document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
window.addEventListener('scroll', function () {
  const projects = document.querySelectorAll('.project');
  const windowHeight = window.innerHeight;

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < windowHeight - 150) {
      project.classList.add('fade-in');
    }
  });
});
