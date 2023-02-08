let hamburger = document.querySelector(".hamburger");
let wrappeer = document.querySelector(".wrappeer");
let backdrop = document.querySelector(".backdrop");

hamburger.addEventListener("click", () => {
  wrappeer.classList.add("active");
});

backdrop.addEventListener("click", () => {
  wrappeer.classList.remove("active");
});
