import { cfpData } from './storage.js';
import { FP } from './fp.js';

// Function to calculate the average footprint score
function calculateAverageFootprintScore() {
    if (cfpData.length === 0) {
        return 0; // If there are no footprints, the average is zero
    }

    // Use array's map method to extract total footprints
    const totalFootprints = cfpData.map(fp => fp.totalFootprint);

    // Use array's reduce method to calculate the sum of all footprint scores
    const totalScore = totalFootprints.reduce((acc, score) => acc + score, 0);

    // Calculate the average
    const averageScore = totalScore / cfpData.length;

    return averageScore;
}

// Test the function to ensure it works
console.log("Average Footprint Score:", calculateAverageFootprintScore());

export { calculateAverageFootprintScore };
