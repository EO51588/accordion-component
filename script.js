"use strict";

const items = document.querySelectorAll(".item");

const accordion = document.querySelector(".accordion");

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
