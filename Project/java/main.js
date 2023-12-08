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
// const URL = `https://valorant-api.com/v1/agents`;

// async function getData(URL){
//     try {

//  const response = await fetch(URL);
//     console.log(response);
//     if(response.status != 200){
//         throw new Error(response.statusText);
//     }
//     //take response from serevr and converts it to JSON
//     const data = await response.json();
//     document.querySelector("h1").textContent = data.agent
//     }catch(error){ 
//         document.querySelector("h1").textContent = error;
//         document.querySelector("h1").textContent = "Please search";

//     }
    
// }
// getData(URL);



// console.log(fetch('https://valorant-api.com/v1/agents/23')
// .then(res => res.json())
// .then(data => console.log(data))
// )

const apiURL = "https://valorant-api.com/v1/agents";

async function getData(apiURL){
    try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData(apiURL);

const apiResponseDOM = document.getElementById("api-response");
const putintoHTML = async () => {
    const thing = await getData(apiURL);
    apiResponseDOM.textContent = `Name: ${thing.displayName}`;
};
putintoHTML();      

