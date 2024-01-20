//CALLBACK HELL

///when you click on the button......
//after 1s first is red
//after 3s second is blue
//after 2s third is green
//IN SEQUENCE!!!


const first  = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

//PROBLEM WITH THE CODE IS THAT IT GETS HARDER AND HARDER TO MANAGE THE CODE
//this is the place where using promises and async await makes our code more readable and easier to manage
btn.addEventListener('click', ()=>{
  // console.log("Hello World");

  colorLoop()
  
  
    
})

const colorLoop=()=>{
  let x = 0;
  while(x<3){

    console.log(x)

    x+=1;
  }
  
}

let x = 0;

  while(x<5){

    await
    console.log("Round: ", x);
    x+=1;
  }



function loopingColors(){
   setTimeout(()=>{
        first.style.color = 'red';
        third.style.color = 'black';

        setTimeout(()=>{
          second.style.color = 'blue';
          first.style.color = 'black';

          setTimeout(()=>{
            third.style.color = 'green';
            second.style.color = 'black';
          },2000)

        },3000)
        
      },1000)


}
//loopingColors();

//setInterval is used to run the function after 1000 milliseconds when the page is opened
setInterval(loopingColors(), 1000);


      


