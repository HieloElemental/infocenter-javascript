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
          ${cartItems.map((cartItem, i) => {
            const product = products.find(
              (product) => product.id === cartItem.productId
            );
            return `<li class= "cart-item">
            <img class="cart-item-img" src="${product.image}">
            <div class="cart-item-info">
              <h4>${product.title}</h4>
              <p>${product.description}</p>
            </div>
            <div class="amount">
              <h5>Cantidad a comprar</h5>
              <p>${cartItem.amount}</p>
              <div>
                <button onClick='addItem(${i}, true)'>-</button>
                <button onClick='addItem(${i}, false)'>+</button>
                <button onClick='removeProduct(${i})'>%</button>
              </div>
            </div>
            <div class="amount">
              <h5>Precio</h5>
              <p>${cartItem.amount * product.price}</p>
            </div>
            </li>`;
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
    }
    .cart-item {
      display: flex;
      gap: 20px;
      height: 70px;
    }
    .cart-item-info {
      width: 250px;
    }
    .cart-item-info p {
      --max-lines: 3;
      line-height: 13px;
      font-size: 12px;
      position: relative;
      max-height: calc(13px * var(--max-lines));
      overflow: hidden;
      padding-right: 1rem;
    }
    .cart-item-info p::before {
      position: absolute;
      content: "...";
      bottom: 0;
      right: 0;
    }
    .cart-item-info p::after {
      content: "...";
      position: absolute;
      right: 0;
      width: 1rem;
      height: 1rem;
      background: white;
    }
    .cart-item .amount,
    .cart-item .value {
      text-align: center;
      width: 60px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .cart-item .amount button {
      border-radius: 5px;
      padding: 0 5px;
      margin: 0 2px;
      border: 1px solid white;
      background: transparent;
      color: white;
    }
    .cart-item-img {
      height: 60px;
      width: 60px;
      object-fit: cover;
    }`,
  };
};

export default cart;
