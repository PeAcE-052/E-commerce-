let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

if (cart.length === 0) {
 cartItemsContainer.innerHTML = "<p> Your cart is empty.</p>";
} else {
  let total = 0;
  cartItemsContainer.innerHTML = "";
  cart.forEach((item, index) => {
    total += item.price;
    cartItemsContainer.innerHTML += `
    <div class="cart-item">
      <p>${item.name} - $${item.price}</p>
      <button onclick =" removeItem(${index})">Remove</button>
    </div>
    `;
  });
  cartTotal.textContent = `Total: $${total}`;
}
 
//  Remove  Item Function 
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();   
  // refresh page to update cart
}