let inputString = "sveiki";
function reverseString(str){
    let splitString = str.split("");
    let reversedString = splitString.reverse();
    return reversedString.join("");
}

console.log(reverseString(inputString));