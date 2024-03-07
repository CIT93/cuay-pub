import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./carbonFootprintModule.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  

  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houseSize.value;

  console.log("Form Input Values:", firstName, lastName, houseMembers, houseSize);
  if (!firstName || !lastName) {
    alert("First name and last name are required!");
    return; // Prevent further execution if validation fails
  }
  start(firstName, lastName, houseMembers, houseSize);

  saveLS(cfpData);

  renderTbl(cfpData);

  FORM.reset();
});

FORM.firstname.addEventListener("blur", function () {
  if (!FORM.firstname.value) {
    alert("First name is required!");
  }
});
FORM.lastname.addEventListener("blur", function () {
  if (!FORM.lastname.value) {
    alert("Last name is required!");
  }
});