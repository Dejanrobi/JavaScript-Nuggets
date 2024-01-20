//FROALA: Editor written in javascript.
//Easy to intergrate into your 

//REDUCE
//its the most powerful
//we iterate over an array and then get a callback function. 
//DIFFERENCE WITH OTHER FUNCTIONS: reduces our array to a single value. 
//e.g. number, array, object. (you can return either a number, an array or an object)
//we pass in two parameters. 1st parameter: ('accumulator') - total of all calculations.
//2nd parameter: current value, current iteration.

const staff = [
  {name: 'bob', age:20, position: 'developer', salary: 100},
  {name: 'james', age: 23, position: 'engineer', salary: 200},
  {name: 'peter', age: 34, position: 'hiring manager', salary: 400},
  {name: 'willis', age: 40, position: 'scientist', salary: 300}
]

//accumulator: e.g getting the total of salary
//we return a callback function and the initial value e.g. 0
//we then passs two parameters (accummulator: total of the calculations) and the current iteration, 
//e.g person (iterated array into a single object)
//always return the total

//returning a number using the reduce function
const dailyTotal = staff.reduce((total, person)=>{
  //0: is the initial total value (initializes the total variable)
  //total: adds the salary every time it iterates through an object
  total+=person.salary; 
  return total;
}, 0)

console.log(dailyTotal);
