import { regions } from "./render/renderRegions.js";
import { parentContainer } from "./render/renderRegions.js";
import { createHtmlFilterRegions } from "./render/renderRegions.js";
import { filterSearch, openFilter } from "./Listeners/openFilter.js";
import { reversedData } from "./data/getData.js";
import { createCountryCard } from "./render/renderCountriesCard.js";
import { searchCountriesByName } from "./searchOrFilter/search.js";

// Renders the html for the filter by region menu
createHtmlFilterRegions(regions, parentContainer);

// export for later use
export const filterRegions = document.querySelector(".filter-regions");
export const searchBox = document.querySelector("#search");

// on click it will open or close the filer by region menu
filterSearch.addEventListener("click", openFilter);

// Renders country cards
createCountryCard(reversedData);

// Handles search input from search bar
searchBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") searchCountriesByName();
});
