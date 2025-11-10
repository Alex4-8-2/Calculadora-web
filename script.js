let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '' && !isNaN(currentInput.slice(-1))) {
        currentInput += op;
        display.value = currentInput;
    }
}

function appendDot() {
    let lastNumber = currentInput.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}