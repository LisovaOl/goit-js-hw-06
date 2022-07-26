const widgetEl = document.querySelector(".widget");
// console.log(widgetEl)
const colorEl = widgetEl.querySelector(".color");
console.log(colorEl);
const btnChangeColor = widgetEl.querySelector(".change-color");
// console.log(btnChangeColor);

btnChangeColor.addEventListener("click", () => {
  colorEl.textContent = getRandomHexColor();
  
  const bgColor = colorEl.textContent;

  document.body.style.backgroundColor = bgColor;
  console.log(bgColor);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    .toUpperCase()}`;
}

// Завдання 9

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
