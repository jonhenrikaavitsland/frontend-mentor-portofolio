import { itemCount } from "../counter/counterDisplay.js";
import { cartLinkNumber } from "../index.js";

export function updateCartIcon() {
  if (localStorage.getItem("amount")) {
    cartLinkNumber.textContent = localStorage.getItem("amount");
    cartLinkNumber.classList.remove("hidden");
  } else {
    cartLinkNumber.classList.add("hidden");
  }
}

export function addToCart() {
  localStorage.setItem("item", "Fall Limited Editon Sneakers");
  localStorage.setItem("amount", itemCount);
  localStorage.setItem("price", 125);
  localStorage.setItem("discount", 50);
  updateCartIcon();
}
