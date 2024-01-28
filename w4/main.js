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
  const newP = document.createElement("p");
  newP.textContent = `Carbon Footprint total is ${arr[4]}`;
  output.appendChild(newP);

    const newPHouseSizes = document.createElement("p");
    newPHouseSizes.textContent = `House Size is ${arr[2]}`;
    output.appendChild(newPHouseSizes);

    const newPHouseSize = document.createElement("p");
    newPHouseSize.textContent = `House Size is ${arr[1]}`;
    output.appendChild(newPHouseSize);

    const newPHouseMembers = document.createElement("p");
    newPHouseMembers.textContent = `Number of House Members is ${arr[3]}`;
    output.appendChild(newPHouseMembers);

    const newPHouseMember = document.createElement("p");
    newPHouseMember.textContent = `Number of House Member is ${arr[2]}`;
    output.appendChild(newPHouseMember);

   

}
}




start(5, "apt");
start(4, "large");
start(3, "medium");
start(2, "small");
start(6, "large");
start(1, "apt");
start(3, "large");
start(4, "medium");
start(5, "small");

displayOutput()




