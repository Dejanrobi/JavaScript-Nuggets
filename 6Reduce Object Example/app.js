//FUSION CHARTS:  a javascript library which allows you to create interactive charts for web,
// mobile and enterprise applications.
//easily intergrated to your choice front-end or back end frameworks.

//Reduce: objects.

//GETTING THE TOTAL AMOUNT OF ITEMS THAT WE HAVE IN THE CART.
//cart example:

const cart = [
  {
    title: 'Samsung Galaxy S7',
    price: 599.99,
    amount: 1
  },
  {
    title: 'google pixel',
    price: 499.99,
    amount: 2
  },
  {
    title: 'Xiaomi Redmi Note 2',
    price: 699.99,
    amount: 4
  },
  {
    title: 'Xiaomi Redmi Note 5',
    price: 399.99,
    amount: 3
  }
]


// Getting the total amount of items we have in the cart using the reduce function
// const totalCartAmount =  cart.reduce((total, item)=>{
//   total+=item.amount;
//   return total;

// },0)

// console.log(totalCartAmount)

// //RETURNING AN OBJECT USING THE REDUCE FUNCTION THEN DESTRUCTURING IT
// //setup the accumulator and the current iteration

// // //destructuring the returned values from the total
let {totalItems, cartTotal} = cart.reduce((total, cartItem)=>{
  //destructuring two items from the cartItem
  const {amount, price} = cartItem;

  //counting the number of items
  total.totalItems +=amount;

  //cartTotal: we will be multiplying the amount of items times the price
  total.cartTotal += amount*price;

  
  //Returning the total object with the totalItems and cartTotal
  return total
},{
  //returning an object with two properties
  //setting the initial value of each value
  totalItems:0,
  cartTotal:0
})


//SAME AS ABOVE: JUST A REPETITION TO REMIND MYSELF
// let totalObject = cart.reduce((total, cartItem)=>{
//   const { price, amount } = cartItem;

//   //total number of items in the cart
//   total.totalItems += amount;

//   //cart total price
//   total.cartTotal += price * amount;

//   //returning the total object
//   return total;

// },{
//   totalItems: 0,
//   cartTotal: 0
// })

// //destructing the total Object
// let { totalItems, cartTotal } = totalObject
// console.log(totalItems)
// console.log(cartTotal.toFixed(2))
// console.log(totalObject)

// //console.log(total);
// console.log(totalItems);
// console.log(cartTotal);

// //converting the cartTotal to two  decimal points
// cartTotal = parseFloat(cartTotal.toFixed(2));
// console.log(cartTotal);

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

// //fetching the data from the api

const fetchRepos = async()=>{
  //process to fetch data from a URL
  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);

  const newData = data.reduce((total, repo)=>{

    //checking the number of languages
    const {language} = repo;

    //checking if total has language  and if not
 
    //checks if a language exists in the destructured object
    //if it does, it ads one to the total object.
    //if there is no such language in the total object, it sets the language as the KeyName and its value to 1.
    if(language){
      total[language] = total[language]+1 || 1;
      //T / F
    }

    //always return the accumulator
    return total;
  },{})

  console.log(newData);
}

fetchRepos();