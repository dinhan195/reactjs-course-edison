/** @format */

const btnClickMe = document.querySelector('#btn');
// btnClickMe.addEventListener('click', clickMe);
btnClickMe.addEventListener('mouseup', mauseupButton);

function clickMe(event) {
  event.preventDefault();
}
function mauseupButton(event) {
  const msg = document.querySelector('#message');
  switch (event.button) {
    case 0:
      msg.textContent = 'Left mouse button clicked.';
      break;
    case 1:
      msg.textContent = 'Middle mouse button clicked.';
      break;
    case 2:
      msg.textContent = 'Right mouse button clicked.';
      break;
    default:
      msg.textContent = `Unknown mouse button code: ${event.button}`;
  }
}
