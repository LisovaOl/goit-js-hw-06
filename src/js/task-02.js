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
