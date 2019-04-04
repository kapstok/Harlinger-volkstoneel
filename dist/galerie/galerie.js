function loadGallery() {
  document.getElementById('content').innerHTML = "";

  switch(window.location.hash) {
    case "#example":
        loadImages();
        break;
    default:
        console.log("could not find " + location.hash);
        break;
  }
}
