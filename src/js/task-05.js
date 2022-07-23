const nameInputEl = document.querySelector("#name-input");
// console.log(nameInputEl);
const nameOutputEl = document.querySelector("#name-output");
// console.log(nameOutputEl);

nameInputEl.addEventListener("input", (event) => {
  const textInput = event.currentTarget.value;

  if (textInput === "") {
    return (nameOutputEl.textContent = "Anonymous");
  }
  nameOutputEl.textContent = textInput;
});

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
