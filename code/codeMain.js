let num_1=0;
let num_2=0;
let op='';

/////////////////////////////////

function add(a,b){
    return +a + +b;
}

function sub(a,b){
    return +a - +b;
}

function mul(a,b){
    return +a * +b;
}

function div(a,b){
    return +a/+b;
}

///////////////////////////////

function operate(op,num_1,num_2){
    switch(op){
        case 'addition':{
            return add(num_1,num_2);
        }
        case 'subtraction':{
            return sub(num_1,num_2);
        }
        case 'multiplication':{
            return mul(num_1,num_2);
        }
        case 'division':{
            return div(num_1,num_2);
        }
    }
}

/////////////////////////////////////

const btn_7 = document.querySelector("#btn7");
const btn_8 = document.querySelector("#btn8");
const btn_9 = document.querySelector("#btn9");
const btn_division = document.querySelector("#btn_division");
const btn_6 = document.querySelector("#btn6");
const btn_5 = document.querySelector("#btn5");
const btn_4 = document.querySelector("#btn4");
const btn_multiplication = document.querySelector("#btn_multiplication");
const btn_3 = document.querySelector("#btn3");
const btn_2 = document.querySelector("#btn2");
const btn_1 = document.querySelector("#btn1");
const btn_subtraction = document.querySelector("#btn_subtraction");
const btn_0 = document.querySelector("#btn0");
const btn_dot = document.querySelector("#btn_dot");
const btn_addition = document.querySelector("#btn_addition");
const btn_equals = document.querySelector("#btn_equals");
const btn_clear = document.querySelector("#clear_row");
const output=document.querySelector('#output');

btn_7.addEventListener('click', function() { passVariableToGetInput('7'); });
btn_8.addEventListener('click', function() { passVariableToGetInput('8'); });
btn_9.addEventListener('click', function() { passVariableToGetInput('9'); });
btn_division.addEventListener('click', function() { passVariableToGetInput('/'); });
btn_6.addEventListener('click', function() { passVariableToGetInput('6'); });
btn_5.addEventListener('click', function() { passVariableToGetInput('5'); });
btn_4.addEventListener('click', function() { passVariableToGetInput('4'); });
btn_multiplication.addEventListener('click', function() { passVariableToGetInput('x'); });
btn_3.addEventListener('click', function() { passVariableToGetInput('3'); });
btn_2.addEventListener('click', function() { passVariableToGetInput('2'); });
btn_1.addEventListener('click', function() { passVariableToGetInput('1'); });
btn_subtraction.addEventListener('click', function() { passVariableToGetInput('-'); });
btn_dot.addEventListener('click', function() { passVariableToGetInput('.'); });
btn_0.addEventListener('click', function() { passVariableToGetInput('0'); });
btn_addition.addEventListener('click', function() { passVariableToGetInput('+'); });
btn_equals.addEventListener('click', function() { passVariableToGetInput('='); });
btn_clear.addEventListener('click', function() { passVariableToGetInput('clear_row'); });

function getInput(num){
    console.log(num);
    if(num==='clear_row'){
        output.textContent='';
    } else {
        output.textContent+=num;
    }
}

function passVariableToGetInput(variable) {
    getInput(variable);
}

////////////////////////////////////


