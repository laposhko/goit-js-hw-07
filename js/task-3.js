const inputField = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
function nameReplace() {
  // const text = inputField.value.trim();
  if (inputField.value.trim().length > 0) {
    output.textContent = inputField.value.trim();
  } else {
    output.textContent = "Anonymous";
  }
}

inputField.addEventListener("input", nameReplace);
