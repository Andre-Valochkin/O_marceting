"use strict";
// Выпадающее меню
//
const headerBurger = document.querySelector(".header-top__span");
const navMenu = document.querySelector(".nav");
const navSpan = document.querySelector(".header-top__span span");
const bodyScrol = document.querySelector("body");
const navBurger = document.querySelector("header nav");
headerBurger.addEventListener("click", function () {
  navMenu.classList.toggle("header__menu-nav");
  navMenu.classList.toggle("header__menu-nav_click");
  headerBurger.classList.toggle("header-top__span");
  headerBurger.classList.toggle("header-top__span_click");
  navSpan.classList.toggle("header__span");
  navSpan.classList.toggle("header__span-click");
  bodyScrol.classList.toggle("body__click");
});

//
// Выпадающее меню
