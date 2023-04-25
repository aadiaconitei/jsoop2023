// defining interface for class  
interface Person1 {  
    firstName: string;  
    lastName: string;  
    age?: number;  //proprietate optionala
    getSalary: (nr:number) => number;// arrow function
    FullName():string;  
    GetAge():number;  
}  
// o clasa poate implementa mai multe interfete  
class Employee implements Person1 {  
    firstName: string;  
    lastName: string;  
    age:number;  
    salary:number; 
   

    setSalary(salary:number){
        this.salary = salary;

    }
    getSalary = (salary:number):number => {
        return this.salary = salary;

    }
    FullName() {  
        return this.firstName + ' ' + this.lastName;  
    }  
    GetAge() {  
        return this.age;  
    }  
    constructor(firstN: string, lastN: string, getAge: number, salary:number) {  
        this.firstName = firstN;  
        this.lastName = lastN;  
        this.age = getAge; 
        this.salary = salary; 
    }  
    public getElevatorPitch(): string {
        throw new Error("Method not implemented.");
    }
    
}  
// using the class that implements interface  
let myEmployee = new Employee('Ion', 'Ion', 25, 1500);  
let myFullName = myEmployee.FullName();  
let myAge = myEmployee.GetAge(); 
let salary =  myEmployee.getSalary(1000);
console.log("Name of Person: " +myFullName + '\nAge: ' + myAge +' ' + salary); 