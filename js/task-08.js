const formEl = document.querySelector(".login-form");
// console.log(formEl);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const data = {
    email,
    password,
  };
  if (email === "" || password === "") {
    alert("Please enter in all fields");
  } else {
    console.log("email:", email);
    console.log("password:", password);
  }
}
