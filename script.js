function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
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

function detectOperator(){
    //if (currentText().toString.search(
    
}

function inputLimit(){
     if (currentText().toString().length >= 36){
        alert("you have exceeded the character limit.")
        return true;
    }
}

function currentText(){
    return display.textContent;
}

function alreadyDecimal(input){
    if (input != ".") return;
    let text = currentText().toString();
    let split = text.split(/[-*+\\]/g);
    console.log(split)

    let decimalsFound = 0;
    for (item in split){
        let decimal = split[item].search(/\./g);
        console.log(decimal)
        if (decimal != -1) decimalsFound++;
    }
    console.log(decimalsFound)
    if (split.length == 2 && decimalsFound == 2){
        alert("numbers cannot contain more than one decimal")
        return true;
    }
    if (split.length === 1 && decimalsFound >= 1){
        alert("numbers cannot contain more than one decimal")
        return true;
    }
    return false;
}

// const container = document.querySelector('.container');
const display = document.querySelector('.display')
const nums = document.querySelectorAll('.integer')
const operators = document.querySelectorAll('.operator')
const C = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')

for (let operator of operators){
    operator.addEventListener('click', () => {
        //detectOperator()
        if (inputLimit()) return;
        display.textContent = currentText()  + operator.value;
    });
};

for (let num of nums){
    num.addEventListener('click', () => {
        if (inputLimit() || alreadyDecimal(num.value)) return;
        display.textContent = currentText()  + num.value;
    });
};