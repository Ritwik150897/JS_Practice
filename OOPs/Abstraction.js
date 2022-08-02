function Vehicle() {
    this.vehicleName = "vehicleName";
    throw new Error("You cannot create an instance of Abstract Class");
}
Vehicle.prototype.display = function () {
    return "Vehicle is: " + this.vehicleName;
}

function Car(vehicleName) {
    this.vehicleName = vehicleName;
}
  
Car.prototype = Object.create(Vehicle.prototype);
var car = new Car("Ford");
console.log(car.display());
