let btn = document.querySelectorAll("button");
let input = document.getElementById("inputtext");
let result = "";
let previousnum = "";
let operator = "";
let currentnum = "";
let resultis = 0;

let arr = Array.from(btn);

let operations = (op1, op2, operator) => {
    let operator1 = Number(op1);
    let operator2 = Number(op2);
    switch (operator) {
        case "+": return operator1 + operator2;
        case "-": return operator1 - operator2;
        case "*": return operator1 * operator2;
        case "/": return operator1 / operator2;
        case "%": return operator1 % operator2;
    }
};
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (!e.target.classList.contains("equals")) {
            if (!e.target.classList.contains("del")) {
                result += button.innerText;
                input.value = result;
            }
        }
        if (e.target.classList.contains("operator")) {
            if (previousnum !== "" && operator !== "" && currentnum !== "") {
                resultis = operations(previousnum, currentnum, operator);
                previousnum = resultis;
                currentnum = "";
            }
            else if (previousnum === "") {
                previousnum = result.slice(0, -1);
            }
            operator = result.at(-1);
        }
        else if (operator && !e.target.classList.contains("equals")) {
            currentnum = result.slice(result.lastIndexOf(operator) + 1);
        }
        if (e.target.classList.contains("equals")) {
            if (previousnum !== "" && operator !== "" && currentnum !== "") {
                resultis = operations(previousnum, currentnum, operator);
                console.log(resultis);
                input.value = resultis;
                result = String(resultis);
                previousnum = resultis;
                currentnum = "";
                operator = "";
            }
        }
        if (e.target.classList.contains("ac")) {
            result = "";
            previousnum = "";
            operator = "";
            currentnum = "";
            resultis = 0;
            input.value = "";
        }
        if (e.target.classList.contains("del")) {
            result = result.slice(0, -1);
            input.value = result;

            if (operator) {
                currentnum = result.slice(result.lastIndexOf(operator) + 1);
            }
        }
    });
});

/*for (let it of btn) {
    it.addEventListener("click", () => {
        if (it.classList.contains("equals")) {
            result = eval(result);
            input.value = result;
        }
        else if (it.classList.contains("ac")) {
            result = "";
            input.value = "";
        }
        else if (it.classList.contains("del")) {
            result = result.slice(0, -1);
            input.value = result;
        }
        else {
            result += it.innerText;
            input.value = result;
        }
    });
}*/