/**
 *  javascript code for the mobile menu demo
 */

// variables

let mobileMenu = document.querySelector("#mobile-menu");
let mobileMenuButton = document.querySelector("#mobile-menu-button");

// functions

function toggleMenu(event) {
  event.preventDefault();
  mobileMenu.classList.toggle("is-open");
  mobileMenuButton.classList.toggle("is-open");
}

// event listeners

mobileMenuButton.addEventListener("click", (event) => toggleMenu(event));
