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
  const  determineHouseSizePts = function(size) {
    return HOUSE_SIZE_POINTS[size] || 0;
  }
  
  /**
   * Calculate household size points based on the number of people.
   * @param {number} numberOfPeople - The number of people in the household.
   * @returns {number} - The calculated points for the household size.
   */
  const determineHouseHoldPts = function(numberOfPeople) {
    return HOUSEHOLD_POINTS[numberOfPeople] || 0;
  }
  
  export { determineHouseSizePts, determineHouseHoldPts };
  