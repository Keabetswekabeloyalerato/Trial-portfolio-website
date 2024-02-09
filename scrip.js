const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const targetSection = document.querySelector(link.getAttribute('href'));
    scrollToSection(targetSection);
  });
});

function scrollToSection(targetSection) {
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
