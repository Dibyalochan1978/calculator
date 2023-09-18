
const displayElement = document.getElementById("display");
const clearButton = document.getElementById("clear");

const numberButtons = document.querySelectorAll(".btn.number");
const operatorButtons = document.querySelectorAll(".btn.operator");

let currentInput = ""; 
let currentOperator = ""; 
let result = 0; 


function updateDisplay() {
    displayElement.textContent = currentInput || "0";
}


function clearAll() {
    currentInput = "";
    currentOperator = "";
    result = 0;
    updateDisplay();
}


numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        updateDisplay();
    });
});


operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput !== "") {
            if (currentOperator !== "") {
                calculate();
            }
            currentOperator = button.textContent;
            result = parseFloat(currentInput);
            currentInput = "";
        }
    });
});


const deleteButton = document.getElementById("delete");


deleteButton.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1); 
    updateDisplay();
});




function calculate() {
    const inputValue = parseFloat(currentInput);
    switch (currentOperator) {
        case "+":
            result += inputValue;
            break;
        case "-":
            result -= inputValue;
            break;
        case "*":
            result *= inputValue;
            break;
        case "/":
            result /= inputValue;
            break;
    }
    currentInput = result.toString();
    currentOperator = "";
    updateDisplay();
}


clearButton.addEventListener("click", clearAll);
