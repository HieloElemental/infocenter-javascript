const navbarElement = document.getElementById("navbar");

let isHidden = false;
let isOnTop = false;

const openHandler = () => {
  isHidden
    ? navbarElement.classList.remove("nav-opened")
    : navbarElement.classList.add("nav-opened");
  isHidden = !isHidden;
};

const isOnTopHandler = () => {
  window.scrollY > 300
    ? navbarElement.classList.remove("nav-on-top")
    : navbarElement.classList.add("nav-on-top");
};

window.addEventListener("scroll", isOnTopHandler);
window.addEventListener("load", isOnTopHandler);
