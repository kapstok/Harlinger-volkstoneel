function loadImage(image) {
  let content = document.getElementById('content');

  let responsive = window.document.createElement('div');
  responsive.className = "responsive";

  let gallery = window.document.createElement('div');
  gallery.className = "gallery";

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
  gallery.insertAdjacentElement('afterbegin', anchor);
  responsive.insertAdjacentElement('afterbegin', gallery);
  content.insertAdjacentElement('beforeend', responsive);
}

function loadImages() {
  loadImage("example/1.jpg");
}
