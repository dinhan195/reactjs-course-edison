/** @format */
const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email address format';
const inputName = document.querySelector('input[name=name]');
const inputEmail = document.querySelector('input[name=email]');
const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();
  let nameValid = hasValue(form.elements['name'], NAME_REQUIRED);
  let emailValid = validateEmail(
    form.elements['email'],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );

  if (nameValid && emailValid) {
    alert('Subscribe Successfully!');
  }
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  } else {
    return showSuccess(input);
  }
}
function showError(input, message) {
  let parent = input.parentNode;
  let small = parent.querySelector('small');
  parent.classList.add('error');
  small.innerHTML = message;
}

function showSuccess(input) {
  let parent = input.parentNode;
  let small = parent.querySelector('small');
  parent.classList.remove('error');
  small.innerHTML = '';
}
function validateEmail(input, requiredMsg, message) {
  //   if (!hasValue(input, requiredMsg)) {
  //     return showError(input, required);
  //   }
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, message);
  } else {
    return showSuccess(input);
  }
}
