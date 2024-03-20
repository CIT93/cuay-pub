import { renderTbl } from "./render.js";
import {
  determineHouseHoldPts,
  determineHouseSizePts,
} from "./carbonFootprintModule.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

// const  start = (first, last, houseHoldMembers, houseSize) => {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePTS = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePTS;

//   cfpData.push({
//     firstName: first,
//     lastName: last,
//     houseM: houseHoldMembers,
//     houseS: houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total,
//   });
// }

// Update the start function with default parameters
const start = (firstName, lastName, houseM = "defaultHouseM", houseS = "defaultHouseS") => {
  const houseHoldPTS = determineHouseHoldPts(houseM);
  const houseSizePTS = determineHouseSizePts(houseS);
  const total = houseHoldPTS + houseSizePTS;

  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseM,
    houseS: houseS,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

// Function to validate a single field
  const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
};

// Attach blur event listeners
FNAME.addEventListener("blur", validateField);
LNAME.addEventListener("blur", validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();

  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    start(
      FNAME.value,
      LNAME.value,
      parseInt(FORM.housem.value),
      FORM.houseSize.value
    );
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires First and Last Name";
  }
});

// rest operator
// const add2 = function(...a) {
//   return 2 + a[3];
// }
// const result = add2(1,2,3,4);

//arrow function
const add2 = a => 2 + a;

const result = add2(100);

//IIFE

const a = 3;
(function(a) {
  console.log("Inside IIFE");
  console.log(a);
}) (a);