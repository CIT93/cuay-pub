// document.addEventListener{'DOMContentLoaded', function() {
// import { renderTbl } from "./render.js";
// import { FORM, SUBMIT, FNAME, LNAME, FCHOICE } from "./global.js";
// import { saveLS, cfpData } from "./storage.js";
// import { FP } from "./fp.js";

// const validateField = event => {
//   const field = event.target.value;
//   const fieldId = event.target.id;
//   console.log("Field ID:", fieldId);
//   const fieldError = document.getElementById(`${fieldId}Error`);
//   console.log("Field Error Element:", fieldError);
//   if (field === '') {
//     fieldError.textContent = `${fieldId} is required`;
//     event.target.classList.add(`invalid`);
//   } else {
//     fieldError.textContent = "";
//     event.target.classList.remove("invalid");
//   }
// };

// // Attach blur event listeners
// document.getElementById('firstName').addEventListener("blur", validateField);
// document.getElementById('lastName').addEventListener("blur", validateField);
// document.getElementById('housem').addEventListener("blur", validateField);
// document.getElementById('houseSize').addEventListener("blur", validateField);
// document.querySelector("select[name='foodChoice']").addEventListener("blur", validateField);

// // Form submission event listener
// document.getElementById('form').addEventListener("submit", (e) => {
//   e.preventDefault();

//   const firstName = document.getElementById('firstName').value.trim();
//   const lastName = document.getElementById('lastName').value.trim();
//   const houseMembers = document.getElementById('housem').value.trim();
//   const houseSize = document.getElementById('houseSize').value.trim();
//   const food = document.querySelector("select[name='foodChoice']").value.trim();

//   const submitError = document.getElementById('submitError'); // Fetch submitError once

//   if (firstName !== "" && lastName !== "" && houseMembers !== "" && houseSize !== "" && food !== "") {
//     submitError.textContent = "";

//     const fpObj = new FP(firstName, lastName, parseInt(houseMembers), houseSize, food); 
//     cfpData.push(fpObj);
//     saveLS(cfpData);
//     renderTbl(cfpData);
//     FORM.reset();
//   } else {
//     submitError.textContent = "Form requires First and Last Name";
//   }
// });



  import { renderTbl } from "./render.js";
  import { FORM, SUBMIT, FNAME, LNAME, FCHOICE } from "./global.js";
  import { saveLS, cfpData } from "./storage.js";
  import { FP } from "./fp.js";
  document.addEventListener('DOMContentLoaded', function() {
  const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    console.log("Field ID:", fieldId);
    const fieldError = document.getElementById(`${fieldId}Error`);
    console.log("Field Error Element:", fieldError);
    if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add(`invalid`);
    } else {
      fieldError.textContent = "";
      event.target.classList.remove("invalid");
    }
  };

  // Attach blur event listeners
  document.getElementById('firstName').addEventListener("blur", validateField);
  document.getElementById('lastName').addEventListener("blur", validateField);
  document.getElementById('houseM').addEventListener("blur", validateField);
  document.getElementById('houseSize').addEventListener("blur", validateField);
  document.getElementById('foodChoice').addEventListener("blur", validateField);

  // Form submission event listener
  document.getElementById('form').addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const houseMembers = document.getElementById('houseM').value.trim();
    const houseSize = document.getElementById('houseSize').value.trim();
    const food = document.getElementById('foodChoice').value.trim();

    const submitError = document.getElementById('submitError'); // Fetch submitError once

    if (firstName !== "" && lastName !== "" && houseMembers !== "" && houseSize !== "" && food !== "") {
      submitError.textContent = "";

      const fpObj = new FP(firstName, lastName, parseInt(houseMembers), houseSize, food); 
      cfpData.push(fpObj);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      submitError.textContent = "Form requires First and Last Name";
    }
  });
});