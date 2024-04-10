// Function to display exercise details
function displayExercise(exercise, reps, time) {
    // Get the output div
    const output = document.getElementById('output');

    // Clear previous messages
    output.innerHTML = '';

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
    return new Promise((resolve, reject) => {
        // Get the output div
        const output = document.getElementById('output');

        // Display message indicating exercise is in progress
        const progressMessage = document.createElement('p');
        progressMessage.textContent = `Exercise in progress: ${exercise} - Time left: ${time}:00`;
        output.appendChild(progressMessage);

        // Display remaining time countdown
        const updateTimer = () => {
            let remainingTime = time * 60; // Convert time to seconds
            let minutes, seconds;

            const timerInterval = setInterval(() => {
                minutes = Math.floor(remainingTime / 60);
                seconds = remainingTime % 60;

                if (seconds < 10) {
                    seconds = "0" + seconds; // Add leading zero for seconds < 10
                }

                progressMessage.textContent = `Exercise in progress: ${exercise} - Time left: ${minutes}:${seconds}`;

                remainingTime--;

                if (remainingTime < 0) {
                    clearInterval(timerInterval);
                    resolve(); // Resolve the promise when the time is up
                }
            }, 1000); // Update every second
        };

        // Update timer initially
        updateTimer();
    });
}

// Event listener for form submission
document.getElementById('formExercise').addEventListener('submit', function(e) {
    // Prevent default form submission behavior
    e.preventDefault();

    // Get form inputs
    const exercise = this.elements['Excercises'].value;
    const reps = this.elements['reps'].value;
    const time = parseInt(this.elements['time'].value); // Parse as integer

    // Display exercise details
    displayExercise(exercise, reps, time);

    // Start the exercise timer and handle the promise
    startExercise(exercise, time)
        .then(() => {
            console.log('Exercise completed successfully.'); // You can add further handling here if needed
        })
        .catch((error) => {
            console.error('Error starting exercise timer:', error);
        });
});
