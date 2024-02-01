const form = document.querySelector(".login-form");
function formSubmit(event) {
  event.preventDefault();
  const emailElement = event.target.email;
  const passwordElement = event.target.password;
  if (emailElement.value.trim() === "" || passwordElement.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const loginDetails = {
      [emailElement.name]: emailElement.value.trim(),
      [passwordElement.name]: passwordElement.value.trim(),
    };
    console.log(loginDetails);
    emailElement.value = "";
    passwordElement.value = "";
  }
}
form.addEventListener("submit", formSubmit);
