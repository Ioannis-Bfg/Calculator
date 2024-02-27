let num_1='';
let num_2='';
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
        case '+':{
            return add(num_1,num_2);
        }
        case '-':{
            return sub(num_1,num_2);
        }
        case '*':{
            return mul(num_1,num_2);
        }
        case '/':{
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
btn_multiplication.addEventListener('click', function() { passVariableToGetInput('*'); });
btn_3.addEventListener('click', function() { passVariableToGetInput('3'); });
btn_2.addEventListener('click', function() { passVariableToGetInput('2'); });
btn_1.addEventListener('click', function() { passVariableToGetInput('1'); });
btn_subtraction.addEventListener('click', function() { passVariableToGetInput('-'); });
btn_dot.addEventListener('click', function() { passVariableToGetInput('.'); });
btn_0.addEventListener('click', function() { passVariableToGetInput('0'); });
btn_addition.addEventListener('click', function() { passVariableToGetInput('+'); });
btn_equals.addEventListener('click', function() { passVariableToGetInput('='); });
btn_clear.addEventListener('click', function() { passVariableToGetInput('clear_row'); });
let past_operator=false;

function getInput(num){
    console.log(num);
    let operator='';
    if(!past_operator){
        if((num==='/' || num==='*' || num==='-' || num==='+')){
            operator=num;
            output.textContent+=num;
            past_operator=true;
        } else {
            output.textContent+=num;
            num_1+=num;
        }
    } else {
        if(num==='='){
            output.textContent+=num;
        }else {
            num_2+=num;
            output.textContent+=num;
        }
    }

    // if(num==='clear_row'){
    //     output.textContent='';
    //     num_1=0;
    //     num_2=0;
    // } else if((num==='/' || num==='x' || num==='-' || num==='+') && !past_operator){
    //     num_1=parseFloat(output.textContent);
    //     operator=num;
    //     output.textContent+=num;
    //     past_operator=true;
    // } else {
    //     if(past_operator){

    //     }
    //     output.textContent+=num;
    // }
    console.log(`num_1 is ${num_1} .... num_2 is ${num_2}`);
}

function passVariableToGetInput(variable) {
    getInput(variable);
}

////////////////////////////////////


