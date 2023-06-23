const buttonStart = document.querySelector('[data-start');
const buttonStop = document.querySelector('[data-stop');
buttonStop.disabled = true;
let timerId = null;

buttonStart.addEventListener('click', onClickButtonStart);
buttonStop.addEventListener('click', onClickButtonStop);

function onClickButtonStart(e) {
  e.target.disabled = true;
  buttonStop.disabled = false;

  timerId = setInterval(() => {
    setBodyBgColor();
  }, 1000);
}
function onClickButtonStop(e) {
  console.log(e);
  e.target.disabled = true;
  buttonStart.disabled = false;

  clearInterval(timerId);
}
function setBodyBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
