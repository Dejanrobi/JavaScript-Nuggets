//MAP METHOD
//Returns whatever we would want when iterating through an array
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer'
  },
  {
    name: 'peter',
    age: 23,
    position: "product manager"
  },
  {
    name: 'ireen',
    age: 21,
    position: 'pharmacist'
  },
  {
    name: 'james',
    age: 24,
    position: 'Manager'
  }
]

// the map function always returns a new array
//it does not change the size of the original array unlike the filter method
// uses the values from the original array when making a new one


//e.g. grabbing the ages from the people's array
const ages  = people.map((person)=>{
  return person.age;
})
console.log(ages);

//NOTE: the map function returns an array
//Here, it returns objects inside an array.
const newPeople = people.map((item)=>{
  return{
    firstName:item.name.toUpperCase(),
    oldAge:item.age+20
  }
})

console.log(newPeople);

const names = people.map((person)=>{
  return `<p>${person.name}</p>`
})

console.log(names);
console.log(names.join(''))
const result = document.querySelector('.result');
//remove the comas in the array by using the join method and passing the html elements to the innerHtML
result.innerHTML = names.join('');