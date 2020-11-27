document.addEventListener("DOMContentLoaded", () => {
    ///here declare a tempnumber
    let tmpNumber = "";
    let operator = "";
    let holdNumbers = [];
    let holdOperators = [];

    let equationElement = document.getElementById("display");
    document.querySelector(".number").addEventListener("click", (e) => {
        ///to check click on the number
        //alert(e.target.getAttribute("data-value"));
        let dataValue = e.target.getAttribute("data-value");

        tmpNumber = `${tmpNumber}${dataValue}`; //`${} this is use to conctneting..

        if (operator != "") holdOperators.push(operator);
        operator = "";

        console.log("tmp number: " + tmpNumber);

        equationElement.innerHTML = equationElement.innerHTML + dataValue;
    });

    document.getElementById("operation").addEventListener("click", (e) => {
        operator = e.target.getAttribute("data-value");
        if (tmpNumber != "") holdNumbers.push(tmpNumber);

        //here add operations 
        equationElement.innerHTML = equationElement.innerHTML + operator;

        tmpNumber = "";
    });

    document.getElementById("equal").addEventListener("click", (e) => {
        if (tmpNumber != "") {
            holdNumbers.push(tmpNumber);
            tmpNumber = "";
            operator = "";
        }
        console.log("Hold numbers: " + holdNumbers);

        let currentOperator = holdOperators[0];
        let result = "";

        switch (currentOperator) {
            case "+":
                result = plus(holdNumbers);
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
            return parseInt(accumulator) + parseInt(element);
        });

        return total;
    }

    function minus(numbers) {
        let total = numbers.reduce((accumulator, element) => {
            return parseInt(accumulator) - parseInt(element);
        });
        return total;
    }

    function multiply(numbers) {
        let multiply = numbers.reduce((accumulator, element) => {
            return parseInt(accumulator) * parseInt(element);
        });
        return multiply;
    }

    function division(numbers) {
        let division = numbers.reduce((accumulator, element) => {
            return parseInt(accumulator) / parseInt(element);
        });
        return division;
    }
});