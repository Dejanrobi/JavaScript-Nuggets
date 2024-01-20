//Async await: only used if your function is async
//it always returns a promise

// const example = async()=>{
//   return "Hello World";
// }

// //console.log(example())

// async function someFunc(){
//   const result = await example();
//   console.log(result);
//   console.log("Hello People")
// }

// someFunc();

const users = [
  {id: 1, name:'john'},
  {id: 2, name: 'susan'},
  {id: 3, name: 'anna'},
  {id: 4, name: 'peter'}
]

const articles = [
  {userId:1, articles:['one', 'two', 'three']},
  {userId:2, articles:['four', 'five']},
  {userId:3, articles:['six', 'seven', 'eight', 'nine']},
  {userId:4}
]

function getUser(name){
  return new Promise((resolve, reject)=>{
    const user = users.find((user)=>user.name === name);

    if(user){
      resolve(user)
    }
    else{
      reject(`No such user with the name: ${name}`)
    }
  })
}

function getArticles(userId){
  return new Promise((resolve, reject)=>{
    const userArticles = articles.find((article)=>  article.userId ===userId)

    if(userArticles.articles){
      resolve(userArticles.articles);
    }
    else{
      reject(`The Id:${userId} does not have any articles`)
    }
  })
}

// getUser('john')
// .then((user)=>{
//   console.log(user)
//   getArticles(user.id).then((article)=>console.log(article))
// }).catch((err)=>console.log(err))

//USING ASYNC AWAIT
const getData = async()=>{
  //catching the errors using the try catch block
  try {

    //present
    const user = await getUser('anna');

    //articles not present 
    // const user = await getUser('peter');

    // name not present
    // const user = await getUser('james');
    console.log(user);

    //checking whether the user exists and then retrieving the article
    if(user){
      const articles = await getArticles(user.id)
      console.log(articles);
    }
    
  } catch (error) {
    console.log(error);
  }
  
}
getData();
