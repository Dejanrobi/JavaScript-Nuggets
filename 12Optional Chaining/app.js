const people = [
  {
    name: 'bob',
    location: {street: '123 Main Street',
    timezone: {offset: '+7:00'}},

  },
  {
    name: 'peter', location: {street: '123 Pine Street'}
  },
  {
    name: 'susan',
    location: {street: '123 Apple Street',
    timezone: {offset: '+9:00'}
  },
  },
]

people.forEach((person)=>{
  console.log(person.name)
  //An error appears in this code below incase one of chained item is not present
  // console.log(person.location.timezone.offset);

  //First Option
  //checks if the person's location, timezone and offset is present.
  //If all of them are present, the last item (timezone is displayed)
  //If any is missing, we get an output of undefined

  console.log(person.location && person.location.timezone && person.location.timezone.offset);

  //Second option
  //checks if the person, location, timezone is present.
  //If all are present, offset value is displayed, if any is missing, then "hello world is displayed"
  console.log(person?.location?.timezone?.offset || 'hello world');

  //checks if the person, location, timezone is present.
  //If all are present, offset value is displayed, if any is missing, then "undefined is displayed"
  console.log(person?.location?.timezone?.offset);
})

//Displays hello world
console.log(true&&'hello world');

//Displays false
console.log(false&&'hello people');

//Displays true
console.log(true || 'how are you');

//Displays good morning
console.log(false || 'good morning');