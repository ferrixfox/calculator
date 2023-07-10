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

function multiply(num1, numb2){
    product = num1 * num2;
    return product.toFixed(7)
}

function clear(){
    
}

function del(){

}

function detectOperator(input){

}

function inputLimit(text){
     if (currentText().toString().length >= 36){
        alert("you have exceeded the character limit.")
        return true;
    }
}

function currentText(){
    return display.textContent;
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
        if (inputLimit()) return;
        display.textContent = currentText()  + num.value;
    });
};