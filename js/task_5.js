const inputNameRef = document.querySelector('#name-input')
const nameOutputRef = document.querySelector('#name-output')

inputNameRef.addEventListener('change', event => {
  nameOutputRef.textContent = event.target.value;
})
