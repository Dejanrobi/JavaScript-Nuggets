//ECMAScript 2022
//at() - it takes an integer and returns an item at that index - string, array.

//Previous ways of getting an item from an array
//e.g. the last item
const scores = [20,21, 34, 50, 65];

//.length gives you exactly the number of items in an array
const oldLast = scores[scores.length - 1];
console.log("Old way: ",oldLast);

// //New Way of getting the last item
const newLast = scores.at(-1);
console.log("New way: ",newLast);

// //Getting from a string
const channel = 'Dejan Robi';
console.log(channel.at(-1))

// //OPTION 1
fetch("https://www.course-api.com/react-tabs-project").then((resp)=>resp.json()).then((data)=>console.log(data))


// //OPTION 2: Changing it to a function
const url = "https://www.course-api.com/react-tabs-project";

const fetchData = async()=>{
  const resp = await fetch(url);
  //console.log(resp);
  const data = await resp.json();
  console.log(data)

}
fetchData();