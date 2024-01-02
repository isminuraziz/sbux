function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}

function toggleMenu() {
  let menuToggle = document.querySelector(".toggle");
  let navbar = document.querySelector(".navbar");
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
}
