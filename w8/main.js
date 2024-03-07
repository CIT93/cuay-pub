import {renderTbl} from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts} from "./carbonFootprintModule.js"


const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const cfpData = [];

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
FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houseSize.value;
  console.log("Form Input Values:", firstName, lastName, houseMembers, houseSize);
  start(firstName, lastName, houseMembers, houseSize);
  console.log("cfpData Array:", cfpData);
  renderTbl(cfpData);
  FORM.reset();
});





