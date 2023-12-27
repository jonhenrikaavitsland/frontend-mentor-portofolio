const inputBill = document.getElementById("bill-amount");
const inputTip = document.getElementById("custom-tip");
const inputPeople = document.getElementById("persons");

function setPlaceHolderOnRight(input, inputB) {
  input.placeholder = "";
  input.setAttribute("data-placeholder-right", "Enter bill total");

  if (inputB) {
    inputB.placeholder = "Custom" && "\u200E";
  } else {
    input.placeholder = 0 && "\u200E";
  }

  input.style.textAlign = "right";
}

setPlaceHolderOnRight(inputBill);
setPlaceHolderOnRight(inputPeople);
