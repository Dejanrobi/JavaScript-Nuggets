// //TIMESTAMPS
// console.log("New Date:", new Date);

// //Unix Time: the amount of time lapse since midnight, January first since 1970. 
// //Its measured in milliseconds. One second consists of 1000 milliseconds

// // //Date Now
// console.log("Now Date", Date.now());

// // new Date().getTime()
// console.log("Get Time:",new Date().getTime())

// // //new Date().valueOf()
// console.log("Value of Date:",new Date().valueOf())

// setTimeout(()=>{
//   console.log("Now Date after 3 seconds: ",Date.now());
// },3000);


// // //Creating Id's in Learning Apps
// let nowDate = Date.now();
// let personsName = "james";
// let personsID = nowDate + personsName;

// console.log("Person ID: ",personsID); 
// let people = [];
// people = [...people, {id:Date.now(), name: 'peter'}]

// setTimeout(()=>{
//   people = [...people, {id:Date.now(), name: 'john'}]
//   console.log(people);
// },1000)


// //creating dates

console.log("CREATING DATES");
console.log(new Date(1663020449042));

// //setting an expiry date
const now = Date.now();

////Date.now: gives the date in milliseconds
console.log(now);
// //add the now time + timestamps(1000* 60) = 1 minute
const futureDate = new Date(now + 1000*60)

console.log(futureDate);
console.log(new Date());

// //new Date(): gives the full date

// //Differences in Dates
const firstDate = new Date();

// //sep 28th 2022
// //when it comes to javascript, the month is 0 based hence 8 for 9(sep).
const secondDate = new Date(2022, 8, 28);

// //getting the Time in milliseconds
const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log("First Value: ",firstValue)
console.log("Second Value: ",secondValue)

// //Getting the difference
const timeDifference = firstValue - secondValue;
console.log(timeDifference);

// //calculating the amount of minutes between the two dates
const minutes = timeDifference/(1000*60);
console.log("Difference in Minutes: ",minutes);

const hours = timeDifference/(1000*60*60);
console.log("Difference in Hours: ",hours);

//Difference in Days
//1 day = 24 hours
const days = hours/24
console.log("Difference in Days: ", days);

//Difference in Months
//1 month = 30 Days
const months = days/30
console.log("Difference in months: ", months);