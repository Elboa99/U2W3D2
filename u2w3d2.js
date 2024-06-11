document.addEventListener("DOMContentLoaded", function (event) {
  const nameInput = document.getElementById("name");
  const saveNameButton = document.getElementById("SaveNome");
  const removeNameButton = document.getElementById("RemoveNome");
  const savedNameDiv = document.getElementById("savedName");

  // Funzione per mostrare il nome salvato
  function displaySavedName() {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      savedNameDiv.textContent = `Nome salvato: ${savedName}`;
    } else {
      savedNameDiv.textContent = "";
    }
  }

  // Mostrare il nome salvato al caricamento della pagina
  displaySavedName();

  // Event listener per salvare il nome
  saveNameButton.addEventListener("click", function () {
    const name = nameInput.value;
    localStorage.setItem("name", name);
    displaySavedName();
  });

  // Event listener per rimuovere il nome
  removeNameButton.addEventListener("click", function () {
    localStorage.removeItem("name");
    displaySavedName();
  });
});
