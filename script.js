const display = document.getElementById("display");
const num1 = document.getElementById("btn1");
const num2 = document.getElementById("btn2");
const num3 = document.getElementById("btn3");
const num4 = document.getElementById("btn4");
const num5 = document.getElementById("btn5");
const num6 = document.getElementById("btn6");
const num7 = document.getElementById("btn7");
const num8 = document.getElementById("btn8");
const num9 = document.getElementById("btn9");
const num0 = document.getElementById("btn0");

const btnAdd = document.getElementById("btn-add");
const btnsubtract = document.getElementById("btn-subtract");
const btnMultiply = document.getElementById("btn-multiply");
const btnDivide = document.getElementById("btn-divide");
const btnEqual = document.getElementById("btn-equal");
const btnClear = document.getElementById("btn-clear");
const btnDot = document.getElementById("btn-dot");
const btnUndo = document.getElementById("btn-undo");

num1.addEventListener("click", () => populateDisplay(1));
num2.addEventListener("click", () => populateDisplay(2));
num3.addEventListener("click", () => populateDisplay(3));
num4.addEventListener("click", () => populateDisplay(4));
num5.addEventListener("click", () => populateDisplay(5));
num6.addEventListener("click", () => populateDisplay(6));
num7.addEventListener("click", () => populateDisplay(7));
num8.addEventListener("click", () => populateDisplay(8));
num9.addEventListener("click", () => populateDisplay(9));
num0.addEventListener("click", () => populateDisplay(0));

btnAdd.addEventListener("click", () => pressedOperater("+"));
btnsubtract.addEventListener("click", () => pressedOperater("-"));
btnMultiply.addEventListener("click", () => pressedOperater("*"));
btnDivide.addEventListener("click", () => pressedOperater("/"))
btnClear.addEventListener("click", clear);
btnEqual.addEventListener("click", () => operate(a, b, operater));
btnDot.addEventListener("click", () => populateDisplay("."));
btnUndo.addEventListener("click", removeChar);

let a = null;
let b = null;
let operater = null;

function populateDisplay(input) {
    if(b == null){
        display.textContent = null;
    }

    if(display.textContent.length >= 7) return;

    display.textContent += input;
    b = display.textContent;

    if(display.textContent.includes(".")){
        btnDot.disabled = true;
    }
    else{
        btnDot.disabled = false;
    }
}

function pressedOperater(operation){
    if(a != null && b != null){
        operate(a, b, operater);
    }
    a = b;
    operater = operation;
    b = null;
}

function operate (a1, b1, operation) {
    if(a === null || b === null) return display.textContent = "ERROR";
    let numA = parseFloat(a1);
    let numB = parseFloat(b1);
    switch(operation){
        case "+":
            display.textContent = parseFloat(add(numA, numB).toFixed(2));
            break;

        case "-":
            display.textContent = parseFloat(subtract(numA, numB).toFixed(2));
            break;

        case "*":
            display.textContent = parseFloat(multiply(numA, numB).toFixed(2));
            break;

        case "/":
            display.textContent = parseFloat(divide(numA, numB).toFixed(2));
            break;

        default:
            display.textContent = "ERROR";
            break;
    }
    a = null;
    b = display.textContent;
}

function clear(){
    display.textContent = null;
    a = null;
    b = null;
    operater = null;
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0) return display.textContent = "You can't divide by 0!"
    return a / b;
}

function removeChar(){
   b = display.textContent = display.textContent.slice(0, display.textContent.length-1);
}