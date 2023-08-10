const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.getElementById("form");
const firstNameEl = document.getElementById("firstname");
const lastNameEl = document.getElementById("lastname");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");

form.addEventListener("submit", function (e) {
  let firstname = firstNameEl.value;
  let lastname = lastNameEl.value;
  let email = emailEl.value;
  let password = passwordEl.value;
  if (firstname === "") {
    setError(firstNameEl);
  } else {
    setSuccess(firstNameEl);
  }

  if (lastname === "") {
    setError(lastNameEl);
  } else {
    setSuccess(lastNameEl);
  }

  if (validationEmail(email)) {
    setSuccess(emailEl);
  } else {
    setError(emailEl);
  }

  if (password === "" || password.length <= 6) {
    setError(passwordEl);
  } else {
    setSuccess(passwordEl);
  }
  e.preventDefault();
});

function validationEmail(email) {
  return re.test(email);
}

function setError(input) {
  const parent = input.parentElement;
  const small = parent.querySelector(".warning");
  const iconError = parent.querySelector(".error-icon");
  small.classList.add("error");
  iconError.classList.add("error");
  input.classList.remove("success");
}
function setSuccess(input) {
  const parent = input.parentElement;
  const small = parent.querySelector(".warning");
  const iconError = parent.querySelector(".error-icon");
  small.classList.remove("error");
  iconError.classList.remove("error");
  input.classList.add("success");
}
