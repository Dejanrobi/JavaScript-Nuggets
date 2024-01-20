//FETCH API - Browser API for HTTP (AJAX) requests.
//Default - GET requests, supports other methods also.
//It returns a promise

const url = 'https://www.course-api.com/react-tours-project';

//RETURNING A PROMISE USING FETCH
// console.log(fetch(url));

//USING THEN AND CATCH

fetch(url)
//after using then(), we will invoke the data into json format.
//json returns a promise, we will then output the data from the promise by console log
.then((resp)=>resp.json().then((data)=>console.log(data)))
.catch((err)=>console.log(err))

//WRE-WRITING USING ASYNC-AWAIT

const getTours = async()=>{
  try {
    const resp = await fetch(url);
    //converting the returned promise to json.
    const data = await resp.json();
    //when  await is used while the data is being converted to JSON, no promise is returned, 
    console.log(data);
 
  } catch (error) {
    console.log(error); 
  }
}

getTours();