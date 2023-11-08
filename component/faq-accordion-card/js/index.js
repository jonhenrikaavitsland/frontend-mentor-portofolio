import { listOfQuestionsAndAnswers } from "./data/faq.js";
import { renderHtml } from "./render/renderHtml.js";

renderHtml(listOfQuestionsAndAnswers);

const question1 = document.querySelector(".q-0 h2");
const question2 = document.querySelector(".q-1 h2");
const question3 = document.querySelector(".q-2 h2");
const question4 = document.querySelector(".q-3 h2");
const question5 = document.querySelector(".q-4 h2");

const answer1 = document.querySelector(".q-0 .a");
const answer2 = document.querySelector(".q-1 .a");
const answer3 = document.querySelector(".q-2 .a");
const answer4 = document.querySelector(".q-3 .a");
const answer5 = document.querySelector(".q-4 .a");

const button1 = document.querySelector(".q-0 button");
const button2 = document.querySelector(".q-1 button");
const button3 = document.querySelector(".q-2 button");
const button4 = document.querySelector(".q-3 button");
const button5 = document.querySelector(".q-4 button");

const btnImage1 = document.querySelector(".q-0 button img");
const btnImage2 = document.querySelector(".q-1 button img");
const btnImage3 = document.querySelector(".q-2 button img");
const btnImage4 = document.querySelector(".q-3 button img");
const btnImage5 = document.querySelector(".q-4 button img");

let isActive = [false, false, false, false, false];

function changeH2Active(number) {
  switch (number) {
    case "0":
      question1.style.color = "var(--very-dark-blue)";
      question1.style.fontWeight = "var(--w7)";
      answer1.classList.remove("hidden");
      break;
    case "1":
      question2.style.color = "var(--very-dark-blue)";
      question2.style.fontWeight = "var(--w7)";
      answer2.classList.remove("hidden");
      break;
    case "2":
      question3.style.color = "var(--very-dark-blue)";
      question3.style.fontWeight = "var(--w7)";
      answer3.classList.remove("hidden");
      break;
    case "3":
      question4.style.color = "var(--very-dark-blue)";
      question4.style.fontWeight = "var(--w7)";
      answer4.classList.remove("hidden");
      break;
    case "4":
      question5.style.color = "var(--very-dark-blue)";
      question5.style.fontWeight = "var(--w7)";
      answer5.classList.remove("hidden");
  }
}

// number must be string
function checkIsActive(number) {
  if (isActive[number]) {
    changeH2Active(number);
  }
}

function buttonClick1() {
  if (!isActive[0]) {
    isActive[0] = true;
    checkIsActive("0");
    btnImage1.classList.add("rotate");
  } else if (isActive[0]) {
    isActive[0] = false;
    answer1.classList.add("hidden");
    question1.style.color = "inherit";
    question1.style.fontWeight = "var(--w4)";
    btnImage1.classList.remove("rotate");
  }
}

function buttonClick2() {
  if (!isActive[1]) {
    isActive[1] = true;
    checkIsActive("1");
    btnImage2.classList.add("rotate");
  } else if (isActive[1]) {
    isActive[1] = false;
    answer2.classList.add("hidden");
    question2.style.color = "var(--very-dark-grayish-blue)";
    question2.style.fontWeight = "var(--w4)";
    btnImage2.classList.remove("rotate");
  }
}

function buttonClick3() {
  if (!isActive[2]) {
    isActive[2] = true;
    checkIsActive("2");
    btnImage3.classList.add("rotate");
  } else if (isActive[2]) {
    isActive[2] = false;
    answer3.classList.add("hidden");
    question3.style.color = "var(--very-dark-grayish-blue)";
    question3.style.fontWeight = "var(--w4)";
    btnImage3.classList.remove("rotate");
  }
}

function buttonClick4() {
  if (!isActive[3]) {
    isActive[3] = true;
    checkIsActive("3");
    btnImage4.classList.add("rotate");
  } else if (isActive[3]) {
    isActive[3] = false;
    answer4.classList.add("hidden");
    question4.style.color = "var(--very-dark-grayish-blue)";
    question4.style.fontWeight = "var(--w4)";
    btnImage4.classList.remove("rotate");
  }
}

function buttonClick5() {
  if (!isActive[4]) {
    isActive[4] = true;
    checkIsActive("4");
    btnImage5.classList.add("rotate");
  } else if (isActive[4]) {
    isActive[4] = false;
    answer5.classList.add("hidden");
    question5.style.color = "var(--very-dark-grayish-blue)";
    question5.style.fontWeight = "var(--w4)";
    btnImage5.classList.remove("rotate");
  }
}

button1.addEventListener("click", buttonClick1);
question1.addEventListener("click", buttonClick1);
button2.addEventListener("click", buttonClick2);
question2.addEventListener("click", buttonClick2);
button3.addEventListener("click", buttonClick3);
question3.addEventListener("click", buttonClick3);
button4.addEventListener("click", buttonClick4);
question4.addEventListener("click", buttonClick4);
button5.addEventListener("click", buttonClick5);
question5.addEventListener("click", buttonClick5);

