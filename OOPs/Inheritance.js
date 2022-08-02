class Car {
    constructor() {
        this.company = "Ford";
    }
}
class Vehicle extends Car {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }
}
var v = new Vehicle("Mustang", "4000000");
console.log(v.company + " " + v.name + " " + v.price);  