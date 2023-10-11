const navbarLinks = [
  { displayName: "Inico", href: "/" },
  { displayName: "Productos", href: "/products" },
  { displayName: "Carrito", href: "/cart" },
];

const getNavbar = (changeDirection) => {
  return {
    html: `
    <nav>
      <ul>
        <h1>OnlineShop</h1>
      </ul>
      <ul class="links">
        ${navbarLinks
          .map(
            (navbarLink) =>
              `
              <li>
                <div onclick="setDirection('${navbarLink.href}')">${navbarLink.displayName}</div></li>`
          )
          .join("")}
      </ul>
    </nav>
    `,
    css: `
      nav {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: 0;
        left: 0;
        position: fixed;
        background-color: #222;
        color: #eee;
        box-shadow: 0 0 30px 1px #000;
      }

      nav ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
      }
      
      nav ul.links {
        justify-content: flex-end;
        padding-right: 20px;
      }

      nav ul.links li {
        transition: all 0.2s;
      }

      nav ul.links li:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.1);
      }
      
      nav ul.links li div{
        height: 60px;
        padding: 20px;
      }

      body {
        margin-top: 60px;
      }
    `,
  };
};

export default getNavbar;
