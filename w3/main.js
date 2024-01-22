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

function determineHouseholdPts(sizeOfHome) {
    let lrgHome = 10;
    let medHome = 7;
    let smHome = 4;
  
    if (sizeOfHome === 0) {
      lrgHome = sizeOfHome + 10;
    } else if (sizeOfHome === 7) {
      medHome = sizeOfHome + 4;
    } else if (sizeOfHome === 2) {
      smHome = sizeOfHome + 0;
    }
    
    // You can log the values here if needed
    console.log("Large Home:", lrgHome);
    console.log("Medium Home:", medHome);
    console.log("Small Home:", smHome);
  }
  
  let sizeOfHome = 0;
  determineHouseholdPts(sizeOfHome);

  