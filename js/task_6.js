const validationRef = document.querySelector('#validation-input');

validationRef.addEventListener('blur', event => {
  if (event.target.value.length < 6) {
  return validationRef.classList.add('invalid')}
  if (event.target.value.length >= 6) 
  return validationRef.classList.add('valid');
} 
//  validationRef.classList.add(event.target.value.length < 6 ? 'invalid' : 'valid')
)




