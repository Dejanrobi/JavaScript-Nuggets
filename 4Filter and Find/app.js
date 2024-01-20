//Fusion charts: a javascript library that allows you to create 
//interactive charts for mobile and web applications.
//Can be Intergrated into your choice framework (fusioncharts.com)

const people = [
  {name:'bob', age:20, position: 'developer'},
  {name: 'peter', age: 25, position: 'engineer'}, 
  {name: 'peter', age: 34, position: 'doctor'}, 
  {name: 'james', age: 30, position: 'product manager'},
  {name: 'ireen', age: 35, position: 'pharmacist'},
  {name: 'Dejan', age: 20, position: 'developer'}
];

//filter: returns a new array. Can manipulate the size of the new array. 
//Returns based on the condition.
//Find: returns a single instance (object), returns the first match, 
//if no match then its undefined.

//FILTER
const youngPeople = people.filter((person)=>{
  // if(person.age < 30){
  //   return person;
  // }

  //short form
  return person.age <30;
})

//People Below the age of 30
console.log(youngPeople);

const developers = people.filter((person)=>person.position === 'developer');

//People who are developers
console.log(developers);

//No Match
const seniorDeves  = people.filter((person)=> person.position === 'senior devs');
console.log(seniorDeves);
//no match: an empty array is returned


//USING FILTER
const peterObj = people.filter((person)=> person.name === 'peter');
console.log(peterObj);

//FIND
//Returns the first instance of the object that matches the condition
const peter = people.find((person)=> person.name === 'peter');
console.log(peter);

//no match
const oldPerson = people.find((person)=>person.age>35);
console.log(oldPerson);
//no match:undefined is returned

//first match
const randomPerson = people.find((person)=>person.age>28);
console.log(randomPerson);