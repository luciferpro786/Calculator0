let result = '';
let currentOperation = '';
let previousOperation = '';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.keys button');
    const display = document.getElementById('result');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.textContent;
            handleButtonPress(buttonText);
        });
    });
});

function handleButtonPress(buttonText) {
    switch (buttonText) {
        case 'C':
            clearDisplay();
            break;
        case '←':
            backspace();
            break;
        case '=':
            calculateResult();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(buttonText);
            break;
        default:
            addDigit(buttonText);
    }
}

function clearDisplay() {
    result = '';
    document.getElementById('result').innerText = '';
}

function backspace() {
    result = result.slice(0, -1);
    document.getElementById('result').innerText = result;
}

function calculateResult() {
    try {
        const calculation = eval(result);
        result = calculation.toString();
        document.getElementById('result').innerText = result;
    } catch (error) {
        alert('Invalid operation');
    }
}

function handleOperator(buttonText) {
    if (result !== '' && !isNaN(result)) {
        previousOperation = result;
        result += buttonText;
        document.getElementById('result').innerText = result;
    }
}

function addDigit(buttonText) {
    if (result === '' && buttonText === '0') {
        return;
    }
    result += buttonText;
    document.getElementById('result').innerText = result;
}

function updateDisplay(text) {
    document.getElementById('result').innerText = text;
}