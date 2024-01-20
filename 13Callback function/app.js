//Call back function -  is a function that we pass in as an argument
function makeUpperCase(value){
  console.log(value.toUpperCase());
}

makeUpperCase('peter');

function handleName(name, cb){
  const fullName = `${name} smith`
  

  //MORE LOGIC
  cb(fullName)
  
}

handleName('lawrence', makeUpperCase);
handleName('james', makeUpperCase);

//reversing a string
function reverseString(value){
  console.log(value.split('').reverse().join(''));
}

handleName('james', reverseString);

handleName('Susan', (value)=>{console.log(value)})

//EVENT LISTENERS
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
  console.log('hello world')
}
)