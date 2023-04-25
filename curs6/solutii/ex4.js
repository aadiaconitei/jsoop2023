// o clasa poate implementa mai multe interfete  
var Employee = /** @class */ (function () {
    function Employee(firstN, lastN, getAge, salary) {
        var _this = this;
        this.getSalary = function (salary) {
            return _this.salary = salary;
        };
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
        this.salary = salary;
    }
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.FullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Employee.prototype.GetAge = function () {
        return this.age;
    };
    Employee.prototype.getElevatorPitch = function () {
        throw new Error("Method not implemented.");
    };
    return Employee;
}());
// using the class that implements interface  
var myEmployee = new Employee('Ion', 'Ion', 25, 1500);
var myFullName = myEmployee.FullName();
var myAge = myEmployee.GetAge();
var salary = myEmployee.getSalary(1000);
console.log("Name of Person: " + myFullName + '\nAge: ' + myAge + ' ' + salary);
