function updateContent() {
  let url;
  switch (location.hash) {
    case "#about":
      url = '/personal_site/contents/about.part.html';
      break;
    case "#apps":
      url = '/personal_site/contents/apps.part.html';
      break;
    case "#zxcvbn":
      url = '/personal_site/contents/zxcvbn/zxcvbn.part.html';
      break;
    default:
      url = '/personal_site/contents/default.part.html';
      break;
  }

  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.onreadystatechange = function() {
      document.getElementById("content").innerHTML = request.responseText;
  }

  request.send();
}
