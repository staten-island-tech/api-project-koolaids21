// function greet(name){
//     const greetPromise = new Promise(function (resolve, rejected){
//         resolve(`hello ${name}`);
//     });
//     return greetPromise;
// }
// //promise must be handled after we recieve them
// const Katherine = greet("Nuggies");
// nuggies.then((result)=>
//  { console.log(result);
// });
//Rest API
const URL = `https://valorant-api.com/`;

async function getData(URL){
    try {

 const response = await fetch(URL);
    console.log(response);
    if(response.status != 200){
        throw new Error(response.statusText);
    }
    //take response from serevr and converts it to JSON
    const data = await response.json();
    document.querySelector("h1").textContent = data.agent
    document.querySelector("h2").textContent = data.author
    }catch(error){ 
        document.querySelector("h1").textContent = error;
        document.querySelector("h1").textContent = "Please search";

    }
    
}
getData(URL);