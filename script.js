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

//function inputLimit(){
  //   if (currentText().toString().length >= 15){
    //    alert("you have exceeded the character limit.")
      //  return true;
    //}
//}

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

function alreadyOperator(){
    if(currentText().search(/[-*+\/]/g) != -1){
        return true;
    }
    return false;
}

function solveProblem(operation){
    let findNums = currentText().toString().split(/[-*+\/]/g)
    let num1 = Number(findNums[0]);
    let num2 = Number(findNums[1]);

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
    let newText = currentText().slice(0, -1);
    top_display.textContent = newText;
});

for (let button of btns){
    button.addEventListener('mouseover', () => button.classList.toggle('active'))
    button.addEventListener('mouseleave', () => button.classList.toggle('active'))
    button.addEventListener('mousedown', () => button.classList.toggle('pressed'))
    button.addEventListener('mouseup', () => button.classList.toggle('pressed'))
};


for (let operator of operators){
    operator.addEventListener('click', () => {
        //if (inputLimit()) return;
        if (alreadyOperator()) solveProblem(currentOperation);
        if (currentText() === "") return;
        top_display.textContent = currentText() + " " + operator.value + " ";
        currentOperation = operator.value;
    });
};

for (let num of nums){
    num.addEventListener('click', () => {
        //if (inputLimit() || 
        if (alreadyDecimal(num.value)) return;
        top_display.textContent = currentText()  + num.value;
    });
};

