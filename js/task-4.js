const form = document.querySelector(".login-form");
const formElements = form.elements;
const loginDetails = {};
function formSubmit(event) {
  event.preventDefault();
  if (
    formElements[0].value.trim() === "" ||
    formElements[1].value.trim() === ""
  ) {
    alert("All form fields must be filled in");
  } else {
    loginDetails[formElements[0].name] = formElements[0].value.trim();
    loginDetails[formElements[1].name] = formElements[1].value.trim();
    console.log(loginDetails);
    form.reset();
  }
}
form.addEventListener("submit", formSubmit);
