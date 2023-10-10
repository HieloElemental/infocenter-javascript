const rootElement = document.getElementById("root");
let innerHTML = "";

const getProducts = async () => {
  let products = await fetch("https://fakestoreapi.com/products");
  let data = products.json();
  return data;
};

const productCard = (product) => {
  let html = "";
  html += "<div>";
  html += `<h1>${product.title}</h1>`;
  html += `<img src="${product.image}">`;
  html += "</div>";
  console.log(product);
  return html;
};

const showProducts = async () => {
  let products = await getProducts();
  innerHTML += `<ul class="products-list">`;
  await products.map((product) => {
    innerHTML += `<li>${productCard(product)}</li>`;
  });
  innerHTML += `</ul>`;
  rootElement.innerHTML = innerHTML;
};

showProducts();
