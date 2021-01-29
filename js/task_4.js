const counterValue = document.querySelector('#value');
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

increment.addEventListener('click', () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
})

decrement.addEventListener('click', () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
})

