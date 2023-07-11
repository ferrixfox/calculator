function add(num1, num2){
    display.textContent = num1 + num2;
}

function subtract(num1, num2){
    display.textContent = num1 - num2;
}

function divide(num1, num2){
    let quotient = num1 / num2;
    return quotient.toFixed(7);
}

function multiply(num1, num2){
    product = num1 * num2;
    return product.toFixed(7)
}

function clear(){
    
}

function del(){

}

function inputLimit(){
     if (currentText().toString().length >= 15){
        alert("you have exceeded the character limit.")
        return true;
    }
}

function currentText(){
    return display.textContent;
}

function alreadyDecimal(input){
    if (input != ".") return;
    let split = currentText().toString().split(/[-*+\\]/g);

    let decimalsFound = 0;
    for (item in split){
        let decimal = split[item].search(/\./g);
        console.log(decimal)
        if (decimal != -1) decimalsFound++;
    }
    if ((split.length == 2 && decimalsFound == 2)||
        (split.length === 1 && decimalsFound >= 1)){
        alert("numbers cannot contain more than one decimal")
        return true;
    }
    return false;
}

function alreadyOperator(){
    if(currentText().search(/[-*+\\]/g) != -1){
        return true;
    }
    return false;
}

function solveProblem(operation){
    let findNums = currentText().toString().split(/[-*+\\]/g)
    let num1 = Number(findNums[0]);
    let num2 = Number(findNums[1]);

    switch(operation){
    case "+":
        add(num1, num2);
        break;
    case "-":
        subtract(num1, num2);
        break;
    }
    top_display.textContent = currentText()
}

const top_display = document.querySelector('.top_display')
const display = document.querySelector('.display')
const nums = document.querySelectorAll('.integer')
const operators = document.querySelectorAll('.operator')
const C = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')

let currentOperation = "";

for (let operator of operators){
    operator.addEventListener('click', () => {
        if (inputLimit()) return;
        if (alreadyOperator()){
            solveProblem(currentOperation)
        }
        display.textContent = currentText() + " " + operator.value + " ";
        currentOperation = operator.value;
    });
};

for (let num of nums){
    num.addEventListener('click', () => {
        if (inputLimit() || alreadyDecimal(num.value)) return;
        display.textContent = currentText()  + num.value;
    });
};