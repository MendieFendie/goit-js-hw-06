const formEl = document.querySelector(".login-form");
// console.log(formEl);

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert("Please enter in all fields");
  } else {
    const data = {
      email,
      password,
    };
    console.log(data);
    formElements.email.value = "";
    formElements.password.value = "";
  }
}
