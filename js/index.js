// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    state.pepperoni
      ? (onePep.style.visibility = 'visible')
      : (onePep.style.visibility = 'hidden');
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('section.mushroom').forEach((oneMush) => {
    state.mushrooms
      ? (oneMush.style.visibility = 'visible')
      : (oneMush.style.visibility = 'hidden')
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('section.green-pepper').forEach((oneGreenP) => {
    state.greenPeppers
      ? (oneGreenP.style.visibility = 'visible')
      : (oneGreenP.style.visibility = 'hidden')
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  state.whiteSauce
    ? document.querySelector('.sauce').classList.add('sauce-white')
    : document.querySelector('.sauce').classList.remove('sauce-white')
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  state.glutenFreeCrust
    ? document.querySelector('.crust').classList.add('crust-gluten-free')
    : document.querySelector('.crust').classList.remove('crust-gluten-free')
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  state.pepperoni
    ? document.querySelector('.btn.btn-pepperoni').classList.add('active')
    : document.querySelector('.btn.btn-pepperoni').classList.remove('active')

  state.mushrooms
    ? document.querySelector('.btn.btn-mushrooms').classList.add('active')
    : document.querySelector('.btn.btn-mushrooms').classList.remove('active')

  state.greenPeppers
    ? document.querySelector('.btn.btn-green-peppers').classList.add('active')
    : document
        .querySelector('.btn.btn-green-peppers')
        .classList.remove('active')

  state.whiteSauce
    ? document.querySelector('.btn.btn-sauce').classList.add('active')
    : document.querySelector('.btn.btn-sauce').classList.remove('active')

  state.glutenFreeCrust
    ? document.querySelector('.btn.btn-crust').classList.add('active')
    : document.querySelector('.btn.btn-crust').classList.remove('active')
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let listIngredients = document.querySelector('.panel.price > ul')
  listIngredients.innerHTML = '';
  let total = basePrice;

  for (ingredient in ingredients) {
    //console.log(ingredient, state.ingredient);
    if (state[ingredient]) {
      console.log(ingredient, state[ingredient]);
      listIngredients.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name}</li>`;
      total += ingredients[ingredient].price;
    }
  }
  document.querySelector('.panel.price strong').innerHTML = `$ ${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
