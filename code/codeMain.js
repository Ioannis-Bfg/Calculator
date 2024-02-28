let num_1='';
let num_2='';
let op='';

/////////////////////////////////

function add(a, b) {
    let res = +a + +b;
    return formatResult(res);
}

function sub(a, b) {
    let res = +a - +b;
    return formatResult(res);
}

function mul(a, b) {
    let res = +a * +b;
    return formatResult(res);
}

function div(a, b) {
    let res = +a / +b;
    return formatResult(res);
}

function formatResult(result) {
    if (result % 1 !== 0) {
        result = result.toFixed(4).replace(/\.?0+$/, ''); 
    }
    return result;
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
        case 'X':{
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
btn_multiplication.addEventListener('click', function() { passVariableToGetInput('X'); });
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
    if(!past_operator){
        if(num==='clear_row'){
            output.textContent=' ';
            num_1='';
            num_2='';
            return;
        }
        else if((num==='/' || num==='X' || num==='-' || num==='+')){
            op=num;
            output.textContent+=num;
            past_operator=true;
        } else if(num==='='){
            let lastc = output.textContent.charAt(output.textContent.length - 1);
            if(lastc==='='){
                output.textContent=num_1;
                return;
            } else{
                output.textContent+=num;
            }
        } 
        else {
            output.textContent+=num;
            num_1+=num;
        }
    } else {
        if(num==='clear_row'){
            output.textContent=' ';
            num_1='';
            num_2='';
            past_operator=false;
            return ;
        }
         else if(num==='/' || num==='X' || num==='-' || num==='+' ){
            let lastChar = output.textContent.charAt(output.textContent.length - 1);
            if(lastChar==='X' || lastChar==='/' || lastChar==='+' || lastChar==='-'){
                alert('ERROR');
                past_operator=false;
                num_1='';
                num_2='';
                output.textContent='';
                return ;
            }else {
                output.textContent+=num;
                let result=operate(op,num_1,num_2);
                console.log(result);
                op=num;
                // if(result.length>)
                output.textContent=''
                output.textContent+=result;
                output.textContent+=op;
                num_1=result;
                num_2='';
            }
        }else if(num==='='){
            output.textContent+=num;
            let result=operate(op,num_1,num_2);
            console.log(result);
            // if(result.length>)
            output.textContent=''
            output.textContent+=result;
            num_1=result;
            past_operator=false;
            num_2='';
        }else {
            num_2+=num;
            output.textContent+=num;
        }
    }
    console.log(`num_1 is ${num_1} .... num_2 is ${num_2}`);
}

function passVariableToGetInput(variable) {
    getInput(variable);
}

////////////////////////////////////


