let display = document.querySelector("#display");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equals");
let plus = document.querySelector("#add");
let minus = document.querySelector("#subtract");
let star = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let operators = document.querySelector(".operators");


// seven.addEventListener("click",function(){
//     display.value += "7";
// });

function addNumber(number){
    display.value += number;
}

zero.addEventListener("click",function(){addNumber(0)});
one.addEventListener("click",function(){addNumber(1)});
two.addEventListener("click",function(){addNumber(2)});
three.addEventListener("click",function(){addNumber(3)});
four.addEventListener("click",function(){addNumber(4)});
five.addEventListener("click",function(){addNumber(5)});
six.addEventListener("click",function(){addNumber(6)});
seven.addEventListener("click",function(){addNumber(7)});
eight.addEventListener("click",function(){addNumber(8)});
nine.addEventListener("click",function(){addNumber(9)});
clear.addEventListener("click",function(){clearDisplay()});
equal.addEventListener("click", function(){calculate()});
// operators.addEventListener("click", function(event){
//     setOperator(event.key);
//     display.value += event.key;
// });

plus.addEventListener("click",function(){setOperator("+")});
minus.addEventListener("click",function(){setOperator("-")});
star.addEventListener("click",function(){setOperator("*")});
divide.addEventListener("click",function(){setOperator("/")});

let operator = "";
let firstNumber = "";

function setOperator(op){
    firstNumber = display.value;
    operator = op;
    display.value = "";
}

function calculate(){
    let secondNumber = display.value;
    let result;

    if(operator == "+"){
        result = Number(firstNumber) + Number(secondNumber);
    }else if(operator == "-"){
        result = Number(firstNumber) - Number(secondNumber);
    }else if(operator == "*"){
        result = Number(firstNumber) * Number(secondNumber);
    }else if(operator == "/"){
        result = Number(firstNumber) / Number(secondNumber);
    }

    display.value = result;
}

function clearDisplay(){
    display.value = "";
    firstNumber = "";
    operator = "";
}

document.addEventListener("keydown",function(event){
    console.log(event.key);

    if(event.key >= "0" && event.key <= "9"){
        addNumber(event.key);
    }
    if(event.key == "Enter"){
        event.preventDefault();
        calculate();
    }
    if(event.key == "Escape"){
        clearDisplay();
    }
    if(event.key=='+'||event.key=='-'||event.key=='*'||event.key=='/'){
        setOperator(event.key);
    }
});