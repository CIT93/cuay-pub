function renderPhotos(photos) {
  const outputElement = document.getElementById("output"); // Ensure target element exists
  if (!outputElement) {
    console.error("Output element not found"); // Log error if element not found
    return;
  }

  // Render each photo
  photos.forEach((img) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", img.thumbnailUrl); // Set image source
    outputElement.appendChild(imgEl); // Append to the DOM
  });
}

async function getPhotos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos"); // Fetch data

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const photos = await response.json(); // Convert response to JSON
    
    // Check if the photos array is empty
    if (!photos.length) {
      console.error("Error: No photos found"); // Log error message
    } else {
      onSuccess(photos); // Call onSuccess with the data
    }

  } catch (error) {
    onError(error); // Call onError with the error
  }
}

function onSuccess(photos) {
  renderPhotos(photos); // Render photos on success
}

function onError(error) {
  console.error(`Error: ${error.message}`); // Handle and log errors
}

function start() {
  getPhotos(); // Start fetching photos
}

start(); // Call start to begin the process
