const rootElement = document.getElementById("root");
let rootElementInnerHTML = "";

let arrayOfThings = ["a", "b", "c", "d", "e", "f", "g"];
const getLastElement = (array) => {
  return { data: array.pop(), index: array.length };
};

const displayArray = (array) => {
  rootElementInnerHTML += "<ul>";
  array.map((element, index) => {
    rootElementInnerHTML += `<li>${index}: ${element}</li>`;
  });
  rootElementInnerHTML += "</ul>";
};

const lastElement = getLastElement(arrayOfThings);
rootElementInnerHTML += `<p>The last element of the array was: <b>${lastElement.data}</b> at the index of: <b>${lastElement.index}</b></p>`;

displayArray(arrayOfThings);

rootElement.innerHTML = rootElementInnerHTML;
