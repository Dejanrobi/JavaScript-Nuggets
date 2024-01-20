//Getting only unique values from an array using ES6

const menu = [
  {
    name: 'pancakes',
    category: 'breakfast'
  },
  {
    name: 'burger',
    category: 'lunch'
  },
  {
    name: 'steak',
    category: 'dinner'
  },
  {
    name: 'bacon',
    category: 'breakfast'
  },
  {
    name: 'egg',
    category: 'breakfast'
  },
  {
    name: 'pasta',
    category: 'dinner'
  }
]


const categories = menu.map((item)=>item.category)
console.log(categories);

//we only need to get unique categories
//we use the set data structure to return only unique categories
const categories2 = new Set(menu.map((item)=> item.category));
console.log(categories2);

//turning it into an array using the spread operator
const categories3 = [...new Set(menu.map((item)=> item.category))];
console.log(categories3);

//adding an element to the start of the array
const categories4 = ['all', ...new Set(menu.map((item)=> item.category))];
console.log(categories4);

//iterating through the array and returning a button
const result = document.querySelector('.result');
// const buttons = categories4.map((category)=> `<button>${category}</button>`);

result.innerHTML = (categories4.map((category)=>{
  return `<button>${category}</button>`;
})).join('');