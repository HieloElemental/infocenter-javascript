const getProducts = async () => {
  const now = Date.now();
  const then = parseInt(localStorage.getItem("required"), 10);

  if (then && now - then < 300000) {
    const localStorageProducts = localStorage.getItem("products");
    if (localStorageProducts) {
      return JSON.parse(localStorageProducts);
    }
  }
  const response = await fetch("https://fakestore.alejandroguti53.repl.co/products");
  const data = await response.json();
  localStorage.setItem("products", JSON.stringify(data));
  localStorage.setItem("required", now.toString());
  return data;
};

export default getProducts;
