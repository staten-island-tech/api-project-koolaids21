const DOMSELECTORS = {
  agent: document.getElementById("agent"),
  Duelist: document.getElementById("Duelist"),
  Initiator: document.getElementById("Initiator"),
  Controller: document.getElementById("Controller"),
  Sentinel: document.getElementById("Sentinel"),
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
  .catch((error) => console.error("ERROR:", error));

async function getData(agents) {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data.data);
    insertCard(data.data);
  } catch (error) {
    console.error("ERROR:", error);
  }
}

DOMSELECTORS.Initiator.addEventListener("click", async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    const Initiators = data.data.filter(
      (agent) => agent.role && agent.role.displayName === "Initiator"
    );
    console.log(Initiators);
    if (Initiators.length > 0) {
      insertCard(Initiators);
    } else {
      console.log("No Initiators found.");
    }
  } catch (error) {
    console.error("ERROR FILTERING", error);
  }
});

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
    console.error("ERROR FILTERING", error);
  }
});

DOMSELECTORS.Sentinel.addEventListener("click", async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    const Sentinels = data.data.filter(
      (agent) => agent.role && agent.role.displayName === "Sentinel"
    );
    console.log(Sentinels);
    if (Sentinels.length > 0) {
      insertCard(Sentinels);
    } else {
      console.log("No Sentinels found.");
    }
  } catch (error) {
    console.error("ERROR FILTERING:", error);
  }
});

DOMSELECTORS.Controller.addEventListener("click", async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    const Controllers = data.data.filter(
      (agent) => agent.role && agent.role.displayName === "Controller"
    );
    console.log(Controllers);
    if (Controllers.length > 0) {
      insertCard(Controllers);
    } else {
      console.log("No Controller found.");
    }
  } catch (error) {
    console.error("ERROR FILTERING data:", error);
  }
});

function insertCard(x) {
  DOMSELECTORS.agent.innerHTML = "";
  x.forEach((agent) => {
    DOMSELECTORS.agent.insertAdjacentHTML(
      "beforeend",
      ` <div class="card">
            <h1 class="name">${agent.displayName}</h1>
              <img src="${agent.displayIconSmall}" alt="">
            <h2 class="name">${agent.description}</h2>  
        </div>`
    );
  });
}
