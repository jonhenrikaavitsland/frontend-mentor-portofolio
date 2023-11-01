import {
  activeImage1,
  activeImage2,
  activeImage3,
  activeImage4,
  imageDisplay,
} from "./../index.js";
import { products } from "../Products/products.js";

export function onClickThumbnailOne() {
  activeImage1[0].classList.remove("hidden");
  activeImage2[0].classList.add("hidden");
  activeImage3[0].classList.add("hidden");
  activeImage4[0].classList.add("hidden");
  imageDisplay.src = `${products[0].image}`;
}

export function onClickThumbnailTwo() {
  activeImage2[0].classList.remove("hidden");
  activeImage1[0].classList.add("hidden");
  activeImage3[0].classList.add("hidden");
  activeImage4[0].classList.add("hidden");
  imageDisplay.src = `${products[1].image}`;
}

export function onClickThumbnailThree() {
  activeImage3[0].classList.remove("hidden");
  activeImage1[0].classList.add("hidden");
  activeImage2[0].classList.add("hidden");
  activeImage4[0].classList.add("hidden");
  imageDisplay.src = `${products[2].image}`;
}

export function onClickThumbnailFour() {
  activeImage4[0].classList.remove("hidden");
  activeImage1[0].classList.add("hidden");
  activeImage2[0].classList.add("hidden");
  activeImage3[0].classList.add("hidden");
  imageDisplay.src = `${products[3].image}`;
}
