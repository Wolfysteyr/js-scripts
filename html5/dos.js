function count(num1, num2){
    for (let index = num1-1; index < num2; index++) {
        console.log(index+1);
        
    }
}

function thingy(str){
    console.log(str);
    return str;
}

newStr = thingy("balls");

function sum(a, b){
    return a + b;
}

console.log(sum(5, 7));

function biggest(a, b){
    if (a > b){
        return a;
    } else {
        return b;
    }
}
console.log(biggest(20, 100));