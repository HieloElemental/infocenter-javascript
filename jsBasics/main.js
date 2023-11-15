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
let searchedIndex = 3;
let foundedElement = searchIndexOnArray(arrayNumbers, searchedIndex);
if (foundedElement) {
  rootInnerText += `\nThe founded element is: ${foundedElement}`;
} else {
  rootInnerText += `\nThe index isn't in the array`;
}

let galaxiesStars = [34, 56, 2, 96, 49];
const countStarts = (galaxiesStarsQuantity) => {
  let count = 0;
  for (let i = 0; i < galaxiesStarsQuantity.length; i++) {
    if (galaxiesStarsQuantity[i] > 0) {
      count++;
    }
  }
  return count;
};
rootInnerText += `\nTotal starts: ${countStarts(galaxiesStars)}`;

let nameList = [
  "Sophie",
  "Maria",
  "Daniel",
  "John",
  "Sebastian",
  "Hanna",
  "Melinda",
];
const sayHiTo = (name) => `Hi ${name}`;
const sayHiToPeople = (names) => {
  let res = "";
  names.forEach((name) => {
    res += `\n${sayHiTo(name)}`;
  });
  return res;
};
rootInnerText += `\nThe names quantity is ${nameList.length}`;
rootInnerText += `${sayHiToPeople(nameList)}`;

rootElement.innerText = rootInnerText;
console.log(rootInnerText);
