//this is a faster way to access, unpack variables from arrays, objects

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1  = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

//Array destructuring
//const [john, peter, bob, anna, kelly] = friends;

//accessing without including other items
const [john, , bob, , kelly] = friends;

console.log(john, bob, kelly);

//swapping variables
let first = 'john';
let second = 'bob';


console.log(first, second);

//coming up with a temporary variable
// let temp = second;
// second = first;
// first = temp;

// console.log(first, second);

//SWAPPING VARIABLES FASTER USING ARRAY DESTRUCTRURING

[second, first]=[first, second];
console.log(first, second);
