const toggle = document.querySelector('.toggle-dark-mode');

toggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    toggle.textContent = '🌙'; // Switch to dark mode icon
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️'; // Switch to light mode icon
  }
});

const buttons = document.querySelectorAll('.gallery-buttons button');
const images = document.querySelectorAll('.gallery img');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    images.forEach(img => {
      if (filter === 'all' || img.classList.contains(filter)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});
