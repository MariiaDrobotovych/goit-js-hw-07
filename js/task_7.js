const rangeRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

rangeRef.addEventListener('input', (e) => {
    textRef.style.fontSize = `${e.target.value}px`;
});


