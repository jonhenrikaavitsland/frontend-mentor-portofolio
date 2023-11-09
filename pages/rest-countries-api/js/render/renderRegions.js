import { newData } from "../data/getData.js";
import { getRegion } from "../data/getRegions.js";

export const regions = getRegion(newData);
export const parentContainer = document.querySelector(".filter-wrap");

export function createHtmlFilterRegions(regions, parent) {
  const element = document.createElement("div");
  element.classList.add("filter-regions", "hidden");

  for (let i = 0; i < regions.length; i++) {
    const childRegion = document.createElement("p");
    childRegion.innerText = `${regions[i]}`;
    element.append(childRegion);
  }
  parent.append(element);
}
