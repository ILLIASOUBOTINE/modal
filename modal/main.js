function creteElem(parent, elem) {
  let newElem = document.createElement(elem);
  parent.append(newElem);
  return newElem;
}

(() => {
  const ouverture = document.getElementById("ouverture");
  const fermeture = document.getElementById("fermeture");
  const dialog = document.getElementById("favDialog");

  let p = creteElem(dialog, "p");
  let i = 0;

  let timInt;

  // Update button opens a modal dialog
  ouverture.addEventListener("click", () => {
    dialog.showModal();

    timInt = setInterval(() => {
      p.innerText = `${i}sec`;
      i++;
    }, 1000);
  });

  // Form cancel button closes the dialog box
  fermeture.addEventListener("click", () => {
    i = 0;
    p.innerText = "";
    clearInterval(timInt);
    dialog.close();
  });
})();
