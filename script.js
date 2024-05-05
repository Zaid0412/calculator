const themeChangBtn = document.querySelector(".theme-icon");
const header = document.querySelector("header");
const headingTitle = document.querySelector(".heading-title");
const themeIcon = document.querySelector(".theme-icon");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clear-btn");
const deleteBtn = document.querySelector(".delete-btn");
const operation = document.querySelectorAll(".operation");
const result = document.querySelector(".result");
const clearBtnsContainer = document.querySelector(".clear-btns");
const numsAndOperations = document.querySelector(".nums-and-operations");

console.log(result);
console.log(clearBtnsContainer);
console.log(numsAndOperations);

let toggledWhite = false;

// ---------------- Functions ---------------- //

function changeTheme() {
  header.classList.toggle("white-header");
  header.classList.toggle("header");

  headingTitle.classList.toggle("white-heading-title");
  headingTitle.classList.toggle("heading-title");

  container.classList.toggle("white-container");
  container.classList.toggle("container");

  clearBtn.classList.toggle("white-clear-btn");
  clearBtn.classList.toggle("clear-btn");

  deleteBtn.classList.toggle("white-delete-btn");
  deleteBtn.classList.toggle("delete-btn");

  for (const btn of operation) {
    btn.classList.toggle("white-operation");
    btn.classList.toggle("operation");
  }

  if (!toggledWhite) {
    themeIcon.src = "./images/moon.png";

    body.style.backgroundColor = "white";
    toggledWhite = true;
  } else if (toggledWhite) {
    themeIcon.src = "./images/sun.png";

    body.style.backgroundColor = "#1f2029";
    toggledWhite = false;
  }
}

//  ---------- Event Listeners ------------ //

themeChangBtn.addEventListener("click", changeTheme);
