const determineHouseSizePts = size => {
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

const determineHouseHoldPts = numberOfPeople => {
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


export {determineHouseHoldPts, determineHouseSizePts}

  