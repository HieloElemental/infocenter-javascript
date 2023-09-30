const letters = ["a", "b", "c", "d"];
const rootElement = document.getElementById("root");
let rootInnerHTML = "";

const f = function () {
  console.log("Un elemento.");
};
letters.forEach(f);

letters.forEach(function () {
  console.log("Un elemento.");
});

letters.forEach(() => console.log("Un elemento."));

let students = [
  {
    name: "Juan",
    age: 25,
  },
  {
    name: "John",
    age: 30,
  },
  {
    name: "Pablo",
    age: 28,
  },
  {
    name: "Maria",
    age: 29,
  },
  {
    name: "Pedro",
    age: 32,
  },
];

students.forEach((student) => {
  let message = `<p>Hi, my name is ${student.name} and my age is ${student.age}</p>`;
  rootInnerHTML += message;
  console.log(message);
});

rootElement.innerHTML = rootInnerHTML;
