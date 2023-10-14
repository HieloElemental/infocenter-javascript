const titles = (title, description) => {
  return {
    html: `<section class="titles">
    <h1>${title}</h1>
    <h2>--${description}--</h2>
  </section>`,
    css: `
  .titles {
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ccc;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("https://m.media-amazon.com/images/I/71aZYiW64vL._AC_UF894,1000_QL80_.jpg") fixed center center/cover;
  }

  .titles h1 {
    font-size: 60px;
    font-weight: bold;
  }

  .titles h2 {
    font-size: 15px;
    letter-spacing: 6px;
    font-weight: 400;
  }
  `,
  };
};

export default titles;
