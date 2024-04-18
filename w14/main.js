function renderPhotos(photos) {
    photos.forEach((img) => {
      const imgEl = document.createElement("img");
      imgEl.setAttribute("src", img.thumbnailUrl); // corrected syntax: "src", img.thumbnailUrl
      document.getElementById("photos").appendChild(imgEl); // Changed "output" to "photos"
    });
  }
  
  async function getPhotos() {
    // Simulated data for demonstration purposes
    const photos = [
      { thumbnailUrl: "https://via.placeholder.com/200/FF0000/FFFFFF" },
      { thumbnailUrl: "https://via.placeholder.com/200/00FF00/FFFFFF" },
      { thumbnailUrl: "https://via.placeholder.com/200/0000FF/FFFFFF" },
      { thumbnailUrl: "https://via.placeholder.com/200/FFFF00/000000" },
      { thumbnailUrl: "https://via.placeholder.com/200/00FFFF/000000" },
      { thumbnailUrl: "https://via.placeholder.com/200/FF00FF/000000" },
      { thumbnailUrl: "https://via.placeholder.com/200/FFFFFF/000000" },
      { thumbnailUrl: "https://via.placeholder.com/200/000000/FFFFFF" },
      { thumbnailUrl: "https://via.placeholder.com/200/808080/FFFFFF" },
      { thumbnailUrl: "https://via.placeholder.com/200/800000/FFFFFF" }
    ];
    return photos;
  }
  
  async function start() {
    const photos = await getPhotos();
    renderPhotos(photos);
  }
  
  start();
