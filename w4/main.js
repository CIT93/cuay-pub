const cfpData = [];

let houseHoldSizePoints = 0;

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }

  return houseSizePoints;
}

function determineHouseHoldPts(numberOfPeople) {
  let houseHoldPoints = 0;
  if (numberOfPeople === 1) {
    houseHoldPoints = 14;
  } else if (numberOfPeople === 2) {
    houseHoldPoints = 12;
  } else if (numberOfPeople === 3) {
    houseHoldPoints = 10;
  } else if (numberOfPeople === 4) {
    houseHoldPoints = 8;
  } else if (numberOfPeople === 5) {
    houseHoldPoints = 6;
  } else if (numberOfPeople > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function start(houseHoldMembers, houseHoldSize) {
  const houseHoldPoints = determineHouseHoldPts(houseHoldMembers);
  const houseSizePoints = determineHouseSizePts(houseHoldSize);
  const total = houseHoldPoints + houseSizePoints;
  cfpData.push([
    houseHoldMembers,
    houseHoldSize,
    houseHoldPoints,
    houseSizePoints,
    total,
  ]);

}


function displayOutput() {
for (arr of cfpData){
  console.log(arr)
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint ${arr[4]}`;
  const newH3 = document.createElement("h3");
  newH3.textContent = `Based on number in and size of home`;
  const newP = document.createElement("p");
  newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[2]})`;
  newP.textContent += ` and a ${arr[1]} size of home (score:${arr[3]}.)`;
  output.appendChild(newH2);
  output.appendChild(newH3);
  output.appendChild(newP);
}
}



start(5, "large");
start(4, "medium");
start(3, "small");
start(2, "apt");

displayOutput()




