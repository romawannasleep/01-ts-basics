interface Product {
    id:  Number;
    title: String;
    description?: String;
}
const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
