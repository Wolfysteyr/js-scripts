const car = {make: "Toyota", model: "Yaris", year: 2011};

console.log(car.make, car["model"]);

let currentYear = new Date().getFullYear();

if (currentYear-car.year>12){
    console.log("The car is older than 12 years");
} else {
    console.log("no");
}

if (car.make.includes("Toyota")){
    console.log("Šī mašīna ir Toyota");
}

car.owner = "unknown";