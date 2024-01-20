//Array includes: checks if an item is in an array
//useful in the conditional statement

const groceries = ['milk', 'bread', 'meat'];

let randomItem = 'milk';

const isIncluded = groceries.includes(randomItem);

if(isIncluded){
  console.log("Yeah it is on the list!!!!")
}
else{
  console.log("No it's not on the list. Please check your entry again!!!")
}
console.log(isIncluded)