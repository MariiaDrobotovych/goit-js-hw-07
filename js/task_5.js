const inputNameRef = document.querySelector('#name-input')
const nameOutputRef = document.querySelector('#name-output')

inputNameRef.addEventListener('input', event => {
  if (!event.target.value.length){
    return nameOutputRef.textContent = 'незнакомец';
  } 
  nameOutputRef.textContent = event.target.value;
})
