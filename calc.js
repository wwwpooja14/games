document.addEventListener("DOMContentLoaded", () => {
    ///here declare a tempnumber
    let tmpNumber = "";
    let holdNmbers = [];
    let holdOperators = [];

    let equationElement = document.getElementById("display");
    document.querySelector(".number").addEventListener("click", (e) => {
        ///to check click on the number
        //alert(e.target.getAttribute("data-value"));
        let dataValue = e.target.getAttribute("data-value");

        tmpNumber = `${tmpNumber}${dataValue}`; //`${} this is use to conctneting..


        if (operator != "") holdOperators.push(operator);
        operator = "";


        console.log("temp number:" + tmpNumber);
        equationElement.innerHTML = equationElement.innerHTML + dataValue;

    });
    document.getElementById("operation").addEventListener("click", (e) => {
        operator = e.target.getAttribute("data-value");
        if (tmpNumber != "") holdNmbers.push(tmpNumber);

        //here add operations 
        equationElement.innerHTML = equationElement.innerHTML + operator;

        tmpNumber = "";
    });

    document.getElementById("equal").addEventListener("click", (e) => {
        if (tmpNumber != "") {
            holdNmbers.push(tmpNumber);
            tmpNumber = "";
            operator = "";
        }
        console.log("Hold Numbers:" + holdNmbers);

        let currentOperator = holdOperators[0];

        switch (currentOperator) {
            case "+":
                result = plus(holdNmbers);
                break;
            case "-":
                result = minus(holdNumbers);
                break;
            case "*":
                result = multiply(holdNumbers);
                break;
            case "/":
                result = division(holdNumbers);
                break;
        }

        equationElement.innerHTML = result;
    });

    function plus(numbers) {
        let total = numbers.reduce((accumulator, element) => {
            return pareInt(accumulator) + preInt(element);
        });
        return total;
    }
});