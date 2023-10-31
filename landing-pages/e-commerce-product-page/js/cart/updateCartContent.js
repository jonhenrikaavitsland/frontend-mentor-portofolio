import { cartContent } from "./../index.js";
import { products } from "../Products/products.js";
import { updateCartIcon } from "./addToCart.js";

export function updateCartContent() {
  const count = localStorage.getItem("amount");

  const localItem = localStorage.getItem("item");
  const localAmount = localStorage.getItem("amount");
  const localPrice = localStorage.getItem("price");

  if (count !== "0" || !count) {
    cartContent.innerHTML = `
  <div class="cart-container-wrap">
    <div class="cart-container">
      <div>
        <img src="${products[0].thumbnail}" alt="shoes displayed elegantly">
      </div>
      <div class="text-wrap">
        <span class="text-title">${localItem}</span>
        <div>
          <span class="text-price">$${localPrice}.00 x ${localAmount}</span>
          <span>$${localPrice * localAmount}.00</span>
        </div>
      </div>
      <div class="rem-ord">
        <img src="./images/icon-delete.svg" alt="click to empty cart">
      </div>
    </div>
    <div class="checkout-wrap">
      <button class="cta checkout-btn">Checkout</button>
    </div>
  </div>`;
  } else {
    cartContent.innerHTML = "<span>Your cart is empty.</span>";
  }
}

export function clearCart() {
  if (localStorage.getItem("amount") !== "0") {
    localStorage.setItem("amount", "0");
    updateCartIcon();
    updateCartContent();
  }
}

console.log(localStorage);

