//for in loop: used if we want to iterate over object properties.
const person = {
  name: 'john',
  age: 25,
  status: 'student'
}

for(const propertyName in person){
  //when looping through an object, the declared variable is always the key
  console.log(`${propertyName} : ${person[propertyName]}`)
}