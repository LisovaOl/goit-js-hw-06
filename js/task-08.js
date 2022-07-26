const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); //сторінка не повинна перезавантажуватися
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповніть всі поля!");
  }

  console.log(`{Email: ${email.value}, Password: ${password.value}}`);
  event.currentTarget.reset(); //очисти значення полів форми
}

// const formEl = document.querySelector(".login-form");

// formEl.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault(); //сторінка не повинна перезавантажуватися

//   const formData = new FormData(event.currentTarget);

//   formData.forEach((email, password) => {
//     console.log("onFormSubmit -> name", email);
//     console.log("onFormSubmit -> name", password);
//   });
//   event.currentTarget.reset(); //очисти значення полів форми
// }
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
