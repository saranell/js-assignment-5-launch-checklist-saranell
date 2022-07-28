// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", () => {
  let listedPlanets;
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then((result) => {
      listedPlanets = result;
    })
    .then(() => {
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
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let list = document.getElementById("faultyItems");
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name=copilotName");
    let copilot = copilotInput.value;
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = fuelInput.value;
    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoInput.value;
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});
