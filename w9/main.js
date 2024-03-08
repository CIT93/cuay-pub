import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./carbonFootprintModule.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const submitErrorEl = document.getElementById('submitElError');
const firstNameEl = document.getElementById('firstName');
const lastNameEl = document.getElementById(`lastName`);
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

 // Function to validate a single field
 const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};

 // Attach blur event listeners
firstNameEl.addEventListener('blur', validateField);
lastNameEl.addEventListener('blur', validateField);



FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = FORM.firstName.value;
  const lastName = FORM.lastName.value;
  const firstNameIsValid = firstNameEl.value !== '';
  const lastNameIsValid = lastNameEl.value !== '';
  if (firstNameIsValid && lastNameIsValid) { 
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houseSize.value;
  console.log("Form Input Values:", firstName, lastName, houseMembers, houseSize);
  start(firstName, lastName, houseMembers, houseSize);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
  submitErrorEl.textContent = '';  
  } else {
    submitErrorEl.textContent = "Form requires First and Last Name";
  }
});


