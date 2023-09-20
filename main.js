const rootElement = document.getElementById("root");
let rootInnerText = "";

const myName = "HieloElemental";
let message = `Hi there! I'm ${myName}`;
rootInnerText += message;

let arrayNumbers = [2, 5, 7, 11, 13, 17];
const searchElementOnArray = (arr, element) => {
  let pos = 0;
  while (pos < arr.length) {
    if (arr[pos] == element) {
      return pos;
    }
    pos++;
  }
  return null;
};
const searchIndexOnArray = (arr, index) => {
  try {
    return arr[index];
  } catch (e) {
    return null;
  }
};
let searchedNumber = 13;
let foundedPosition = searchElementOnArray(arrayNumbers, searchedNumber);
if (foundedPosition) {
  rootInnerText += `\nThe founded item position is: ${foundedPosition}`;
} else {
  rootInnerText += `\nThe element isn't in the array`;
}
let seearchedIndex = 3;
let foundedElement = searchIndexOnArray(arrayNumbers, seearchedIndex);
if (foundedElement) {
  rootInnerText += `\nThe founded element is: ${foundedElement}`;
} else {
  rootInnerText += `\nThe index isn't in the array`;
}

rootElement.innerText = rootInnerText;
console.log(rootInnerText);
