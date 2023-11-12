import { searchBox } from "./../index.js";

export function searchCountriesByName() {
  let card = document.querySelectorAll(".country-container");
  let cardH2 = document.querySelectorAll(".country-container h2");
  let keyword = searchBox.value.toLowerCase();

  for (let i = 0; i < card.length; i++) {
    if (!cardH2[i].innerText.toLowerCase().includes(keyword)) {
      card[i].classList.add("hidden");
    } else {
      card[i].classList.remove("hidden");
    }
  }
}
