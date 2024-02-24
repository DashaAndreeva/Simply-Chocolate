"use strict";

const backdropOpen = document.querySelector(".loved-btn");
const backdropClose = document.querySelector(".modal-btn");
const backdrop = document.querySelector(".backdrop");

backdropOpen.addEventListener("click", onBackdropOpen);
backdropClose.addEventListener("click", onBackdropClose);

function onBackdropOpen() {
  backdrop.classList.add("is-open");
}

function onBackdropClose() {
  backdrop.classList.remove("is-open");
}
