import { regions } from "./render/renderRegions.js";
import { parentContainer } from "./render/renderRegions.js";
import { createHtmlFilterRegions } from "./render/renderRegions.js";
import { filterSearch, openFilter } from "./Listeners/openFilter.js";
import { reversedData } from "./data/getData.js";
import { createCountryCard } from "./render/renderCountriesCard.js";

// Renders the html for the filter by region menu
createHtmlFilterRegions(regions, parentContainer);

// exports for later use
export const filterRegions = document.querySelector(".filter-regions");

// on click it will open or close the filer by region menu
filterSearch.addEventListener("click", openFilter);

// Renders country cards
createCountryCard(reversedData);
console.log(reversedData);
