document.addEventListener("DOMContentLoaded", function (event) {
  const nameInput = document.getElementById("name");
  const saveNameButton = document.getElementById("SaveNome");
  const removeNameButton = document.getElementById("RemoveNome");
  const savedNameDiv = document.getElementById("savedName");
  saveNameButton.addEventListener("click", function () {
    console.log(nameInput.value);
    savedNameDiv.innerText = nameInput.value;
    localStorage.setItem("name", nameInput.value);
  });

  const savedName = localStorage.getItem("name");
  if (savedName) {
    savedNameDiv.textContent = `Nome salvato: ${savedName}`;
  } else {
    savedNameDiv.textContent = "";
  }
});
