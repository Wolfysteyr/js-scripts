const myName = "Maksims";

function sayMyName(str){
    console.log(str);
}

function countToTen(){
    for (let index = 0; index < 10; index++) {
        console.log(index+1);
        
    }
}

function count(num1, num2){
    for (let index = num1-1; index < num2; index++) {
        console.log(index+1);
        
    }
}

sayMyName(myName);
countToTen();
count(5, 8);




