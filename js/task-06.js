const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", (event) => {
  const inputElValue = event.target.value;
  const inputElData = inputEl.dataset.length;
  if (inputElValue.trim().length === Number(inputElData)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
