function determineHouseholdPts(numberOfPeople) {
  console.log("Inside the function");

  if (numberOfPeople === 1) {
    cardonPoints = cardonPoints + 14;
  } else if (numberOfPeople === 2) {
    cardonPoints = cardonPoints + 12;
  } else if (numberOfPeople === 3) {
    cardonPoints = cardonPoints + 10;
  } else if (numberOfPeople === 4) {
    cardonPoints = cardonPoints + 8;
  } else if (numberOfPeople === 5) {
    cardonPoints = cardonPoints + 6;
  } else if (numberOfPeople === 6) {
    cardonPoints = cardonPoints + 4;
  } else if (numberOfPeople > 6) {
    cardonPoints = cardonPoints + 2;
}
  console.log(
    `Based on the number of members in the household ${numberOfPeople} The points would be ${cardonPoints}`
  );
}

let cardonPoints = 0;
const numberOfPeople = 3;

//global scope

determineHouseholdPts(3);
determineHouseholdPts(4);
