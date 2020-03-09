//ParseInt turns number into a string
//.value selects the actual value entered into a field
var value1 = parseInt(document.querySelector("#value1").value);
var value2 = parseInt(document.querySelector("#value2").value);
var calcBtn = document.querySelector("#button");
var operator = document.querySelector("#operator").value;
var result = document.querySelector("#result");
var calculate;

calcBtn.addEventListener('click', CalcAns);

//adds functions to the operators abd stores answer as 'calculate'variable
function CalcAns() {
    if(operator == "add") {
        calculate = value1 + value2;
        result.innerHTML = calculate;
    }
    else if(operator == "min") {
        calculate = value1 - value2;
        result.innerHTML = calculate;
    }
    else if(operator == "div") {
        calculate = value1 / value2;
        result.innerHTML = calculate;
    }
    else if(operator == "mul") {
        calculate = value1 * value2;
        result.innerHTML = calculate;
    }
}


