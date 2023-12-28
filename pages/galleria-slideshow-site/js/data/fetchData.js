const url = "/pages/galleria-slideshow-site/js/data/api/data.json";
export const data = await fetchData(url);

async function fetchData(url) {
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
