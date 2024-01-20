//from - returns an array object from an object
//it turns array like/ish into an array. (e.g. string, nodeList, Set)
//USE THE BROWSER CONSOLE TO CHECK THE CONSOLE OUTPUT

const oranges = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oranges.length);

const udemy = 'udemy';

console.log(Array.from(udemy));

const text = document.querySelectorAll('.text');
// Check the console display using the web browser console
console.log(text);

const newText = Array.from(text).find((item)=>item.textContent === 'person');
console.log(newText.textContent);

//Getting the textContent of each text element
const newTextContent = Array.from(text).reduce((finalItems, item)=>{
    finalItems.push(item.textContent);
    return finalItems;

},[])

console.log(newTextContent);


// //creating a pagination
//we can also pass a callback function

//creating an array with 120 numbers
const items = Array.from({length:120},(_,index)=>{
  return index;
})
console.log(items)

// //coming up with how many items per page do we want

const itemsPerPage = 14;

//Finding the number of pages that can display  the items
//Math.ceil: converts the number of pages to a whole number
const pages = Math.ceil(items.length/itemsPerPage);
console.log(pages)


//MUST USE Array.from() when using the index function
//it loops through the indexes and for each it returns the stated item passed into the created array
//until the last index

//grabbing the items to be placed in each page
const newItems = Array.from({length:pages},(_,index)=>{
  //to get the item to be placed on each page, we multiply the page number by the number of items to be placed
  //e.g. 0*14=0(start) then 0+14=14 (end), 1*14=14(start) then 14+14=28(end)

  const start = index * itemsPerPage;
  //slicing items from the first array.
  const tempItems = items.slice(start, start + itemsPerPage);
  //first index: 0
  //start slice will be: 0 * 14 = 0
  //end slice will be: start + no of items per page

  //second index: 1
  //start slice will be: 1*14 = 14
  //end slice will be: 14 + 14 = 28

  //and so forth and so forth until the index reaches the length of pages as stated above (length of the index is 9:)
  //which is: 0, 1, 2, 3, 4, 5, 6, 7, 8 hence length: 9 because indexes do start at 0
  return tempItems;
  //the result are arrays inside other arrays.

  
})

console.log(newItems);

//Displaying an array with indexes of length 6
const james = Array.from({length:6}, (_,index)=>{
  return index;
});
console.log(james)