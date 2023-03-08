let currentNumber = '';
let currentOperator = '';
let resultElement = document.getElementById('result');

function appendNumber(number) {
  currentNumber += number;
  resultElement.value = currentNumber;
}

function appendOperator(operator) {
  currentOperator = operator;
  currentNumber = '';
}

function clearResult() {
  currentNumber = '';
  currentOperator = '';
  resultElement.value = '';
}

function calculateResult() {
  let result = 0;
  switch(currentOperator) {
    case '+':
      result = parseFloat(resultElement.value) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(resultElement.value) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(resultElement.value) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(resultElement.value) / parseFloat(currentNumber);
      break;
  }
  clearResult();
  resultElement.value = result;
}
