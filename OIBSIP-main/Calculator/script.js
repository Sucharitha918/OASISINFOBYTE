
function ac()
{
    document.getElementById("result").value="";
}
function show(input)
{
    document.getElementById("result").value+=input;
}
function res()
{
    var out=eval(document.getElementById("result").value);
    document.getElementById("result").value=out;
}        
