const url = "/pages/notifications-page/js/data.json";

async function fetchData(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export const data = await fetchData(url);
