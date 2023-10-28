const getProducts = async () => {
  let localStorageProducts = await localStorage.getItem("products");
  if (!localStorageProducts) {
    let products = await fetch("fakestore.alejandroguti53.repl.co/products");
    let data = await products.json();
    localStorage.setItem("products", JSON.stringify(data));
    return data;
  }
  return JSON.parse(localStorageProducts);
};

export default getProducts;
