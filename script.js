function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1 = '';
let num2 = '';
let operator = '';

function operate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

let display = document.querySelector('.display');

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

populateDisplay(num1, operator, num2);

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