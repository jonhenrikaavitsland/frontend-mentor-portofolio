export function renderHome(data) {
  const parent = document.querySelector(".home");
  for (let i = 0; i < data.length; i++) {
    const element = document.createElement("div");
    element.style.position = "relative";
    element.classList.add("flex");

    const image = document.createElement("img");
    image.src = data[i].images.thumbnail;
    image.setAttribute("alt", data[i].name);
    element.append(image);

    parent.append(element);
  }
}
