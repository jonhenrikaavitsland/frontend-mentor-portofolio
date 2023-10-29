import { menuOpen, closeMenu, closeEsc } from "./modal/menu.js";

"use strict";

export const mobileMenu = document.querySelector(".mobile-nav");
export const overlay = document.querySelector(".overlay");
const btnCloseMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu");

openMenu.addEventListener("click", menuOpen);
btnCloseMenu.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeEsc);

