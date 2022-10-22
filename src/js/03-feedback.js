import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
let clientForm = {};

checkLocalStorage();

formEl.addEventListener('input', throttle(checkInput, 500));
formEl.addEventListener('submit', submitForm);

function checkInput() {
  clientForm.email = emailEl.value;
  clientForm.message = messageEl.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(clientForm));
}

function checkLocalStorage() {
  if (localStorage.getItem('feedback-form-state')) {
    clientForm = JSON.parse(localStorage.getItem('feedback-form-state'));
    emailEl.value = clientForm.email || '';
    messageEl.value = clientForm.message || '';
  }
}

function submitForm(e) {
  e.preventDefault();

  if (localStorage.getItem('feedback-form-state')) {
    formEl.reset();
    clientForm = JSON.parse(localStorage.getItem('feedback-form-state'));
    localStorage.removeItem('feedback-form-state');
    console.log(clientForm);
  }
}
