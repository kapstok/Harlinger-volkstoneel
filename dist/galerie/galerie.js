function addZip(directory) {
  let content = document.getElementById('afbeeldingen');

  let zipHref = document.createElement('a');
  zipHref.className = "link";
  zipHref.href = directory + "/galerie.zip";
  zipHref.innerHTML = "Klik hier om alle foto's te downloaden.";

  content.insertAdjacentElement('afterend', zipHref);
}

function loadGallery() {
  document.getElementById('afbeeldingen').innerHTML = "";

  switch(window.location.hash) {
    case "#example":
        loadImages("example", ".jpg", 1);
        addZip("example");
        break;
    default:
        console.log("could not find " + location.hash);
        break;
  }
}
