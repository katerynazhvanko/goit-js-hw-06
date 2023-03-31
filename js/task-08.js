const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const data = {
    mail,
    password,
  };

  if (!mail.length || !password.length) {
    alert("Всі поля мають бути заповнені!");
    return;
  }
  console.log(data);

  form.reset();
});
