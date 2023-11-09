import { getRegion } from "./data/getRegions.js";
import { newData } from "./data/getData.js";

const data = getRegion(newData);
console.log(data);

const parentContainer = document.querySelector(".filter-wrap");

function createHtmlFilterRegions(regions, parent) {
  const element = document.createElement("div");
  element.classList.add("filter-regions");

  for (let i = 0; i < regions.length; i++) {
    const childRegion = document.createElement("p");
    childRegion.innerText = `${regions[i]}`;
    element.append(childRegion);
  }

  parent.append(element);
}

createHtmlFilterRegions(data, parentContainer);
