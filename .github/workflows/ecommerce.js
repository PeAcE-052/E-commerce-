//  Cart Array ( stored in localStorage)
let cart =JSON.parse(localStorage.getItem("cart")) || [];
 const cartCounter = document.getElementById("cart-count");
 cartCounter.textContent = cart.length;

//   Add to Cart Buttons
const buttons = document.querySelectorAll(".add-cart");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentElement;
    const product = {
      name: card.dataset.name,
      price: parseFloat(card.dataset.price)
    };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCounter.textContent = cart.length;
    alert(`${product.name} added to cart`)
  });
});


// Cart Section 
// let cart1 = JSON.parse(localStorage.getItem("cart")) || []
// const cartItemsContainer = document.getElementById("cart-items");
// const cartTotal = document.getElementById("cart-total");

// if (cart.length ===0) {
//  cartItemsContainer.innerHTML = "<p> Your cart is empty.</p>";
// } else {
//   let total = 0;
//   cartItemsContainer.innerHTML = "";
//   cartEach((item, index) => {
//     total += item.price;
//     cartItemsContainer.innerHTML += `
//     <div class="cart-item">
//       <p>${item.name} - $${item.price}</p>
//       <button onclick =" removeItem($${item.price})">Remove</button>
//     </div>
//     `;
//   });
//   cartTotal.textContent = `Total: $${total}`;
// }
 
// //  Remove  Item Function 
// function removeItem(index) {
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   location.reload();   
//   // refresh page to update cart
// }

// //  Simple Cart Counter 
// let cartCount = 0;
// const cartCounter = document.getElementById("cart-count");
// const buttons= document.querySelectorAll(".add-cart");

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     cartCount++;
//     cartCounter.textContent = cartCount;
//     alert("Product added to cart!")
//   });
// });