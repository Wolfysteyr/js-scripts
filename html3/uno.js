let person = {name: "Dave", age: 27, isStudent:true};

console.log(person.name);
console.log(person['name']);

if (person.age >= 18){
    console.log("Hello!");
}else{
    console.log("minors dni");
}

if (person.isStudent == true){
    console.log("gg");
}else{
    console.log("win");
}
 person.course = "PT2022";
 