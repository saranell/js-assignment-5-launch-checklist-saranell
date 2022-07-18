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
  //   // Here is the HTML formatting for our mission target div.
  let mission = document.getElementById("missionTarget");
  mission.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                 <img src="${image}">`;
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
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let launchStatus = document.getElementById("launchStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");

  validateInput(pilot.value, copilot.value);
  if (pilot.value === "" || copilot === "") {
    alert("All fields required!");
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot.value} ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilot.value} ready`;
  }

  validateInput(fuelLevel, cargoLevel);
  //   if (!isNaN(fuelLevel)) {
  //     alert("Invalid entry. Needs to be a number");
  if (fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Not enough fuel for the journey!";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";
  }
  if (cargoLevel.value > 10000) {
    list.style.visibility = "visible";
    cargoStatus.innerHTML = "Too much mass for takeoff!";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";
    // } else if (!isNaN(cargoLevel)) {
    //   alert("Invalid entry. Needs to be a number");
  }
}

if (
  fuelLevel.value >= 10000 &&
  cargoLevel <= 10000 &&
  pilotStatus !== "" &&
  copilotStatus !== ""
) {
  launchStatus.style.color = "green";
  launchStatus.innerHTML = "Shuttle is ready for launch.";
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random() * planets.length)];
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;
