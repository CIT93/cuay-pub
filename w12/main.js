
// Function to display exercise details
function displayExercise(exercise, reps, time) {
    // Get the output div
    const output = document.getElementById('output');

    // Create HTML elements to display exercise details
    const exerciseInfo = document.createElement('p');
    exerciseInfo.textContent = `Exercise: ${exercise}`;

    const repsInfo = document.createElement('p');
    repsInfo.textContent = `Number of Reps: ${reps}`;

    const timeInfo = document.createElement('p');
    timeInfo.textContent = `Time Duration (MIN): ${time}`;

    // Add exercise details to the output div
    output.appendChild(exerciseInfo);
    output.appendChild(repsInfo);
    output.appendChild(timeInfo);
}

// Function to start the exercise timer
function startExercise(exercise, time) {
    // Get the output div
    const output = document.getElementById('output');

    // Display message indicating exercise is in progress
    const progressMessage = document.createElement('p');
    progressMessage.textContent = 'Exercise in progress...';
    output.appendChild(progressMessage);

    // Set timeout to display completion message after specified time
    setTimeout(() => {
        const completionMessage = document.createElement('p');
        completionMessage.textContent = `Time's up! You have completed ${exercise}.`;
        output.appendChild(completionMessage);
    }, time * 60000); // Convert time to milliseconds
}

// Event listener for form submission
document.getElementById('formExercise').addEventListener('submit', function(e) {
    // Prevent default form submission behavior
    e.preventDefault();

    // Get form inputs
    const exercise = this.elements['Excercises'].value;
    const reps = this.elements['reps'].value;
    const time = this.elements['time'].value;

    // Display exercise details
    displayExercise(exercise, reps, time);

    // Start the exercise timer
    startExercise(exercise, time);
});
