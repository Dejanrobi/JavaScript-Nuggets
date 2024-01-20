//String includes(): checks whether a string contains another string.
//Useful if you want to setup some search functionality based on text.

const products = [
  { title: 'Modern poster'},
  { title: 'Bar Stool'},
  { title: 'Armchair'},
  { title: 'Leather Chair'}

];


const text = 'm';
const finalText  = text.toLowerCase();
const filteredProducts = products.filter((product)=>product.title.toLowerCase().includes(finalText));
console.log("Filtered products: ",filteredProducts);

const finalProducts = filteredProducts.map((item)=>item.title);
console.log(finalProducts);



const firstName = "john";

const result = firstName.includes('J');
console.log(result);

const product = {
  title: 'Leather Chair'
};

const result2  = product.title.includes('le');

console.log(result2);



