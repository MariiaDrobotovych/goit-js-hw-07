const validationRef = document.querySelector('#validation-input');

validationRef.addEventListener('blur', event => {
  const value = event.target.value;
  validationRef.classList.add(value.length <= 6 ? 'invalid' : 'valid')
  // if (value.length <= 6) {
  //   validationRef.classList.add('invalid')
  // } else {
  //   validationRef.classList.add('valid');
  // } 
  console.log(value);
})