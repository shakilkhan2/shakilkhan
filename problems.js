export const product = [
  { name: "IPhone 11", price: 90000, quantity: 1 },
  { name: "IPhone 11 Pro", price: 100000, quantity: 1 },
  { name: "IPhone 12", price: 105000, quantity: 1 },
  { name: "IPhone 12 Pro", price: "110000", quantity: 1 },
  { name: "IPhone 13", price: 120000, quantity: 1 },
  { name: "IPhone 13 Pro", price: 130000, quantity: 1 },
  { name: "IPhone 14", price: 140000, quantity: 1 },
  { name: "IPhone 14 Pro", price: 160000, quantity: 1 },
];

// Problem 1: Sum all the price
// Write here
const totalPrice = product.reduce((total, curVal) => {
  return total + parseFloat(curVal.price);
}, 0);

console.log(totalPrice);

// Problem 2: Add One extra field called "stock"
// Write here
product.forEach((element) => {
    element.stock = 10;
  });
console.log(product)