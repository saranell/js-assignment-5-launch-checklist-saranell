// Write your helper functions here!

// require("isomorphic-fetch");

// function addDestinationInfo(
//   document,
//   name,
//   diameter,
//   star,
//   distance,
//   moons,
//   imageUrl
// ) {
//   // Here is the HTML formatting for our mission target div.
//   /*
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    */
// }

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
  if (
    pilot.value === "" ||
    copilot === "" ||
    fuelLevel === "" ||
    cargoLevel === ""
  ) {
    alert("All fields required!");
  }

  pilotStatus.innerHTML = `Pilot ${pilot.value} ready`;
  copilotStatus.innerHTML = `Co-pilot ${copilot.value} ready`;

  //TODO: If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey.
  // The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
  validateInput(fuelLevel);
  //   if (!isNaN(fuelLevel)) {
  //     alert("Invalid entry. Needs to be a number");
  if (fuelLevel.value < 10000) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Not enough fuel for the journey!";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
    launchStatus.style.color = "red";
  }
}
//TODO: If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off.
// The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
validateInput(cargoLevel);
if (cargoLevel > 10000) {
  list.style.visibility = "visible";
  cargoStatus.innerHTML = "Too much mass for takeoff!";
  launchStatus.innerHTML = "Shuttle not ready for launch.";
  launchStatus.style.color = "red";
} else if (!isNaN(cargoLevel)) {
  alert("Invalid entry. Needs to be a number");
}
//TODO: If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
if (
  fuelLevel.value >= 10000 &&
  cargoLevel <= 10000 &&
  pilotStatus !== "" &&
  copilotStatus !== ""
) {
  launchStatus.style.color = "green";
  launchStatus.innerHTML = "Shuttle is ready for launch.";
}
// }
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    response.json().then( function(json) {
    });
  });

  return planetsReturned;
}

function pickPlanet(planets) {
    return Math.random();
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;
