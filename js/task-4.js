const form = document.querySelector(".login-form");
function handleFormSubmission(event) {
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
    event.target.reset();
  }
}
form.addEventListener("submit", handleFormSubmission);
