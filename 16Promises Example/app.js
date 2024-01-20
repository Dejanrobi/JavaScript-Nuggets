//first: turns red in 1s
//second: turns blue in 3s
//third: turns green in 2s

const btn = document.querySelector('.btn');

btn.addEventListener('click', async ()=>{
  // console.log("Hello World")
 await addColor(1000,'.first', 'red')
 .then((data)=>{
  console.log(data)
  addColor(3000, '.second', 'blue'); 
 }).then((data)=>{
  console.log(data)
  addColor(2000, '.third', 'green')
 }).then((data)=>{
  console.log(data)
 }).catch((error)=>console.log(error))
})



function addColor(time, selector, color){
  // console.log("Add Color")

  const element = document.querySelector(selector);

  return new Promise((resolve,reject)=>{
    if(element){
      setTimeout(()=>{
        element.style.color = color;
      },time);
      resolve(`The Element ${selector} color was changed to ${color}`);

    }
    else{
      reject(`There is no such element: ${selector}`)
    }

  })

  
}