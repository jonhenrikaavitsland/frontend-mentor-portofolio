export function renderNotification(data, parent) {
  const notificationHtml = createNotificationHtml(data);
  parent.append(notificationHtml);
}

export function renderNotifications(data, parent) {
  data.forEach(element => {
    renderNotification(element, parent);
  });
}

export function createNotificationHtml(data) {
  const element = document.createElement("div");
  element.classList.add("notification-wrap");

  if (!data.read) {
    element.style.backgroundColor = "var(--snow)";
  }

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("flex", "notifications-image");
  element.append(imageContainer);

  const image = document.createElement("img");
  image.src = data.image;
  image.setAttribute("alt", data.name);
  imageContainer.append(image);

  const notificationContainer = document.createElement("section");
  element.append(notificationContainer);

  const heading = document.createElement("h2");

  const person = document.createElement("span");
  person.textContent = `${data.name} `;
  person.classList.add("notification-name");
  heading.appendChild(person);

  const action = document.createElement("span");
  action.textContent = data.action;
  heading.appendChild(action);

  const target = document.createElement("span");
  target.classList.add("notification-target");
  target.textContent = ` ${data.target} `;

  if (target) heading.appendChild(target);

  if (!data.read) {
    const redDot = document.createElement("img");
    redDot.src = "/pages/notifications-page/assets/images/Oval (1).svg";
    redDot.setAttribute("alt", "unread notification");
    heading.appendChild(redDot);
  }

  notificationContainer.append(heading);

  const time = document.createElement("span");
  time.classList.add("notification-time");

  if (data.time < 60) {
    time.textContent = `${data.time}m ago`;
  } else if (data.time >= 10080 && data.time < 20160) {
    time.textContent = "1 week ago";
  } else if (data.time >= 20160) {
    time.textContent = "2 weeks ago";
  } else if (data.time >= 1440 && data.time < 2880) {
    time.textContent = data.time / 1440 + " day ago";
  } else {
    time.textContent = data.time / 1440 + " days ago";
  }

  notificationContainer.append(time);

  const previewMessageWrap = document.createElement("div");
  previewMessageWrap.classList.add("preview-message-wrap");

  if (data.preview_message) {
    element.append(previewMessageWrap);
  }

  const previewMessage = document.createElement("p");
  previewMessage.textContent = data.preview_message;
  previewMessageWrap.append(previewMessage);

  return element;
}

export function clearParent(parent) {
  parent.innerHTML = "";
}
