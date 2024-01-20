//Rest Operator gathers or collects the items
//Use cases: when destructuring, when we are sending them to functions.
//Rest - we talk about function declaration. Spread -  we talk about when we invoke the function.


//Arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
//using the rest operator (displays the rest items as an array)
const [first, second, ...rest] = fruits;

console.log(first,second, rest);

const specificFruits = rest.find((fruit)=>fruit === 'lemon');
console.log(specificFruits);

//the array gets more smaller as you destructure the items

//Objects
const person = {
  name: 'john',
  lastName: 'smith',
  job: 'developer'
}

const {name} = person;

const {job, ...restObjects} = person;
console.log(job, restObjects);
console.log(name);

//Functions
const getAverage = (name, ...scores)=>{
  console.log(name);
  console.log(scores);

  //calculating the Average
  const average = scores.reduce((total, item)=>{
    return total += item;
  },0)/scores.length;

  console.log(average)

  //getting the total
  let total = 0;
  for (let i in scores){
    total+=scores[i];
  }
  console.log(total);

  let mean = total/scores.length;
  console.log(mean)
}

getAverage(person.name, 89,93, 39, 80, 87);

