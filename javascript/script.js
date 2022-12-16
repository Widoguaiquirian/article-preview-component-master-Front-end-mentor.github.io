"use strict";
const btn = document.querySelector(".btn");
const articleDesktop = document.querySelector(".article__desktop");
const articleMobile = document.querySelector(".article__mobile");
const articleMenu = document.querySelector(".article__menu");

btn.addEventListener("click", function () {
   btn.classList.toggle("show");
   articleDesktop.classList.toggle("hide");
   articleMobile.classList.toggle("show");
   articleMenu.classList.toggle("mobile");
});
