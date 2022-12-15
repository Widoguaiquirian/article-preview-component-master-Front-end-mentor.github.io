"use strict";
const btn = document.querySelector(".btn");
const tooltip = document.querySelector(".tooltip");

btn.addEventListener("click", function () {
   btn.classList.toggle("show");
});
