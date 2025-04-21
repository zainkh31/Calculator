// function getValue(number) {
//     var input = document.getElementById("input");
//     input.value += number;
// }

function getValue(number) {
    var input = document.getElementById("input");
    var operators = ['+', '-', '*', '/'];
    if (operators.includes(input.value.slice(-1)) && operators.includes(number)) {
        input.value = "Error: Consecutive operators!";
    } else {
        input.value += number;
    }
}

function equalTo() {
    var input = document.getElementById("input");
    var result = eval(input.value);
    input.value = result;
}

function AllClear() {
    var input = document.getElementById("input");
    input.value = "";
}

function clearValue () {
    var input = document.getElementById("input");
    var removeValue = input.value.slice(0, -1);
    input.value = removeValue;
}

function handleKeyboardInput(event) {
    var input = document.getElementById("input");
    if (event.key === "Enter"       ) {
        equalTo();  
    }
    else if (event.key === "Backspace") {
        clearValue();  
    }
    else if (event.key === "Escape") {
        AllClear();  
    }
    else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        getValue(event.key);  
    }
    else if (!isNaN(event.key) || event.key === ".") {
        getValue(event.key);  
    }
}
document.addEventListener("keydown", handleKeyboardInput);