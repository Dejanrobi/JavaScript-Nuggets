//ADDING OBJECT KEYS DYNAMICALLY USING SQUARE BRACKETS NOTATIONS.

//using the dot notation
const person = {
  name: 'james',
}

//creating the age value
person.age = 25;
console.log(person);

//you can access a value using the object and the key.
console.log(person.name);

//using the square bracket notation

//example1
const items = {
  'featured-items':['item1', 'item2']
}

//accessing using the square brackets
console.log(items['featured-items']);
console.log(person['name']);

//creating keys and values dynamically
let appState = 'loading';
const keyName = 'computer';
const name = 'peter';

const app={
}

//the keyname will be the value of the appState.
console.log("App: ",app);

//adding a new key to the app object
app[keyName] = 'apple';
app[appState] = true;

if(app[name]){
  app[name] = 10;
}

else{
  app[name] = 2;
}

console.log(app);


const state = {
  loading: true,
  name: '',
  job: ''
}

function updateState(key, value){
  state[key] = value;
}

updateState('name', 'james');
updateState('job', 'Software Engineer');
updateState('products', []);
updateState('name', 'peter');
console.log(state);