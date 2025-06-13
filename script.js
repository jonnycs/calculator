let result;

function add() {
  result = Number(num1) + Number(num2);
  if (Number.isInteger(result) === false) {
    result = Number(result.toFixed(4));
  }
}

function subtract() {
  result = Number(num1) - Number(num2);
  if (Number.isInteger(result) === false) {
    result = Number(result.toFixed(4));
  }
}

function multiply() {
  result = Number(num1) * Number(num2);
  if (Number.isInteger(result) === false) {
    result = Number(result.toFixed(4));
  }
}

function divide() {
  result = Number(num1) / Number(num2);
  if (Number.isInteger(result) === false) {
    result = Number(result.toFixed(4));
  }
}

let num1 = '';
let num2 = '';
let operator = '';
let display = document.querySelector('.display');

function operate() {
  switch (operator) {
    case '+':
      add();
      break;
    case '-':
      subtract();
      break;
    case '*':
      multiply();
      break;
    case '/':
      divide();
      break;
  }
  display.textContent = result;
  // If an operator was previously used, carry over the result as num1 for the next calculation.
  // Otherwise, reset num1 to an empty string.
  if (operator === '') {
  num1 = '';
  }
  else {
    num1 = result;
  }
  num2 = '';
  operator = '';
}

function populateDisplay() {
  display.textContent = num1 + ' ' + operator + ' ' + num2;
}

function updateDisplay(updateNum) {
  // Handle num1 input.
  if (num1 === '') {
    num1 = updateNum;
  }
  else if (operator === '') {
    if (num1 !== '0' || updateNum === '.') {
      num1 += updateNum;
    }
    else if (num1 === '0') {
      num1 = updateNum;
    }
  }
  // Handle num2 input
  if (operator !== '') {
    if (num2 === '') {
      num2 = updateNum;
    }
    else if (num2 !== '0' || updateNum === '.') {
      num2 += updateNum;
    }
    else if (num2 === '0') {
      num2 = updateNum;
    }
  }
  populateDisplay();
}

populateDisplay();

let zeroButton = document.querySelector('.button-0');

zeroButton.addEventListener('click', () => {
  if (num1 !== '0' && operator === '' && num2 === '') {
    updateDisplay('0');
  }
  else if (num1 !== '' && operator !== '' && num2 !== '0') {
    updateDisplay('0');
  }
})

let digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

let currentButton;

// Add event listeners to the digit buttons.
for (let i = 0; i < 9; i++) {
  currentButton = document.querySelector(`.button-${digits[i]}`);
  currentButton.addEventListener('click', () => {updateDisplay(`${digits[i]}`)})
}

let operatorNames = ['add', 'multiply', 'divide']
let operators = ['+', '*', '/']

// Add event listeners to all operator buttons, except subtract.
for (let i = 0; i < 3; i++) {
  currentButton = document.querySelector(`.button-${operatorNames[i]}`);
  currentButton.addEventListener('click', () => {
    // Allow operator input only after num1 is set and before num2 is entered.
    if (num1 !== '' && num2 === '') {
      operator = `${operators[i]}`;
      updateDisplay('');
    }
})
}

let subtractButton = document.querySelector('.button-subtract');
subtractButton.addEventListener('click', () => {
  // Allow the user to input a negative number or use the subtraction operator.
  if (num1 === '') {
    num1 += '-'
  }
  else if (num1 !== '' && operator !== '' && operator !== '-') {
    num2 += '-';
  }
  else {
  operator = '-';
  }
  updateDisplay('');
})

let equalsButton = document.querySelector('.button-equals');
equalsButton.addEventListener('click', () => {
  if (num1 !== '' && operator === '') {
    result = num1;
    display.textContent = result;
  }
  else if (num1 !== '' && operator !== '' && num2 === '') {
    num1 = '';
    operator = '';
    populateDisplay();
  }
  else {
    operate();
  }
})

let clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click', () => {
  num1 = '';
  operator = '';
  num2 = '';
  populateDisplay();
})

let decimalButton = document.querySelector('.button-decimal');
decimalButton.addEventListener('click', () => {
  if (num1 === '') {
    updateDisplay('0.');
  }
  else if (num1.includes('.') === false && num2 === '') {
    updateDisplay('.');
  }
  else if (num1 !== '' && operator !== '' && num2.includes('.') === false) {
        updateDisplay('.');
  }
})