//Spread Operator ...
//Allows and iterable to spread / expand individually inside receiver
//Split into single item and copy them

//Spread: splits items in an array
//Rest: displays the rest item in an array after picking a few of the items(destructures items)

const udemy = "Udemy";

//getting udemy letters
const letters = [...udemy];
console.log(letters);

//Arrays
const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [boys, girls, bestFriend];
console.log(friends);

//we want to setup a flat array

const friends2 = [...boys, ...girls, bestFriend];
console.log(friends2);


// //making changes to a new array without altering the initial one

const newFriends = [...friends2];
newFriends[0] = 'nancy';
newFriends[1] = 'james';

// //New Array
console.log("New Array: ", newFriends);
// //Initial Array
console.log("Initial Array:", friends2);

// //Objects
const person = {name:'john', job:'developer'};

const newPerson = {...person, city:'chicago', district:'migori', name:'peter'};

console.log("Person: ",person);
console.log("New Person: ",newPerson);