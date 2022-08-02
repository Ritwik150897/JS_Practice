function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.changeSalary = changeSalary;

    function changeSalary(otherSalary) {
        this.salary = otherSalary;
    }
}
e = new emp(100, "Ritwik", 300000);
console.log("ID: " + e.id + " Name: " + e.name + " Salary: " + e.salary);

e.changeSalary(450000);
console.log("Updated Salary: ") 
console.log("ID: " + e.id + " Name: " + e.name + " Salary: " + e.salary); 