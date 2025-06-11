let result;

function add() {
  result = Number(num1) + Number(num2);
}

function subtract() {
  result = Number(num1) - Number(num2);
}

function multiply() {
  result = Number(num1) * Number(num2);
}

function divide() {
  result = Number(num1) / Number(num2);
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
  num1 = '';
  num2 = '';
  operator = '';
}

function populateDisplay() {
  display.textContent = num1 + ' ' + operator + ' ' + num2;
}

function updateDisplay(updateNum) {
  if (operator === '' && num1 === '') {
    num1 = updateNum;
  }
  else if (operator === '') {
    num1 += updateNum;
  }
  else if (num2 === '') {
    num2 = updateNum;
  }
  else {
    num2 += updateNum;
  }
  populateDisplay();
}

populateDisplay();

let zeroButton = document.querySelector('.button-0');

zeroButton.addEventListener('click', () => {
  // Update display only if 0 is not the first number input.
  if (num1 !== '' && operator === '') {
    updateDisplay('0');
  }
  else if (num2 !== '') {
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

let operatorNames = ['add', 'subtract', 'multiply', 'divide']
let operators = ['+', '-', '*', '/']

// Add event listeners to the operator buttons.
for (let i = 0; i < 4; i++) {
  currentButton = document.querySelector(`.button-${operatorNames[i]}`);
  currentButton.addEventListener('click', () => {
  if (num1 !== '' && num2 === '') {
    operator = `${operators[i]}`;
    updateDisplay('');
  }
})
}

let equalsButton = document.querySelector('.button-equals');
equalsButton.addEventListener('click', () => {operate();})

let clearButton = document.querySelector('.button-clear');
clearButton.addEventListener('click', () => {
  num1 = '';
  operator = '';
  num2 = '';
  populateDisplay();
})