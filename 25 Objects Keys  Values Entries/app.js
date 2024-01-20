//Three methods to convert objects into arrays
//Objects.keys() - converts property names into array
//Objects.values() - converts property values into array
//Object.entries - converts both

const person = {
  name: 'john',
  age: 25,
  status: 'student'
};

//converting object keys into an array
const keys = Object.keys(person)
console.log(keys);

// //converting object values into an array
const values = Object.values(person)
console.log(values);

// //converting both the values  and the names into an array
const entries = Object.entries(person);
console.log(entries);

// //making the entries a single array

// //iterating through the entries
const result = entries.map((item)=>{
  console.log(item);

  //destructuring the arrays
  const [first, second] = item;
  console.log(first, second);
  //returns a new array where each returned item is pushed to the  new array.
   return first;
})

console.log(result);

// //for of
for(const item of entries){
  const [first, second] = item;
  console.log(`${first} : ${second}`)
}