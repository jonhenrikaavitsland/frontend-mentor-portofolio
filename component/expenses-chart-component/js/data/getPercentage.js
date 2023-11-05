import { data } from "./data.js";

export function getSizeOfBars() {
  const amounts = [];
  for (let i = 0; i < data.length; i++) {
    const amount = data[i].amount * 2.864782276546982; //divided 150px on wednesdays amount.
    amounts.push(amount);
  }
  return amounts;
}
