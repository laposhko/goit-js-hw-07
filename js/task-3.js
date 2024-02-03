const inputField = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
function nameReplace() {
  const string = inputField.value.trim();
  if (string.length > 0) {
    output.textContent = string;
  } else {
    output.textContent = "Anonymous";
  }
}

inputField.addEventListener("input", nameReplace);
