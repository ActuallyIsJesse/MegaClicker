const content = document.querySelector('#content')
const btn = document.querySelector('#btn2');
let buttonCounter = 1;
btn.addEventListener('click', clickCounter) 

function clickCounter() {
    if (buttonCounter === 1) {
        content.textContent = `Wow, you've pressed that button ${buttonCounter} time!`;
        buttonCounter++;
    } else {
        content.textContent = `Wow, you've pressed that button ${buttonCounter} times!`;
        buttonCounter++;
    }
}