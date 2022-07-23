const rangeEl = document.querySelector('#font-size-control');
console.log(rangeEl);
const textEl = document.querySelector('#text');
console.log(textEl);

// ------  Варіант 1 -------

rangeEl.addEventListener("input", function () {
  textEl.style.fontSize = rangeEl.value + "px";
});

// ------  Варіант 2 -------

// rangeEl.addEventListener("change", function () {
//   textEl.style.fontSize = this.value + "px";
// });




// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>