//JavaScript Nuggets
const heading = document.querySelector('.heading');
//console.log(heading);

const listItems = document.querySelectorAll('.list-item')
//console.log(listItems);

//a function to select elements
//you can also check for  a list
const getElement = (selector, isList)=>{
  try {

    if(isList){
      //turning it into an array
      const el = [...document.querySelectorAll(selector)];
      //console.log(el);

      //checking if the elements is lesser than 1: (no element in that list)
      if(el.length < 1){
        throw new Error(`Please double check the selector : ${selector}`)
      }

      return el;
    }
    const el = document.querySelector(selector);
    if(el){
      return el
    }
    else{
      throw new Error(`Please double check the selector : ${selector}`)
    }
      
  } catch (error) {
    console.log(error)
  }
  
}

//console.log(getElement('.heading'));
console.log(getElement('.heading', false));
// List Item
// console.log(getElement('.list-item', true));