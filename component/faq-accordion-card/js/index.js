import { listOfQuestionsAndAnswers } from "./data/faq.js";
import { renderHtml } from "./render/renderHtml.js";

renderHtml(listOfQuestionsAndAnswers);

const question1 = document.querySelector(".q-0 h2");
const question2 = document.querySelector(".q-1 h2");
const question3 = document.querySelector(".q-2 h2");
const question4 = document.querySelector(".q-3 h2");
const question5 = document.querySelector(".q-4 h2");
const allQuestions = document.querySelectorAll(".q h2");

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

const isActive = [false, false, false, false, false];

console.log(question1);

// question1.style.color = "red";

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

checkIsActive("0");
