const rangeEl = document.querySelector('#font-size-control');
console.log(rangeEl);
const textEl = document.querySelector('#text');
console.log(textEl);


// rangeEl.addEventListener("change", function () {
//   textEl.style.fontSize = this.value + "px";
// });

rangeEl.addEventListener("input", function () {
  textEl.style.fontSize = rangeEl.value + "px";
});