import {
  activeImage1,
  activeImage2,
  activeImage3,
  activeImage4,
} from "./../index.js";

export function onClickThumbnailOne() {
  activeImage1[0].classList.remove("hidden");
  activeImage2[0].classList.add("hidden");
  activeImage3[0].classList.add("hidden");
  activeImage4[0].classList.add("hidden");
}

export function onClickThumbnailTwo() {
  activeImage2[0].classList.remove("hidden");
  activeImage1[0].classList.add("hidden");
  activeImage3[0].classList.add("hidden");
  activeImage4[0].classList.add("hidden");
}

export function onClickThumbnailThree() {
  activeImage3[0].classList.remove("hidden");
  activeImage1[0].classList.add("hidden");
  activeImage2[0].classList.add("hidden");
  activeImage4[0].classList.add("hidden");
}

export function onClickThumbnailFour() {
  activeImage4[0].classList.remove("hidden");
  activeImage1[0].classList.add("hidden");
  activeImage2[0].classList.add("hidden");
  activeImage3[0].classList.add("hidden");
}
