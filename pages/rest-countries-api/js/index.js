async function getData() {
  try {
    const response = await fetch("./api/data.json");
    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error as needed
  }
}

const newData = await getData();
console.log(newData);
