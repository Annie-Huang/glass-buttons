const glassyButtons = document.querySelectorAll('.glassy-button');

glassyButtons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    // Find the center point of the button.
    const centerX = button.offsetWidth / 2;
    const centerY = button.offsetHeight / 2;

    // event.offset is the coordinate of the mouse on the button, start from top left corner as 0 0, and bottom right corner has the highest positive number
    const offsetX = event.offsetX - centerX;
    const offsetY = event.offsetY - centerY;
    // Then offsetX and offsetY will be the different from the center of the the button.
    // if we are right in the middle, offsetX offsetY will be 0 0. On the top left corner, it will have the most negative numbers and the bottom right corner has the most positive numbers

    button.style.setProperty('--_x-motion', `${offsetX}px`);
    button.style.setProperty('--_y-motion', `${offsetY}px`);
  });
});
