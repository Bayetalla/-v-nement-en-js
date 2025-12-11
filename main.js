// Selectionner tous les elements de tr
let tabtr = document.querySelectorAll("tbody tr");
// Ecouteur d'evenement sur les tr
for (const tr of tabtr) {
  tr.addEventListener("click", function () {
    tr.classList.toggle("gris");
  });
}
