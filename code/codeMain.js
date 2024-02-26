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