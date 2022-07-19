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
    let pilot = String(pilotInput.value);
    let copilotInput = document.querySelector("input[name=copilotName");
    let copilot = String(copilotInput.value);
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuelLevel = Number(fuelInput.value);
    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = Number(cargoInput.value);
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
});
