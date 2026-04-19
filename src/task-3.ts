const usernames: String[] = ["alice", "bob", "charlie"];

const ratings: Number[] = [4.5, 3.8, 5];

interface Product {
    id: Number;
    title: String;
}
const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
