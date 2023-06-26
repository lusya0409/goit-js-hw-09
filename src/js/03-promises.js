import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const firtsDelay = Number(form.delay.value);
  const delayStep = Number(form.step.value);
  const amountPromises = Number(form.amount.value);
  for (let i = 0; i < amountPromises; i += 1) {
    let delay = firtsDelay;
    if (i > 0) {
      delay = firtsDelay + delayStep * i;
    }
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
