import { data } from "./data/fetchData.js";
import { renderHome } from "./render/renderHome.js";

console.log(data);

try {
  renderHome(data);
} catch (error) {
  console.log(error);
}
