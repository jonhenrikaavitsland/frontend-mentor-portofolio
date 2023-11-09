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

export const newData = await getData();


function getReversedData() {
  const reversedData = [];

  for (let i = newData.length - 1; i >= 0; i--) {
    const valueAtIndex = newData[i];

    reversedData.push(valueAtIndex);
  }
  return reversedData;
}

export const reversedData = getReversedData();