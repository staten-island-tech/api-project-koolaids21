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

DOMSELECTORS.Duelist.addEventListener("click", async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    const duelists = data.data.filter(
      (agent) => agent.role && agent.role.displayName === "Duelist"
    );

    console.log(duelists);

    if (duelists.length > 0) {
      insertCard(duelists);
    } else {
      console.log("No Duelists found.");
    }
  } catch (error) {
    console.error("Error filtering data:", error);
  }
});

function insertCard(arr) {
  arr.forEach((agent) => {
    DOMSELECTORS.agent.insertAdjacentHTML(
      "beforeend",
      `<div class="container">
          <div class="card">
            <h1 class="name">${agent.displayName}</h1>
              <img src="${agent.displayIconSmall}" alt="">
            <h2 class="name">${agent.description}</h2>
          </div>
        </div>`
    );
  });
}

// DOMSELECTORS.column.addEventListener("click", function () {
//   const agentName = prompt("Enter agent name:");
//   if (agentName) {
//     const filteredAgents = data.data.filter(
//       (agent) => agent.displayName.toLowerCase() === agentName.toLowerCase()
//     );
//     DOMSELECTORS.column.innerHTML = "";
//     insertCard(filteredAgents);
//   }
// });
