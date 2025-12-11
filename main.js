document.addEventListener("DOMContentLoaded", function () {
  let trs = document.querySelectorAll("tbody tr");
  console.log("Nombre de lignes trouvées:", trs.length);

  trs.forEach((tr) => {
    tr.addEventListener("click", function () {
      console.log("Ligne cliquée:", this);
      this.classList.toggle("gris");
      console.log("Classes après toggle:", this.classList);
    });
  });
});
