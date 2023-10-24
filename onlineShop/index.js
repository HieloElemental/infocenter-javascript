import getNavbar from "./src/components/navbar.js";
import normalize from "./src/util/normalize.js";
import productsListPage from "./src/routes/productsListPage.js";
import item from "./src/routes/item.js";
import cart from "./src/routes/cart.js";
import startPage from "./src/routes/startPage.js";

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
      break;
    case "/item":
      addElement(await item(localStorage.getItem("itemId")));
      break;
    case "/cart":
      addElement(await cart());
  }
  rootElement.innerHTML = innerHTML;
  styleElement.innerHTML = innerCSS;
};

window.addEventListener("localStorageUpdated", function (event) {
  console.log(localStorage.getItem("direction"));
  loadSite();
});

loadSite();
