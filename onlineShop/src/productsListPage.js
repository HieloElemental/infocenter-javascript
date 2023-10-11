import card from "./card.js";
import content from "./content.js";
import titles from "./titles.js";
import getProducts from "./util/productsProvider.js";
import button from "./button.js";

const productsListPage = async () => {
  let titlesElement = titles("OnlineShop", "Productos");
  let cardElement = card(``);
  let buttonElement = button(``);
  let products = await getProducts();
  let contentElement = await content(
    `
    <div class="products">
      <h1>Lista de Productos Disponibles</h1>
      <p>Lista de todos los productos disponibles</p>
      <ul>
        ${products
          .map((product) => {
            return `<li>
            ${
              card(`
              <h1>${product.title}</h1>
              <img src="${product.image}">
              <p>${product.description}</p>
              ${button("Más Información").html}
              `).html
            }</li>
            `;
          })
          .join("")}
      </ul>
    </div>
    `
  );
  return {
    html: `
    ${titlesElement.html}
    ${contentElement.html}
    `,
    css: `
    ${titlesElement.css}
    ${contentElement.css}
    ${cardElement.css}
    ${buttonElement.css}
    .products ul{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      list-style: none;
    }

    .products ul .card {
      margin-bottom: 20px;
      max-width: 300px;
    }

    .products ul .card img {
      width: 100%;
      max-height: 250px;
      object-fit: cover;
    }
    `,
  };
};

export default productsListPage;
