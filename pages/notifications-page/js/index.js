import { data } from "./data/fetchData.js";
import {
  clearParent,
  renderNotifications,
} from "./render/renderNotification.js";

console.log(data);
const notificationsContainer = document.querySelector(
  ".notifications-container"
);

try {
  clearParent(notificationsContainer);
  renderNotifications(data, notificationsContainer);
} catch (error) {
  console.log(error);
}
