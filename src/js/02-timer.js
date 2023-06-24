import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    checkDate(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);

const buttonStart = document.querySelector('[data-start]');
buttonStart.disabled = true;
let timerId = null;
let dateCountFrom = null;

function checkDate(selectedDate) {
  console.log(selectedDate);
  const currentDate = new Date();
  console.log(currentDate);
  if (selectedDate < currentDate) {
    //   window.alert('Please choose a date in the future');
    Notify.failure('Please choose a date in the future', {
      timeout: 2000,
    });
    return;
  }
  buttonStart.disabled = false;
  dateCountFrom = selectedDate;
}

buttonStart.addEventListener('click', onClickButtonStart);

function onClickButtonStart() {
  timerId = setInterval(() => {
    counterTime();
  }, 1000);
  buttonStart.disabled = true;
}

function counterTime() {
  const timeLeft = dateCountFrom - new Date();
  if (timeLeft <= 0) {
    Notify.info('Time is over');

    clearInterval(timerId);
    return;
  }
  const timeLeftObj = convertMs(timeLeft);
  document.querySelector('[data-days]').textContent = addLeadingZero(
    timeLeftObj.days
  );

  document.querySelector('[data-hours]').textContent = addLeadingZero(
    timeLeftObj.hours
  );

  document.querySelector('[data-minutes]').textContent = addLeadingZero(
    timeLeftObj.minutes
  );

  document.querySelector('[data-seconds]').textContent = addLeadingZero(
    timeLeftObj.seconds
  );

  console.log(timeLeftObj.seconds);
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
