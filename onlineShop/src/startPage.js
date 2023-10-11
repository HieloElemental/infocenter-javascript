import titles from "./titles.js";
import content from "./content.js";
import card from "./card.js";

const startPage = () => {
  let titlesElement = titles("OnlineShop", "Tu tienda, mi tienda");
  let cardElement = card(`
  <h1>Bienvenido a OnlineShop</h1>
      <p>
        OnlineShop es tu destino de compras en línea definitivo. 
        Nuestra tienda virtual ofrece una amplia gama de productos 
        y servicios para satisfacer tus necesidades y deseos. Ya 
        sea que estés buscando moda de última tendencia, 
        electrónica de vanguardia, productos para el hogar, 
        belleza, o cualquier otra cosa, en OnlineShop lo tenemos 
        todo.
      <p>
      </p>
        Nuestra plataforma te brinda la comodidad de comprar desde 
        la comodidad de tu hogar o cualquier lugar con acceso a 
        internet. Explora nuestro catálogo cuidadosamente 
        seleccionado, que incluye productos de alta calidad de las 
        mejores marcas y vendedores confiables. Navega a través de 
        una experiencia de compra intuitiva y segura que te permite 
        encontrar exactamente lo que necesitas.
      <p>
      </p>
        En OnlineShop, nos enorgullece ofrecer un excelente 
        servicio al cliente. Nuestro equipo de atención al cliente 
        está siempre dispuesto a ayudarte con cualquier pregunta o 
        inquietud que puedas tener. Además, ofrecemos opciones de 
        envío rápido y seguro para que puedas recibir tus compras 
        de manera eficiente.
      <p>
      </p>
        No importa si estás buscando regalos especiales, artículos 
        de uso diario o simplemente deseas consentirte a ti mismo, 
        OnlineShop es tu destino para encontrar lo que necesitas. 
        Explora nuestro sitio web hoy mismo y descubre la conveniencia 
        y la diversidad de productos que ofrecemos. ¡Bienvenido a 
        OnlineShop, donde las compras en línea se vuelven una 
        experiencia emocionante y satisfactoria!
      </p>
  `);
  let contentElement = content(
    `
    ${cardElement.html}
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
    `,
  };
};

export default startPage;
