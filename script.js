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
const equalsBtn = document.querySelector("#equals");
const displayOper = document.querySelector(".opp");
const displayResult = document.querySelector(".res");
const opps = document.querySelectorAll(".operator");
const deciBtn = document.getElementById(".");

let toggledWhite = false;

// ---------------- Functions ---------------- //

// Theme changing function
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

  result.classList.toggle("white-result");
  result.classList.toggle("result");

  clearBtnsContainer.classList.toggle("white-clear-btns");
  clearBtnsContainer.classList.toggle("clear-btns");

  numsAndOperations.classList.toggle("white-nums-and-operations");
  numsAndOperations.classList.toggle("nums-and-operations");

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

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y == "0") {
    return "No";
  } else {
    return x / y;
  }
}

function operate(a, b, oper) {
  if (oper == "÷") return divide(a, b);
  else if (oper == "×") return multiply(a, b);
  else if (oper == "+") return add(a, b);
  else if (oper == "-") return subtract(a, b);
}

// Getting the First number, Second number and operator
let fullOper = "";
let lastClickedIsOp = false;
let lastClickedDeci = false;
let equalsSignClicked2 = false;
let operResult;

let firstNum, secondNum, operator;
for (const btn of operation) {
  btn.addEventListener("click", function () {
    if (btn.id == "equals") {
      fullOper;
    } else if (btn.id == ".") {
      fullOper += `${btn.id}`;
      lastClickedIsOp = false;
      lastClickedDeci = true;
      deciBtn.disabled = true;
    } else if (
      btn.id == "÷" ||
      btn.id == "×" ||
      btn.id == "+" ||
      btn.id == "-"
    ) {
      fullOper += ` ${btn.id} `;
      lastClickedIsOp = true;
      lastClickedDeci = false;
      deciBtn.disabled = false;
      for (const opp of opps) {
        opp.disabled = true;
      }
    } else {
      fullOper += `${btn.id}`;
      lastClickedIsOp = false;
      lastClickedDeci = false;
      deciBtn.disabled = false;
      for (const opp of opps) {
        opp.disabled = false;
      }
    }
    console.log(fullOper);

    if (equalsSignClicked2) {
      // reset fullOper
      console.log(fullOper);
      [firstNum, operator, secondNum] = fullOper.split(" ");
      firstNum = operResult;

      console.log(
        `First: ${firstNum}, Operator: ${operator}, Second: ${secondNum}`
      );
    } else [firstNum, operator, secondNum] = fullOper.split(" ");

    displayOper.textContent = fullOper.replaceAll(" ", "");
  });
}

// Evaluating the operation
equalsBtn.addEventListener("click", function () {
  if (secondNum == "0") {
    operResult = "No";
    displayResult.textContent = operResult;
  }

  operResult = operate(Number(firstNum), Number(secondNum), operator);
  displayResult.textContent = `= ${operResult}`;
  console.log(operResult);
  equalsSignClicked2 = true;
  fullOper = "";
});

deleteBtn.addEventListener("click", function () {
  fullOper = fullOper.slice(0, -1);
  console.log(fullOper);
  displayOper.textContent = fullOper.replaceAll(" ", "");
});

clearBtn.addEventListener("click", function () {
  displayOper.textContent = "";
  displayResult.textContent = "";
  firstNum = "";
  secondNum = "";
  operator = "";
  fullOper = "";
  operResult = "";
  equalsSignClicked2 = false;
});

//  ---------- Event Listeners ------------ //

themeChangBtn.addEventListener("click", changeTheme);

testNum = "12.34.5.3";
