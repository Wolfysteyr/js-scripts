function checkNumbers(a, b){
    if(a < b){
        alert("thumbsup");
    }else{
        alert("incorrect, try again");
    }
}

let num1 = parseInt(document.getElementById("num1").value);
let num2 = parseInt(document.getElementById("num2").value);

console.log(num1, num2);

document.getElementById("button").addEventListener("click", check);

function check(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    function checkNumbers(a, b){
        if(a < b){
            alert("thumbsup");
        }else{
            alert("incorrect, try again");
        }
    }
    checkNumbers(num1, num2);
}