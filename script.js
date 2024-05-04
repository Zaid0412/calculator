const themeChangBtn = document.querySelector(".theme-icon");
const header = document.querySelector("header");
const headingTitle = document.querySelector(".heading-title");
const themeIcon = document.querySelector(".theme-icon");
const body = document.querySelector("body");
const container = document.querySelector(".container");
// const operations = document.get(".operation");

let toggledWhite = false;

themeChangBtn.addEventListener("click", function () {
  header.classList.toggle("white-header");
  header.classList.toggle("header");

  headingTitle.classList.toggle("white-heading-title");
  headingTitle.classList.toggle("heading-title");

  container.classList.toggle("white-container");
  container.classList.toggle("container");

  //   operations.classList.toggle("white-operation");
  //   operations.classList.toggle("operation");

  if (!toggledWhite) {
    themeIcon.src = "./images/moon.png";

    body.style.backgroundColor = "white";
    toggledWhite = true;
  } else if (toggledWhite) {
    themeIcon.src = "./images/sun.png";

    body.style.backgroundColor = "#1f2029";
    toggledWhite = false;
  }
});
