//this is a faster and easier way to access /unpack varibles from an object
const bob = {
  first:'bob',
  last: 'sanders',
  city: 'chicago',
  siblings:{
    sister: 'jane',
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

//console.log(firstName, lastName, sister);

//array destructuring
//const {first, last, city} = bob

//The order of array destructuring does not matter. you will still get the same output.
//This is not so in arrays
const {last, first, city, siblings, siblings:{sister}} = bob
console.log(first, last, city, sister);
//printing the siblings object
console.log(siblings)

//whatever property you are looking for must be in that object or else you will get the value of undefined.

function printPerson(person){
  const {first, last} = person;

  console.log(first, last);
}

printPerson(bob)