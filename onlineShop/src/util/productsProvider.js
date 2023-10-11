const getProducts = async () => {
  let products = await fetch("https://fakestoreapi.com/products");
  let data = products.json();
  return data;
};

export default getProducts;
