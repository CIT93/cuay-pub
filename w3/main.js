// function determineHouseholdPts(numberOfPeople) {
//   console.log("Inside the function");

//   if (numberOfPeople === 1) {
//     cardonPoints = cardonPoints + 14;
//   } else if (numberOfPeople === 2) {
//     cardonPoints = cardonPoints + 12;
//   } else if (numberOfPeople === 3) {
//     cardonPoints = cardonPoints + 10;
//   } else if (numberOfPeople === 4) {
//     cardonPoints = cardonPoints + 8;
//   } else if (numberOfPeople === 5) {
//     cardonPoints = cardonPoints + 6;
//   } else if (numberOfPeople === 6) {
//     cardonPoints = cardonPoints + 4;
//   } else if (numberOfPeople > 6) {
//     cardonPoints = cardonPoints + 2;
// }
//   console.log(
//     `Based on the number of members in the household ${numberOfPeople} The points would be ${cardonPoints}`
//   );
// }

//let cardonPoints = 0;
//const numberOfPeople = 3;

//global scope

//determineHouseholdPts(3);
//determineHouseholdPts(4);

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", determineHouseholdPts);


function determineHouseholdPts(sizeOfHome) {
    let lrgHome = 10;
    let medHome = 7;
    let smHome = 4;
    let apt = 0;
  
    if (sizeOfHome === "lrgHome") {
      para.textcontent cardonPts = cardonPts +10
    } else if (sizeOfHome ==="medium") {
      para.textcontent medHome = sizeOfHome + 7;
    } else if (sizeOfHome === "small") {
      para.textcontent smHome = sizeOfHome + 4;
    } else if (sizeOfHome === "apartment") {
      para.textcontent apt = sizeOfHome + 0;
    }
  }
  
  console.log("Large Home:", lrgHome);
  console.log("Medium Home:", medHome);
  console.log("Small Home:", smHome);
  console.log("apartment", apt);

  determineHouseholdPts("large");
  determineHouseholdPts("medium");
  determineHouseholdPts("small");
  determineHouseholdPts("apartment");

  console.log(`Based on the ${determineHouseholdPts} your Carbon Footprint will be`)