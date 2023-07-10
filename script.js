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



// const container = document.querySelector('.container');
const display = document.querySelector('.display')
const nums = document.querySelectorAll('.integer')
const operators = document.querySelectorAll('.operator')
const C = document.querySelector('#clear')
const backspace = document.querySelector('#backspace')

for (let num of nums){
    num.addEventListener('click', () => {
        let currentText = display.textContent;
        if (currentText.toString().length >= 36){
        // text will spill from screen if not limited to 36
            alert('input exceeds character limit')
            return
        };
        display.textContent = currentText  + num.value;
    });
};