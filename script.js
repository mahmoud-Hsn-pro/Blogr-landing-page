// "use strict";

const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector("nav");
const navDiv = document.querySelectorAll(".nav-links > div");
const subLinks = document.querySelectorAll(".link")

menu.addEventListener("click", function () {
  if (burgerMenu.classList.contains("active-menu")) {
    burgerMenu.classList.remove("active-menu");
    closeMenu.classList.add("active-menu");

    nav.classList.add("active-nav");
  } else {
    closeMenu.classList.remove("active-menu");
    burgerMenu.classList.add("active-menu");

    nav.classList.remove("active-nav");
  }
});

Array.from(navDiv).forEach((div) => {
  div.addEventListener("click", () => {
    document.querySelectorAll(".links").forEach(el => {
      el.classList.remove("active-links");

      document.querySelectorAll("nav h3 img").forEach((img) => {
        img.style.transform = "rotate(0deg)";
      });
    })

    let links = div.querySelector(".links");

    if (links.classList.contains("active-links")) {
      links.classList.toggle("active-links");

      div.querySelectorAll("h3 img").forEach(img => {
        img.style.transform = "rotate(0deg)";
      })
    } else  {
      links.classList.add("active-links");

      div.querySelectorAll("h3 img").forEach((img) => {
        img.style.transform = "rotate(180deg)";
      });
    }
  });
});

