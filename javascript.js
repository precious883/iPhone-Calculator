document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    const display = document.getElementById("display");
    let currentInput = "";
  let operator = null;
  let previousInput = null;
  buttons.forEach(button => {
    button.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        if (value === "C") {
            currentInput = "";
        operator = null;
        previousInput = null;
        display.value = "";
   
        } 
        else if (value === "=") {
            if (operator && previousInput !== null) {
                currentInput = evaluateExpression(previousInput, currentInput, operator);
                display.value = currentInput;
                operator = null;
                previousInput = null;

            }
        } 
        else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                if (previousInput === null) {
                  previousInput = currentInput;
                  currentInput = "";
                } else if (operator) {
                  previousInput = evaluateExpression(previousInput, currentInput, operator);
                  display.value = previousInput;
                  currentInput = "";
                }
              }
              operator = value;
        } 
        else {
            currentInput += value;
            display.value = currentInput;
        }

    })
  })
  function evaluateExpression(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
      case "+":
        return (a + b).toString();
      case "-":
        return (a - b).toString();
      case "*":
        return (a * b).toString();
      case "/":
        return (a / b).toString();
      default:
        return b.toString();
    }
  }
})