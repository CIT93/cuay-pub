class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    domestic meat,
    vegetarian, vegan, wild meat, 
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.energy = energy;
    
    this.food = food; // Add food choice
    this.foodPackaging = foodPackaging; // Add food packaging
    this.determineHouseHoldPoints(); // Call the method to calculate household points
    this.determineHouseSizePoints(); // Call the method to calculate house size points
    this.total(); // Call the method to calculate the total footprint
  }

  determineHouseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }

  determineHouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }

  foodChoice() {
    if (this.foodChoice === "vegetarian") {
        this.foodChoicePts = 
    }
  }

  total() {
    const foodPoints = this.calculateFootprint(); // Calculate food points
    this.totalFootprint =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodPoints + this.foodPackaging;
  }
}

export { FP };
