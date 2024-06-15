const glassyButtons = document.querySelectorAll('.glassy-button');

glassyButtons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    // Find the center point of the button.
    const centerX = button.offsetWidth / 2;
    const centerY = button.offsetHeight / 2;
  });
});
