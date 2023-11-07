const parentContainer = document.querySelector(".faq-container");

export function renderHtml(data) {
  const heading1 = document.createElement("h1");
  heading1.textContent = "faq";
  parentContainer.append(heading1);

  for (let i = 0; i < data.length; i++) {
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("q", `q-${[i]}`);

    const sectionContainer = document.createElement("section");
    questionContainer.append(sectionContainer);

    const childH2 = document.createElement("h2");
    childH2.textContent = data[i].question;
    sectionContainer.append(childH2);

    const childContainer = document.createElement("div");
    childContainer.classList.add("btn-container");
    sectionContainer.append(childContainer);

    const childButton = document.createElement("button");
    childContainer.append(childButton);

    const childImage = document.createElement("img");
    childImage.setAttribute("src", "./images/icon-arrow-down.svg");
    childImage.setAttribute("alt", "open to answer question");
    childButton.append(childImage);

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("a", "hidden");
    questionContainer.append(answerContainer);

    const childAnswer = document.createElement("p");
    childAnswer.textContent = data[i].answer;
    answerContainer.append(childAnswer);

    parentContainer.append(questionContainer);
  }
}
