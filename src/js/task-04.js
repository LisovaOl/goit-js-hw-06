let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);
const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
const valueEl = document.querySelector('#value');
// console.log(valueEl);

const plusOne = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};
const minusOne = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
decrementBtn.addEventListener("click", minusOne);
incrementBtn.addEventListener("click", plusOne);

// const counter = {
//   value: 0,
//   increment() {
//     console.log("increment -> this", this);
//     this.value += 1;
//   },
//   decrement() {
//     console.log("decrement -> this", this);
//     this.value -= 1;
//   },
// };
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
// const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);
// const valueEl = document.querySelector('#value');
// console.log(valueEl);

// // decrementBtn.textContent = 'Down -1';
// // incrementBtn.textContent = 'Up + 1';

// decrementBtn.addEventListener('click', function () {
//     // console.log('Click on Button "Down"')
//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;

// });

// incrementBtn.addEventListener('click', function () {
//     // console.log('Click on Button "Up"')
//         counter.increment();
//         console.log(counter);
//     valueEl.textContent = counter.value;

// })
