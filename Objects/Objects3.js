function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp(100, "Ritwik", 100000);

console.log("ID: " + e.id + " Name: " + e.name + " Salary: " + e.salary);