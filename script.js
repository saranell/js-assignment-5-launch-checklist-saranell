// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
    })
    .then(function () {
      let planet = pickPlanet(listedPlanets);
      console.log(planet);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });
  let list = document.getElementById("faultyItems");
  let pilot = document.querySelector("input[name=pilotName]");
  let copilot = document.querySelector("input[name=copilotName");
  let fuelLevel = document.querySelector("input[name=fuelLevel]");
  let cargoLevel = document.querySelector("input[name=cargoMass]");

  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});
