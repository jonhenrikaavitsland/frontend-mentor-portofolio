import { cartOverlay } from "./../index.js";

export function openCart() {
  if (cartOverlay.classList.contains("hidden")) {
    cartOverlay.classList.remove("hidden");
  } else {
    cartOverlay.classList.add("hidden");
  }
}
