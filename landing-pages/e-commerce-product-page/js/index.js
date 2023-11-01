import { menuOpen, closeMenu, closeEsc } from "./modal/menu.js";
import {
  updateDisplay,
  subtractItem,
  addItem,
} from "./counter/counterDisplay.js";
import { openCart } from "./cart/openCart.js";
import { addToCart, updateCartIcon } from "./cart/addToCart.js";
import { checkToUpdate } from "./cart/checkToUpdate.js";
import { clearCart } from "./cart/updateCartContent.js";
import {
  hoverThumbOne,
  hoverThumbTwo,
  hoverThumbThree,
  hoverThumbFour,
  afterHoverThumbOne,
  afterHoverThumbTwo,
  afterHoverThumbThree,
  afterHoverThumbFour,
} from "./gallery/hoverThumbnails.js";
import {
  onClickThumbnailOne,
  onClickThumbnailTwo,
  onClickThumbnailThree,
  onClickThumbnailFour,
} from "./gallery/onClickThumbnails.js";

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
export const cartContent = document.querySelector(".cart-content");

// Cart
updateCartIcon(); // updates the cart icon in the top with amount of items in the cart.
checkToUpdate(); // generates the html in the cart if condition is true.
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

let trashBtn;

function getElement() {
  trashBtn = document.querySelector(".rem-ord");
}

setTimeout(getElement(), 5000);

if (trashBtn) trashBtn.addEventListener("click", clearCart);

// Hover functions for thumbnails
export const activeImage1 = document.querySelectorAll(".thumb-1");
export const activeImage2 = document.querySelectorAll(".thumb-2");
export const activeImage3 = document.querySelectorAll(".thumb-3");
export const activeImage4 = document.querySelectorAll(".thumb-4");
const thumbOne = document.querySelector(".thumbnail-1");
const thumbTwo = document.querySelector(".thumbnail-2");
const thumbThree = document.querySelector(".thumbnail-3");
const thumbFour = document.querySelector(".thumbnail-4");
export const thumbOver1 = document.querySelector(".thumb-1-h");
export const thumbOver2 = document.querySelector(".thumb-2-h");
export const thumbOver3 = document.querySelector(".thumb-3-h");
export const thumbOver4 = document.querySelector(".thumb-4-h");
export const imageDisplay = document.querySelector(".image-display");

// If not active image, run hover, when no longer hovering, reset state.
thumbOne.addEventListener("mouseover", hoverThumbOne);
thumbOne.addEventListener("mouseleave", afterHoverThumbOne);
thumbTwo.addEventListener("mouseover", hoverThumbTwo);
thumbTwo.addEventListener("mouseleave", afterHoverThumbTwo);
thumbThree.addEventListener("mouseover", hoverThumbThree);
thumbThree.addEventListener("mouseleave", afterHoverThumbThree);
thumbFour.addEventListener("mouseover", hoverThumbFour);
thumbFour.addEventListener("mouseleave", afterHoverThumbFour);

thumbOne.addEventListener("click", onClickThumbnailOne);
thumbTwo.addEventListener("click", onClickThumbnailTwo);
thumbThree.addEventListener("click", onClickThumbnailThree);
thumbFour.addEventListener("click", onClickThumbnailFour);

console.log(imageDisplay);