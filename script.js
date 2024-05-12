const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('num'));
const operators = Array.from(document.getElementsByClassName('operator'));
const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

const updateDisplay = () => {
	display.value = currentNum;
};

const clearDisplay = () => {
	currentNum = '';
	prevNum = '';
	result = null;
	currentOperator = null;
	updateDisplay();
};

const appendNumber = (number) => {
	currentNum += number;
	updateDisplay();
};

const useOperator = (operator) => {
	if (currentOperator !== null) calculate();
	prevNum = currentNum;
	currentNum = '';
	currentOperator = operator;
};

const calculate = () => {
	const prevNumFloat = parseFloat(prevNum);
	const currentNumFloat = parseFloat(currentNum);
	if (currentOperator === '+') result = prevNumFloat + currentNumFloat;
	else if (currentOperator === '-') result = prevNumFloat - currentNumFloat;
	else if (currentOperator === '*') result = prevNumFloat * currentNumFloat;
	else if (currentOperator === '/') result = prevNumFloat / currentNumFloat;
	currentNum = result.toString();
	prevNum = '';
	result = null;
	currentOperator = null;
	updateDisplay();
};

const handleDecimal = () => {
	if (!currentNum.includes('.')) appendNumber('.');
};

buttons.map((button) => button.addEventListener('click', () => appendNumber(button.value)));
operators.map((operator) => operator.addEventListener('click', () => useOperator(operator.value)));
decimal.addEventListener('click', handleDecimal);
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', calculate);