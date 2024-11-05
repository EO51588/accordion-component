"use strict";

const accordion = document.querySelector(".accordion");
const items = document.querySelector(".item");
const icon = document.querySelector("icons");

function open(e) {
  if (
    !e.target.classList.contains("icon") &&
    !e.target.classList.contains("text")
  )
    return;

  items.forEach((item) => {
    if (item === e.target.closest(".item")) return;

    item.classList.remove("open");
  });

  e.target.closest(".item").classList.toggle("open");
}
accordion.addEventListener("click", open);
