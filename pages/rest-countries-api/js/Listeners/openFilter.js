import { filterRegions } from "./../index.js";
export const filterSearch = document.querySelector(".filter-search");
const arrowButton = document.querySelector(".fa-chevrons-down");

export function openFilter() {
  if (filterRegions.classList.contains("hidden")) {
    filterRegions.classList.remove("hidden");
    arrowButton.classList.remove("fa-chevrons-down");
    arrowButton.classList.add("fa-chevrons-up");
  } else {
    filterRegions.classList.add("hidden");
    arrowButton.classList.remove("fa-chevrons-up");
    arrowButton.classList.add("fa-chevrons-down");
  }
}
