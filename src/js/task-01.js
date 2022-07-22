const categoryEl = document.querySelector("#categories");
// console.log(categoryEl); // categories
    // всі категорії 
const itemEl = categoryEl.querySelectorAll(".item ul");
console.log(`Number of categories: ${itemEl.length}`);



        // Animals

const animalsItem = categoryEl.childNodes[1];
// console.log(animalsItem);
const animalsH2 = animalsItem.querySelector("h2");
// console.log(animalsH2.innerHTML); // products
const animalsUl = animalsItem.querySelector("ul");
// console.log(animalsUl); // ul

const animalsLength = animalsUl.children;
// console.log(animalsLength.length); // 3
console.log(`Category: ${animalsH2.innerHTML}
Elements: ${animalsLength.length}`);


        // Products

const productsItemEl = categoryEl.childNodes[3];
// console.log(productsItemEl.innerHTML);
const prodH2 = productsItemEl.querySelector('h2')
// console.log(prodH2.innerHTML); // products
const prodUl = productsItemEl.querySelector("ul");
// console.log(prodUl); // ul

const prodLength = prodUl.children;
// console.log(prodLength.length); // 3
console.log(`Category: ${prodH2.innerHTML}
Elements: ${prodLength.length}`);

// Technologies

const techItem = categoryEl.childNodes[5];
// console.log(techItem.innerHTML)
const techH2 = techItem.querySelector("h2");
// console.log(prodH2.innerHTML); // Technologies
const techUl = techItem.querySelector("ul");
// console.log(prodUl); // ul

const techLength = techUl.children;
// console.log(prodLength.length); // 3
console.log(`Category: ${techH2.innerHTML}
Elements: ${techLength.length}`);





