const navbar = document.getElementsByTagName("nav-div");
const button = document.getElementById("first-butt");

function addclass() {
  const navbar = document.getElementById("navbar");
  const button = document.getElementById("first-butt");
  if (window.scrollY > 320) {
    navbar.classList.add("color-nav");
    button.classList.add("button-color");
  } else {
    navbar.classList.remove("color-nav");
    button.classList.remove("button-color");
  }
}

window.addEventListener("scroll", addclass);
