function add(num1, num2){
    top_display.textContent = num1 + num2;
}

function subtract(num1, num2){
    top_display.textContent = num1 - num2;
}

function divide(num1, num2){
    if (num2 === 0){
        alert("can't divide by 0!")
        top_display.textContent = "";
        return;
    }
    let quotient = num1 / num2;
    top_display.textContent = quotient;
 }

function multiply(num1, num2){
    product = num1 * num2;
    top_display.textContent = product;
}

function currentText(){
    return top_display.textContent;
}

function alreadyDecimal(input){
    if (input != ".") return;
    let split = currentText().toString().split(/[-*+\/]/g);

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

function alreadyOperator(attemptedOperation){
    let string = currentText().toString();

    if (string.length === 0) return false;
    if (string[0] === "-"){
        let subString = string.slice(1,);
        if (subString.search(/[-*+\/]/g) != -1){
            return true;   
        }
        return false;
    }
    if((currentOperation === "*" || currentOperation === "/")
        && attemptedOperation === "-") return false; 
    
    if(currentText().search(/[-*+\/]/g) != -1){
        return true;
    }
    return false;
}

function solveProblem(operation){
    let findNums = currentText().toString().split(" ")
    let num1 = Number(findNums[0]);
    let num2 = Number(findNums[2]);

    switch(operation){
    case "+":
        add(num1, num2);
        break;
    case "-":
        subtract(num1, num2);
        break;
    case "*":
        multiply(num1, num2);
        break;
    case "/":
        divide(num1, num2)
        break;
    }
    display.textContent = currentText()
}

const top_display = document.querySelector('.top_display')
const display = document.querySelector('.display')
const nums = document.querySelectorAll('.integer')
const operators = document.querySelectorAll('.operator')
const btns = document.querySelectorAll('button')
let currentOperation = "";

document.querySelector('.equals').addEventListener('click', () => {
    solveProblem(currentOperation)
    top_display.textContent = currentText();
});

document.querySelector('#clear').addEventListener('click', () => {
    top_display.textContent = "";
    display.textContent = "";
});

document.querySelector('#backspace').addEventListener('click', () => {
    let newText = currentText();
    index = newText.length - 1
    if (newText[index] === " "){
        newText = newText.slice(0, -3)
    }
    else newText = newText.slice(0, -1);
    top_display.textContent = newText;
});

for (let button of btns){
    //button.addEventListener('mouseover', () => button.classList.toggle('active'))
    //button.addEventListener('mouseleave', () => button.classList.toggle('active'))
    //button.addEventListener('mousedown', () => button.classList.toggle('pressed'))
    //button.addEventListener('mouseup', () => button.classList.toggle('pressed'))
};


for (let operator of operators){
    operator.addEventListener('click', () => {
        if (alreadyOperator(operator.value)) solveProblem(currentOperation);
        if (currentText() === "" && operator.value != "-") return;
        if ((currentOperation === "*" || "/") && operator.value === "-"){
            top_display.textContent = currentText() + operator.value;
            return;
        } 
        top_display.textContent = currentText() + " " + operator.value + " ";
        currentOperation = operator.value;
    });
};

for (let num of nums){
    num.addEventListener('click', () => {
        if (alreadyDecimal(num.value)) return;
        top_display.textContent = currentText()  + num.value;
    });
};

