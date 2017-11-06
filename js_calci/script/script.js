function run(num)
{
document.frm.result.value +=num;
}

function runplus()
{
document.frm.result.value += "+";
}
function runminus()
{
document.frm.result.value += "-";
}
function runmult()
{
document.frm.result.value += "*";
}
function rundiv()
{
document.frm.result.value += "/";
}
function evalu()
{
var evalo = eval(document.frm.result.value)
document.frm.result.value = evalo;
}