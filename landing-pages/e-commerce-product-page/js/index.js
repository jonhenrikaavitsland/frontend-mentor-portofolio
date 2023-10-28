"use strict";

const mobileMenu = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const btnCloseMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu");
const header = document.querySelector("header");

export const closeMenu = function () {
  mobileMenu.classList.add("hidden");
  overlay.classList.add("hidden");
};

export const menuOpen = function () {
  mobileMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

openMenu.addEventListener("click", menuOpen);
btnCloseMenu.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
    closeMenu();
  }
});
