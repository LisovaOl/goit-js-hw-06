const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngridients = document.querySelector('#ingredients');
console.log(listOfIngridients);

const ingredientEl = ingredients.map((element) => {
  const elemetLi = document.createElement("li");
  elemetLi.classList.add("item");
  elemetLi.textContent = element;
  return elemetLi;
})

listOfIngridients.append(...ingredientEl);
console.log(listOfIngridients);


// Напиши скрипт, який для кожного елемента масиву ingredients:

//     Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі <li> за одну операцію у список ul#ingredients.