import content from "../components/content.js";
import getProducts from "../util/productsProvider.js";

const cart = async () => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  let products = await getProducts();
  let contentElement = content(`
    <h1>Carrito de compras</h1>
    <div>
    ${
      cartItems
        ? `
        <ul>
          ${cartItems.map((cartItem) => {
            return `<li>${products[cartItem.productId].title}</li>`;
          })}
        </ul>
        `
        : `
        No hay productos en el carro
        `
    }
    </div>
  `);

  return {
    html: `<div class="cart">${contentElement.html}</div>`,
    css: `${contentElement.css}
    .content {
      min-height: calc(100vh - 60px);
    }`,
  };
};

export default cart;
