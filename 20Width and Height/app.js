//getting the height of a window
console.log('height: ', window.innerHeight);

//getting the widht
console.log('width: ', window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', ()=>{
  const dimension = box.getBoundingClientRect();
  console.log(dimension);
  console.log(dimension.width);

  const{width, height} = dimension;
  console.log("Object's Dimensions: ");
  console.log("Height: ", height);
  console.log("Width: ", width);
})