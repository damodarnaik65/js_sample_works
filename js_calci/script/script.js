
var 
function run(num) {
    document.getElementById("display").value += num;
}

function runplus() {
    document.getElementById("display").value += "+";
}

function runminus() {
    document.getElementById("display").value += "-";
}

function runmult() {
    document.getElementById("display").value += "*";
}

function rundiv() {
    document.getElementById("display").value += "/";
}

function evalu() {
    var evalo = eval(document.getElementById("display").value)
    document.getElementById("display").value = evalo;
}

function clearDisplayText() {

    document.getElementById("display").value = " ";
}