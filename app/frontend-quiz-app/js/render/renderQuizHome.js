import { quizData } from "../data/fetch/fetchQuiz.js";

const parentContainer = document.querySelector(".quiz-container-home");

export function renderQuizHome() {
  console.log(quizData);
  for (let i = 0; i < quizData.quizzes.length; i++) {
    const element = document.createElement("section");
    element.classList.add("flex", `subject-${[i + 1]}`);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("flex", "quiz-img-wrap-home");
    element.append(imageContainer);

    const image = document.createElement("img");
    switch (quizData.quizzes[i].title.toLowerCase()) {
      case "html":
        image.src = "/app/frontend-quiz-app/assets/images/icon-html.svg";
        image.setAttribute("alt", "html");
        imageContainer.append(image);
        break;
      case "css":
        image.src = "/app/frontend-quiz-app/assets/images/icon-css.svg";
        image.setAttribute("alt", "css");
        imageContainer.append(image);
        break;
      case "javascript":
        image.src = "/app/frontend-quiz-app/assets/images/icon-js.svg";
        image.setAttribute("alt", "javascript");
        imageContainer.append(image);
        break;
      case "accessibility":
        image.src =
          "/app/frontend-quiz-app/assets/images/icon-accessibility.svg";
        image.setAttribute("alt", "accessibility");
        imageContainer.append(image);
    }

    const subjectHeading = document.createElement("h2");
    subjectHeading.textContent = quizData.quizzes[i].title;
    element.append(subjectHeading);

    parentContainer.append(element);
  }
}

// Add code to add background color on images
