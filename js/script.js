//note : her i tried to select the elememts like they are writing in the code without any changes in the code + i  add comments using chatgpt when i finished my code



let quantity = Array.from(document.getElementsByClassName("quantity"));
// select product price
let prices = Array.from(document.getElementsByClassName("unit-price"));
// select the total price
const total_price = document.querySelector(".total");
// select all cards
const cards = Array.from(document.getElementsByClassName("card"));


//  this function has a lots of parts , add/delete  quantity items and update the total price
function updateQuantity(index, operation) {
  // Check if the index is valid (between 0 and length of quantity array)
  if (index >= 0 && index <= quantity.length) {
    // Get current quantity value from HTML and convert to number, default to 0 if invalid
    const currentValue = parseInt(quantity[index].innerHTML) || 0;

    // If operation is "add", increase quantity by 1
    if (operation === "add") {
      // Update displayed quantity
      quantity[index].innerHTML = currentValue + 1;
      // Update total price by adding item price to current total
      total_price.innerHTML =
        parseInt(total_price.innerHTML) +
        parseInt(prices[index].innerHTML) +
        "$";
    }
    // If operation is "remove" and quantity is greater than 0, decrease quantity by 1
    else if (operation === "remove" && currentValue > 0) {
      // Update displayed quantity
      quantity[index].innerHTML = currentValue - 1;
      // Update total price by subtracting item price from current total
      total_price.innerHTML =
        parseInt(total_price.innerHTML) -
        parseInt(prices[index].innerHTML) +
        "$";
    }
  }
}

// remove an item , we add click event remove for each trash icon

// Convert HTMLCollection of trash icons to a static Array for stable indexing
const remove_items = Array.from(
  document.getElementsByClassName("fas fa-trash-alt")
);

// Add click event listeners to each trash icon in the array
remove_items.forEach((item, index) => {
  // When a trash icon is clicked, call delete_item function with that item's index
  item.addEventListener("click", () => delete_item(index));
});

// function to remove item and update the total price
// Function to delete an item from the list based on its index
function delete_item(index) {
  // Check if the item exists in the cards, quantity, and prices arrays
  if (cards[index] && quantity[index] && prices[index]) {
    // Calculate the total price reduction by multiplying the price by the quantity
    const priceReduction =
      parseInt(prices[index].innerHTML) * parseInt(quantity[index].innerHTML);

    // Remove the item card from the DOM
    cards[index].remove();

    // Update the total price by subtracting the price reduction
    total_price.innerHTML =
      parseInt(total_price.innerHTML) - priceReduction + "$";
  }
}

// change heart color when we click , we put even click for each heart
const heart = document.getElementsByClassName("fas fa-heart");

// Loop through each element in the 'heart' array
for (let i = 0; i < heart.length; i++) {
    // Add a click event listener to each heart element
    heart[i].addEventListener("click", function () {
      
      // Get the current color of the heart element
      const currentColor = window.getComputedStyle(heart[i]).color;
      
      // Check if the current color is black (rgb(0, 0, 0))
      if (currentColor === "rgb(0, 0, 0)") {
        // Change the color to red if it is black
        heart[i].style.color = "red";
      } else {
        // Otherwise, change the color back to black
        heart[i].style.color = "black";
      }
    });
  }
  