class Test {
    static display() {
        return "static method is invoked"
    }
    static display1() {
        return "static method is invoked again"
    }
}
console.log(Test.display());  
console.log(Test.display1()); 
