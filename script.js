let displayValue = '';
let errorMessage = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        updateDisplay();
    } else {
        displayError('Invalid input');
    }
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayError('Invalid expression');
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
    clearErrorMessage();
}

function displayError(message) {
    errorMessage = message;
    document.getElementById('error-message').textContent = errorMessage;
}

function clearErrorMessage() {
    errorMessage = '';
    document.getElementById('error-message').textContent = errorMessage;
}
