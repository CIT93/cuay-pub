// export function determineHouseSizePts(size) {
//     let houseSizePoints = 0;
//     if (size === "large") {
//         houseSizePoints = 10;
//     } else if (size === "medium") {
//         houseSizePoints = 7;
//     } else if (size === "small") {
//         houseSizePoints = 4;
//     } else if (size === "apt") {
//         houseSizePoints = 2;
//     }

//     return houseSizePoints;
// }

// export function determineHouseHoldPts(numberOfPeople) {
//     let houseHoldPoints = 0;
//     if (numberOfPeople === 1) {
//         houseHoldPoints = 14;
//     } else if (numberOfPeople === 2) {
//         houseHoldPoints = 12;
//     } else if (numberOfPeople === 3) {
//         houseHoldPoints = 10;
//     } else if (numberOfPeople === 4) {
//         houseHoldPoints = 8;
//     } else if (numberOfPeople === 5) {
//         houseHoldPoints = 6;
//     } else if (numberOfPeople > 6) {
//         houseHoldPoints = 2;
//     }
//     return houseHoldPoints;
// }



const HOUSE_SIZE_POINTS = {
    large: 10,
    medium: 7,
    small: 4,
    apt: 2,
  };
  
  // Constants for household size points
  const HOUSEHOLD_POINTS = {
    1: 14,
    2: 12,
    3: 10,
    4: 8,
    5: 6,
    6: 2,
  };
  
  /**
   * Calculate house size points based on the provided size.
   * @param {string} size - The size of the house.
   * @returns {number} - The calculated points for the house size.
   */
  function determineHouseSizePts(size) {
    return HOUSE_SIZE_POINTS[size] || 0;
  }
  
  /**
   * Calculate household size points based on the number of people.
   * @param {number} numberOfPeople - The number of people in the household.
   * @returns {number} - The calculated points for the household size.
   */
  function determineHouseHoldPts(numberOfPeople) {
    return HOUSEHOLD_POINTS[numberOfPeople] || 0;
  }
  
  export { determineHouseSizePts, determineHouseHoldPts };