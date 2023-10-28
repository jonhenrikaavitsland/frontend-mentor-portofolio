import { mobileMenu, overlay } from "../index.js";

export const closeMenu = function () {
  mobileMenu.classList.add("hidden");
  overlay.classList.add("hidden");
};

export const menuOpen = function () {
  mobileMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

export const closeEsc = function (e) {
  if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
    closeMenu();
  }
};
