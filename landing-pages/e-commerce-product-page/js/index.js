import { menuOpen, closeMenu, closeEsc } from "./modal/menu.js";
import {
  updateDisplay,
  subtractItem,
  addItem,
} from "./counter/counterDisplay.js";
import { openCart } from "./cart/openCart.js";
import { addToCart, updateCartIcon } from "./cart/addToCart.js";


("use strict");

export const mobileMenu = document.querySelector(".mobile-nav");
export const overlay = document.querySelector(".overlay");
const btnCloseMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu");

const minusButton = document.querySelector(".amount-1");
const plusButton = document.querySelector(".amount-3");
export const amountDisplay = document.querySelector(".amount-2");
export const cartLinkNumber = document.querySelector(".cart-number");

const cart = document.querySelector(".cart-wrap");
export const cartOverlay = document.querySelector(".cart-overlay");

const addToCartBtn = document.querySelector(".cta");

// Cart
updateCartIcon();
cart.addEventListener("click", openCart); // open/close cart overlay by clicking the cart icon.
addToCartBtn.addEventListener("click", addToCart); // adds the item to local storage.

// Hamburger Menu
openMenu.addEventListener("click", menuOpen); // opens the hamburger menu.
btnCloseMenu.addEventListener("click", closeMenu); // closes the hamburger menu on button.
overlay.addEventListener("click", closeMenu); // closes the menu if clicking the overlay.
document.addEventListener("keydown", closeEsc); // Closes the hamburger menu if hitting the escape key.

// Counter display
updateDisplay(); // updates the number between the - and + symbols.
minusButton.addEventListener("click", subtractItem); // removes one item from the above.
plusButton.addEventListener("click", addItem); // adds one item to the above.


