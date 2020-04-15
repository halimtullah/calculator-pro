function getHistory(){
    return document.getElementById("history-value").innerText
}
function printHistory(num){
    document.getElementById("history").innerText=num;
}
function printOutput(num){
    document.getElementById("output-value").innerText=getFormattedNumber(num);
}
function getFormattedNumber(num);{
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.reolace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput).toString();
            if(output){//if output has a value
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
    });
}    
var number = document.getElementsByClassName("operator");
for(var i =0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN) { //if output is  number
            output=output+this.id;
            printOutput(output);
        }
    })
}    