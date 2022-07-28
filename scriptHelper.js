// Write your helper functions here!

require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let mission = document.getElementById("missionTarget");
  mission.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                 <img src=${imageUrl} alt = Photo of ${name}>`;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (!isNaN(testInput)) {
    return "Is a number";
  } else if (isNaN(testInput)) {
    return "Not a number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  console.log(pilot, copilot, fuelLevel, cargoLevel);
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let launchStatus = document.getElementById("launchStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields required!");
  } else if (
    validateInput(pilot) === "Is a number" ||
    validateInput(copilot) === "Is a number"
  ) {
    alert("Invalid entry");
  } else if (
    validateInput(fuelLevel) === "Not a number" ||
    validateInput(cargoLevel) === "Not a number"
  ) {
    alert("Invalid entry");
  } else if (fuelLevel < 10000 && cargoLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Not enough fuel for the journey!";
    cargoStatus.innerHTML = "Too much mass for takeoff!";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";
  } else if (fuelLevel < 10000 && cargoLevel < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Not enough fuel for the journey!";
    cargoStatus.innerHTML = "Cargo mass low enough for launch.";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";
  } else if (fuelLevel > 10000 && cargoLevel > 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Enough fuel for the journey.";
    cargoStatus.innerHTML = "Too much mass for takeoff!";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";
  } else if (fuelLevel > 10000 && cargoLevel < 10000) {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} ready`;
    fuelStatus.innerHTML = "Fuel level high enough for launch.";
    cargoStatus.innerHTML = "Cargo mass low enough for launch.";
    launchStatus.style.color = "green";
    launchStatus.innerHTML = "Shuttle is ready for launch.";
  }
}
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then((response) => {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
