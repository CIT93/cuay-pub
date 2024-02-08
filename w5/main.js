
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === " small") {
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

function displayOutObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
  output.appendChild(newH2);
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;

  cfpData.push({
    houseM: houseHoldMembers,
    houseSize: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });

  displayOutObj(cfpData[cfpData.length - 1]);
}

start(5, "large");
start(4, "medium");
start(3, "small");
start(2, "apt");

console.log(cfpData);

const carbonFootprintCalculator = {
  houseHoldMembers: 5,
  houseSize: "large",
  houseHoldPoints: 0,
  houseSizePoints: 0,
  totalPoints: 0,

  determineHouseSizePts(size) {
    if (size === "large") return 10;
    else if (size === "medium") return 7;
    else if (size === "small") return 4;
    else if (size === "apt") return 2;
    return 0;
  },

  determineHouseHoldPts(numberOfPeople) {
    if (numberOfPeople === 1) return 14;
    else if (numberOfPeople === 2) return 12;
    else if (numberOfPeople === 3) return 10;
    else if (numberOfPeople === 4) return 8;
    else if (numberOfPeople === 5) return 6;
    else if (numberOfPeople > 6) return 2;
    return 0;
  },

  calculateCarbonFootprint() {
    this.houseHoldPoints = this.determineHouseHoldPts(this.houseHoldMembers);
    this.houseSizePoints = this.determineHouseSizePts(this.houseSize);
    this.totalPoints = this.houseHoldPoints + this.houseSizePoints;
  },

  displayCarbonFootprint() {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint - HouseM: ${this.houseHoldMembers}, HouseS: ${this.houseSize}, HouseMPTS: ${this.houseHoldPoints}, HouseSPTS: ${this.houseSizePoints}`;

    output.appendChild(newH2);
    //newH2.textContent += ` Household Members: ${this.houseHoldMembers}, House Size: ${this.houseSize}, Household Points: ${this.houseHoldPoints}, House Size Points: ${this.houseSizePoints}`;
  },
};

carbonFootprintCalculator.calculateCarbonFootprint();
carbonFootprintCalculator.displayCarbonFootprint();