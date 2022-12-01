let num1 = 9
let num2 = 5
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    let addResult = num1 + num2
    sumEl.textContent = "Sum: " + addResult   
}
function subtract() {
    let subtractResult = num1 - num2
    sumEl.textContent = "Sum: " + subtractResult  
}
function divide() {
    let divideResult = num1 / num2
    sumEl.textContent = "Sum: " + divideResult   
}
function multiply() {
    let multiplyResult = num1 * num2
    sumEl.textContent = "Sum: " + multiplyResult   
}
