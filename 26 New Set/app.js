//Set Object: stores a collection of unique values of any type.

const unique = new Set();

const random = 'peter'

//.add: adds items into the object
unique.add('first');
unique.add('first');
unique.add('first');
unique.add('first');

unique.add('second');
unique.add(random);
unique.add(4);

//it only stores one item because it adds unique values into the object.
console.log(unique);

// //.delete: deletes items from the object
const result = unique.delete('second');
console.log("Second Deleted: ",result);

// //it gives true if the result is deleted and false if it is not.

// //.has : checks whether an item is in the object and returns true or false
const isValue = unique.has(4);
console.log(isValue);

console.log(unique)

// //USING new Set() to get unique items.
const products = [
  {
    title: 'high-back bench',
    company: 'ikea'
  },
  {
    title: 'albany table',
    company: 'marcos'
  },
  {
    title: 'accent chair',
    company: 'caressa'
  },
  {
    title: 'wooden table',
    company: 'ikea'
  }
]


const companies = products.map((item)=>item.company);
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

// //new set returns an object, to make them an array, you need to run them through a spread operator
console.log([...uniqueCompanies]);


// //shorter way
const result2 = ["all", ...new Set(products.map((item)=>item.company))];
console.log("Fast way: ",result2);
