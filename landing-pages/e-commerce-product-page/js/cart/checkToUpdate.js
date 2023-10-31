import { updateCartContent } from "./updateCartContent.js";

export function checkToUpdate() {
  const e = localStorage.getItem("amount");
  if (e) {
    updateCartContent();
  }
}
