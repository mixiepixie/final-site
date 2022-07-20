// toggle-menu
hamBtn = document.querySelector('.hamburger');

hamBtn.onclick = function() {
  this.classList.toggle("active");
  navDisplay = document.getElementsByClassName("navigation");
  navDisplay[0].classList.toggle("responsive");
}

let oLastModif = new Date(document.lastModified);
document.getElementById("lastmod").innerHTML = oLastModif;
