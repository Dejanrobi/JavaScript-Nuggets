
const url = 'https://www.course-api.com/react-tours-project';


const getTours = async () => {
  try {
    const resp = await fetch(url);

    //Checking INCASE OF A NETWORK ERROR (e.g. 404 error);
    if (!resp) {
      const msg = `There was an Error: "${resp.status} ${resp.statusText}"`;
      throw new Error(msg)
    }
    //converting the returned promise to json.
    const data = await resp.json();
    //when  await is used while the data is being converted to JSON, no promise is returned, 
    console.log(data);

  } catch (error) {
    console.log(error);
  }
}

const btn = document.querySelector('.btn');

btn.addEventListener('click', getTours);