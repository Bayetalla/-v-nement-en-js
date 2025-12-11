// Selectionner tous les elements de tr
let tabtr = document.querySelectorAll("tbody tr");
// Ecouteur d'evenement sur les tr
for (const tr of tabtr) {
  tr.addEventListener("click", function () {
    this.classList.toggle("gris");
  });
}
//
let lien = document.querySelector("a");
lien.addEventListener("click", function (e) {
  e.preventDefault();
  let target = this.getAttribute("href");
  let response = confirm("Vous allez partir du le site");
  if (response == true) {
    window.location = target; // diréction vers un autre site
  } else {
    alert("Merci de rester avec nous");
  }
});
