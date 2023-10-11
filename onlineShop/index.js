import getNavbar from "./src/navbar.js";
import normalize from "./src/normalize.js";
import productsListPage from "./src/productsListPage.js";
import startPage from "./src/startPage.js";

const rootElement = document.getElementById("root");
let innerHTML = "";
const styleElement = document.getElementById("style");
let innerCSS = "";

const addElement = (element) => {
  innerHTML += element.html;
  innerCSS += element.css;
};

const loadSite = async () => {
  innerHTML = "";
  innerCSS = "";
  const direction = localStorage.getItem("direction") || "/";
  addElement(await normalize());
  addElement(await getNavbar());
  switch (direction) {
    case "/":
      addElement(await startPage());
      break;
    case "/products":
      addElement(await productsListPage());
  }
  rootElement.innerHTML = innerHTML;
  styleElement.innerHTML = innerCSS;
};

window.addEventListener("localStorageUpdated", function (event) {
  console.log(localStorage.getItem("direction"));
  loadSite();
});

loadSite();
