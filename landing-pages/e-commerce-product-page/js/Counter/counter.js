import { amountDisplay } from "./../index.js";

let itemCount = 0;

export function updateDisplay() {
  amountDisplay.textContent = itemCount;
}

export function subtractItem() {
  if (itemCount) itemCount--;
  updateDisplay();
}

export function addItem() {
  itemCount++;
  updateDisplay();
}
