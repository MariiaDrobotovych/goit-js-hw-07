const validationRef = document.querySelector('#validation-input');

validationRef.addEventListener('blur', event => {
  if (event.target.value.length < 6) {
    validationRef.classList.add('invalid');
    validationRef.classList.remove('valid');
  }
  if (event.target.value.length >= 6) {
    validationRef.classList.add('valid');
    validationRef.classList.remove('invalid');
  }
});
