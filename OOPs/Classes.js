class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    detail() {
       console.log("ID: " + this.id + " Name: " + this.name)
    }
}
var e1 = new Employee(101, "Jane");
var e2 = new Employee(102, "John");
e1.detail();
e2.detail();