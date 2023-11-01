import {
  activeImage1,
  activeImage2,
  activeImage3,
  activeImage4,
  thumbOver1,
  thumbOver2,
  thumbOver3,
  thumbOver4,
} from "../index.js";

export function hoverThumbOne() {
  if (activeImage1[0].classList.contains("hidden")) {
    thumbOver1.classList.remove("hidden");
  }
}

export function afterHoverThumbOne() {
  thumbOver1.classList.add("hidden");
}

export function hoverThumbTwo() {
  if (activeImage2[0].classList.contains("hidden")) {
    thumbOver2.classList.remove("hidden");
  }
}

export function afterHoverThumbTwo() {
  thumbOver2.classList.add("hidden");
}

export function hoverThumbThree() {
  if (activeImage3[0].classList.contains("hidden")) {
    thumbOver3.classList.remove("hidden");
  }
}

export function afterHoverThumbThree() {
  thumbOver3.classList.add("hidden");
}

export function hoverThumbFour() {
  if (activeImage4[0].classList.contains("hidden")) {
    thumbOver4.classList.remove("hidden");
  }
}

export function afterHoverThumbFour() {
  thumbOver4.classList.add("hidden");
}
