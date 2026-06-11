const startButtonRef = document.querySelector('[data-start]');
const stopButtonRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startButtonRef.addEventListener('click', onStartButtonClick);
stopButtonRef.addEventListener('click', onStopButtonClick);

function onStartButtonClick() {
  startButtonRef.disabled = true;

  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopButtonClick() {
  clearInterval(timerId);
  startButtonRef.disabled = false;
}
