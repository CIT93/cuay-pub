function determinHouseSizePts(size) {
    if (size ==="Large") {
      carbonPoints = carbonPoints + 10;
  } else if(size === "medium") {
      carbonPoints = carbonPoints + 7;
  } else if(size === "small") {
      carbonPoints = carbonPoints + 4;
  } else if(size === "apt") {
      carbonPoints = carbonPoints + 2;
  }
}

function determineHouseHoldPts(numberOfPeople) {
  console.log("Inside the function");
  if(numberOfPeople === 1) {
    carbonPoints = carbonPoints + 14;
} else if(numberOfPeople === 2) {
    carbonPoints = carbonPoints + 12;
} else if(numberOfPeople === 3) {
    carbonPoints = carbonPoints + 10;
} else if(numberOfPeople === 4) {
    carbonPoints = carbonPoints + 8;
} else if(numberOfPeople === 5) {
    carbonPoints = carbonPoints + 6;
} else if(numberOfPeople >6) {
    carbonPoints = carbonPoints + 2;
}
}

console.log(`Based on the number of members in the household of ${numberOfPeople} the points would be ${carbonPoints}`)

let carbonPoints = 0;

determineHouseHoldPts(5);
determineHouseSizePts("apt");