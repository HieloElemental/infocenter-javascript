const rootElement = document.getElementById("root");
let rootInnerText = "";

const myName = "HieloElemental";
let message = `Hi there! I'm ${myName}`;
rootInnerText += message;

let arrayNumbers = [2, 5, 7, 11, 13, 17];
const searchOnArray = (arr, element) => {
  let pos = 0;
  while (pos < arr.length) {
    if (arr[pos] == element) {
      return pos;
    }
    pos++;
  }
  return null;
};
let searchedNumber = 13;
let foundedPosition = searchOnArray(arrayNumbers, searchedNumber);
if (foundedPosition) {
  rootInnerText += `\nThe founded item position is: ${foundedPosition}`;
} else {
  rootInnerText += `\nThe element isn't in the array`;
}

rootElement.innerText = message;
console.log(message);
