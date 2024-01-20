//Promises: the main purpose of using promises is to avoid callback hell

//use promises with async await
 //A promise is an object that returns a value
 //mainly used when setting up the http request because you do not get the request right away

//Setting up the promise
//set the promise, then the callback function, then two arguments:

//Promises can be either pending, rejected or fullfilled.
 const promise = new Promise((resolve, reject)=>{
  //invoking the two functions
  //resolve, passing the data to the application
  //resolve("Hello World");
  reject('there was an error')
 })

 

 //accessing the data
 promise.then((data)=>{
  //when resolve is present, it is passed as data
  console.log(data);

  //when the reject value is present, it is catched as an error and then displayed.
 }).catch((err)=>console.log(err));



 //EXAMPLE PROMISE
 const value = 2;
 const promise2 = new Promise((resolve, reject)=>{
  const randomNo = Math.floor(Math.random()*3);
  console.log(randomNo);

  if(randomNo === value){
    resolve("You guessed correctly");
  }
  else{
    reject("Wrong Number");
  }

 })

 promise2.then((data)=>{
  //when resolve is present, it is passed as data
  console.log(data);

  //when the reject value is present, it is catched as an error and then displayed.
 }).catch((err)=>console.log(err));


 //there was an error is displayed because of line 23 above