import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./carbonfootprintmodule.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";

// Function to validate a single field
const validateField = (event) => {
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

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const firstName = FNAME.value.trim();
  const lastName = LNAME.value.trim();
  const houseMembers = FORM.housem.value.trim();
  const houseSize = FORM.houseSize.value;
  const food = FORM.food.value; // Get selected food option
  const foodPackaging = FORM.foodPackaging.value; // Get selected food packaging option

  // Validate form fields
  // Validation code...

  // If all fields are valid, proceed with form submission
  if (firstName !== "" && lastName !== "") {
    SUBMIT.textContent = "";

    const fpObj = new FP(firstName, lastName, parseInt(houseMembers), houseSize, 0, 0, 0, food, foodPackaging); // Include food options
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires First and Last Name";
  }
});