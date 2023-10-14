import content from "../components/content.js";
import button from "../components/button.js";
import getProducts from "../util/productsProvider.js";

const item = async (itemId) => {
  let products = await getProducts();
  let productItem = await products.find((product) => product.id == itemId);
  let buttonElement = button(``);
  console.log(productItem);
  let contentElement = content(`
    <h1>${productItem.title}</h1>
    <div class="half-half">
      <img src="${productItem.image}"/>
      <div class="info">
        <h3>Descripción</h3><p>${productItem.description}</p>
        <br>
        <h3>Categoría</h3><p>${productItem.category}</p>
        <br>
        <h3>Precio</h3><p>${productItem.price}</p>
        <br>
        ${button("Comprar").html}
      </div>
    </div>
  `);

  return {
    html: `<div class="item">${contentElement.html}</div>`,
    css: `
    ${contentElement.css}
    ${buttonElement.css}
    .content {
      min-height: calc(100vh - 60px);
    }

    .item img {
      max-width: 300px;
    }

    .half-half {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    .half-half div {
      padding: 20px;
      max-width: 350px;
      display: inline-block;
    }
    `,
  };
};

export default item;
