// import { cartContent } from "./../index.js";
// import { products } from "./../Products/products.js";

// export function createCartHtml() {
//   cartContent.innerHTML = "";

//   const localItem = localStorage.getItem("item");
//   const localAmount = localStorage.getItem("amount");
//   const localPrice = localStorage.getItem("price");

//   const element = document.createElement("div");

//   const childContainer1 = document.createElement("div");
//   element.append(childContainer1);

//   const childContainer2 = document.querySelector("div");
//   element.append(childContainer2);

//   const childContainer3 = document.createElement("div");
//   element.append(childContainer3);

//   const thumbnail = document.createElement("img");
//   thumbnail.src = `${products[0].thumbnail}`;
//   thumbnail.setAttribute("alt", `the shoes displayed elegantly`);
//   childContainer1.append(thumbnail);

//   const childTextContainer = document.createElement("div");
//   childContainer2.append(childTextContainer);

//   const childPriceContainer = document.createElement("div");
//   childContainer2.append(childPriceContainer);

//   const trash = document.createElement("img");
//   trash.src = "./images/icon-delete.svg";
//   trash.setAttribute("alt", "click to empty cart");
//   childContainer3.append(trash);

//   const title = document.createElement("span");
//   title.textContent = `${localItem}`;
//   childTextContainer.append(title);

//   const price = document.createElement("span");
//   price.textContent = `$ ${localPrice} x ${localAmount}`;
//   childPriceContainer.append(price);

//   const total = document.createElement("span");
//   total.textContent = `$ ${localPrice * localAmount}`;
//   childPriceContainer.append(total);

//   return element;
// }
