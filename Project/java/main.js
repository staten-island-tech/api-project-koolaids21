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

const DOMSELECTORS = {
  agent: document.getElementById("agent"),
  Duelist: document.getElementById("Duelist"),
  column: document.querySelector(".column"),
  searchBtn: document.querySelector(".searchBtn"),
};

const apiURL = "https://valorant-api.com/v1/agents";

console.log(fetch(apiURL));

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    getData(data.data);
  })
  .catch((error) => console.error("error fetching data do someelse:", error));

async function getData(agents) {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data.data);
    insertCard(data.data);
  } catch (error) {
    console.error("error processing data do someelse:", error);
  }
}

function insertCard(arr) {
  arr.forEach((agent) => {
    DOMSELECTORS.agent.insertAdjacentHTML(
      "beforeend",
      `<div class="container">
        
          <h1 class="name">${agent.displayName}</h1>
          <img src="${agent.displayIconSmall}" alt="">
          <h2 class="name">${agent.description}</h2>
        </div>`
    );
  });
}

// DOMSELECTORS.Duelist.addEventListener("click", () => {
//   const duelist = apiURL.filter((x) => x.role.displayName.includes("Duelist"));
//   DOMSELECTORS.agent.insertAdjacentHTML("beforeend", duelist.Join(""));
// });

DOMSELECTORS.searchBtn.addEventListener("click", function () {
  const agentName = prompt("Enter agent name:");
  if (agentName) {
    const filteredAgents = data.data.filter(
      (agent) => agent.displayName.toLowerCase() === agentName.toLowerCase()
    );
    DOMSELECTORS.column.innerHTML = "";
    insertCard(filteredAgents);
  }
});
