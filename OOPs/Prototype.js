function Employee(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Employee.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

var employee1 = new Employee("John", "Doe");
var employee2 = new Employee("Jane", "Walker");

console.log(employee1.fullName());
console.log(employee2.fullName());