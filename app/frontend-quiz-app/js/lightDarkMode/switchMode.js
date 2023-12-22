export function switchMode() {
  const bodyParent = document.querySelector("body");
  const theBtn = document.querySelector(".day-night-btn-outer-wrap");
  const switchBtn = document.querySelector(".day-night-btn");
  const sunImage = document.querySelector(".sun-wrap img");
  const moonImage = document.querySelector(".moon-wrap img");
  const italicText = document.querySelector(".italic");

  theBtn.addEventListener("click", function () {
    const subjectContainers = document.querySelectorAll(
      ".quiz-container-home section"
    );
    if (switchBtn.style.justifyContent !== "flex-end") {
      switchBtn.style.justifyContent = "flex-end";
      bodyParent.style.backgroundColor = "var(--dark-navy)";
      bodyParent.style.color = "var(--pure-white)";
      sunImage.src = "/app/frontend-quiz-app/assets/images/icon-sun-light.svg";
      moonImage.src =
        "/app/frontend-quiz-app/assets/images/icon-moon-light.svg";
      italicText.style.color = "var(--light-bluish)";
      bodyParent.style.backgroundImage =
        "url(/app/frontend-quiz-app/assets/images/pattern-background-mobile-dark.svg)";
      subjectContainers.forEach(container => {
        container.style.backgroundColor = "var(--navy)";
      });
    } else {
      switchBtn.style.justifyContent = "flex-start";
      bodyParent.style.backgroundColor = "var(--light-gray)";
      bodyParent.style.color = "var(--dark-navy)";
      sunImage.src = "/app/frontend-quiz-app/assets/images/icon-sun-dark.svg";
      moonImage.src = "/app/frontend-quiz-app/assets/images/icon-moon-dark.svg";
      italicText.style.color = "var(--grey-navy)";
      bodyParent.style.backgroundImage =
        "url(/app/frontend-quiz-app/assets/images/pattern-background-mobile-light.svg)";
      subjectContainers.forEach(container => {
        container.style.backgroundColor = "var(--pure-white)";
      });
    }
  });
}
