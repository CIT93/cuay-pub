import {renderTbl} from "./render.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }

  return houseSizePoints;
}

function determineHouseHoldPts(numberOfPeople) {
  let houseHoldPoints = 0;
  if (numberOfPeople === 1) {
    houseHoldPoints = 14;
  } else if (numberOfPeople === 2) {
    houseHoldPoints = 12;
  } else if (numberOfPeople === 3) {
    houseHoldPoints = 10;
  } else if (numberOfPeople === 4) {
    houseHoldPoints = 8;
  } else if (numberOfPeople === 5) {
    houseHoldPoints = 6;
  } else if (numberOfPeople > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function displayOutput() {
  OUTPUT.innerHTML = "";

 
  let existingH2 = document.querySelector("#output h2");
  let existingH3 = document.querySelector("#output h3");
  
  if (!existingH2) {
    existingH2 = document.createElement("h2");
    existingH2.textContent = `Carbon Footprint Calculator`;
    OUTPUT.appendChild(existingH2);
  }

  for (const obj of cfpData) {
    if (!existingH3) {
      existingH3 = document.createElement("h3");
      OUTPUT.appendChild(existingH3);
    }

    existingH3.textContent = `The Carbon FootPrint for ${obj.firstName} ${obj.lastName} is ${obj.cfpTotal}`;

    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS})`;
    newP.textContent += ` and a ${obj.houseS} size home (score: ${obj.houseSPTS})`;

    OUTPUT.appendChild(newP);
  }

  renderTbl(cfpData);
}

function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;

  const data = {
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  };

  cfpData.push(data);
  displayOutput();
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houseSize.value;
  start(firstName, lastName, houseMembers, houseSize);
  FORM.reset();
});