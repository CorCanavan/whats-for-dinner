// Data:
var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caesar Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
];

var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
];

var selectedItem;

// Query Selectors:
var displayBox = document.querySelector(".meal-display");
var radioButtons = document.querySelectorAll("input");
var letsCookButton = document.querySelector(".meal-selection-button");
var clearButton = document.querySelector(".clear");

// Event Listeners:
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", selectMeal)
}

letsCookButton.addEventListener("click", displayMeal)
clearButton.addEventListener("click", clearMeal)

// Functions and Event Handlers:
function selectMeal(e) {
  if (e.target.value === "sides") {
    selectedItem = sides[getRandomIndex(sides)];
  } else if (e.target.value === "mains") {
    selectedItem = mains[getRandomIndex(mains)];
  } else if (e.target.value === "desserts") {
    selectedItem = desserts[getRandomIndex(desserts)];
  } else {
    selectedItem = `${mains[getRandomIndex(mains)]} with a side of
                    ${sides[getRandomIndex(sides)]} and
                    ${desserts[getRandomIndex(desserts)]} for dessert`;
  }
}

function displayMeal(e) {
  e.preventDefault();
  displayBox.innerHTML = `<div>
                            <p><i>You should make:</i></p>
                            <h1>${selectedItem}!</h1>
                          </div>
                          <footer>
                            <button class="clear">CLEAR</button>
                          </footer>`
}

function clearMeal() {
  selectedItem = " ";
  displayBox.innerHTML = '';
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
