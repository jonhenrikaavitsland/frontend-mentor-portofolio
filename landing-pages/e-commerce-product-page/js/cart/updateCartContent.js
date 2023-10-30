import { cartContent } from "./../index.js";
import { createCartHtml } from "../Render/renderCart.js";

export function updateCartContent() {
  const count = localStorage.getItem("amount");

  if (count !== "0") {
    const cartHtml = createCartHtml();
    cartContent.append(cartHtml);
  } else {
    cartContent.innerHTML = "<span>Your cart is empty.</span>";
  }
}
