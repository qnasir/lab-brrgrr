// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").addEventListener('click', function () {
  state.Cheese = !state.Cheese;
  renderAll();
});


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").addEventListener('click', function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
});


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").addEventListener('click', function () {
  state.Onions = !state.Onions;
  renderAll();
});


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").addEventListener('click', function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
});


//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  document.querySelector(".btn-patty").classList.toggle('active',state.Patty)
  document.querySelector(".btn-cheese ").classList.toggle('active',state.Cheese)
  document.querySelector(".btn-tomatoes ").classList.toggle('active',state.Tomatoes)
  document.querySelector(".btn-onions ").classList.toggle('active',state.Onions)
  document.querySelector(".btn-lettuce ").classList.toggle('active',state.Lettuce)
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  let patty = document.getElementById("patty");
  let patty1 = document.getElementById("patty1");
  if (state.Patty) {
    patty.style.display = "inherit";
    patty1.style.display = "inherit";
  } 
  else {
    patty.style.display = "none";
    patty1.style.display = "none";
}


  let tomatoes = document.getElementById("tomato");
  let tomato1 = document.getElementById("tomato1");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
    tomato1.style.display = "inherit";
  } 
  else {
    tomatoes.style.display = "none";
    tomato1.style.display = "none";
}

  let cheese = document.getElementById("cheese");
  let cheese1 = document.getElementById("cheese1");
  if (state.Cheese) {
    cheese.style.display = "inherit";
    cheese1.style.display = "inherit";
  } 
  else {
    cheese.style.display = "none";
    cheese1.style.display = "none";
}



  let onions = document.getElementById("onion");
  let onion1 = document.getElementById("onion1");
  if (state.Onions) {
    onions.style.display = "inherit";
    onion1.style.display = "inherit";
  } 
  else {
    onions.style.display = "none";
    onion1.style.display = "none";
}



  let lettuce = document.getElementById("lettuce");
  let lettuce1 = document.getElementById("lettuce1")
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
    lettuce1.style.display = "inherit";
  } 
  else {
    lettuce.style.display = "none";
    lettuce1.style.display = "none";
}
}


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  var price = wholeWheatBun*2;
  if(state.Patty){
    price+=ingredients.Patty;
  }
  if(state.Cheese){
    price+=ingredients.Cheese;
  }
  if(state.Tomatoes){
    price+=ingredients.Tomatoes;
  }
  if(state.Onions){
    price+=ingredients.Onions;
  }
  if(state.Lettuce){
    price+=ingredients.Lettuce;
  }
  document.querySelector(".price-details").innerHTML= "INR"+" "+price;
  
}
