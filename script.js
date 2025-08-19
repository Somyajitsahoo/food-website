const foodItems = [
  { id: 1, name: "Veg Burger", price: 99, image: "https://i.imgur.com/lGJuFU0.jpg" },
  { id: 2, name: "Pizza", price: 199, image: "https://i.imgur.com/MQ1sD8p.jpg" },
  { id: 3, name: "French Fries", price: 79, image: "https://i.imgur.com/6Oe0vlg.jpg" },
  { id: 4, name: "Momos", price: 89, image: "https://i.imgur.com/9a5TWeW.jpg" },
];

const foodContainer = document.getElementById("food-container");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartCountEl = document.getElementById("cart-count");

let cart = [];

function renderFoods() {
  foodItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    foodContainer.appendChild(card);
  });
}

function addToCart(id) {
  const item = foodItems.find(food => food.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPriceEl.textContent = total;
  cartCountEl.textContent = cart.length;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Thank you for ordering!");
  cart = [];
  updateCart();
}

renderFoods();
