function loadImage(image) {
  let content = document.getElementById('afbeeldingen');

  let frame = window.document.createElement('div');
  frame.className = "frame";

  let anchor = window.document.createElement('a');
  anchor.target = "_blank";
  anchor.href = image;

  let img = window.document.createElement('img');
  img.alt = "Missing image!" + image;
  img.src = image;
  img.width = 600;
  img.height = 400;

  // Inject elements
  anchor.insertAdjacentElement('afterbegin', img);
  frame.insertAdjacentElement('afterbegin', anchor);
  content.insertAdjacentElement('beforeend', frame);
}

function loadImages(directory, extension, amount) {
  for (var i = 0; i < amount; i++) {
    loadImage(directory + "/" + String(i) + extension);
  }
}
