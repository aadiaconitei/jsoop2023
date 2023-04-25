class Student2 {  
    public studCode: number;  
    protected studName: string;  
    constructor(code: number, name: string){  
        this.studCode = code;  
        this.studName = name;  
        }  
}  
class Person extends Student2 {  
    private department: string;  
  
    constructor(code: number, name: string, department: string) {  
        super(code, name);  
        this.department = department;  
    }  
    public getElevatorPitch() {  
        return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);  
    }  
}  
let joeRoot: Person = new Person(1, "Ion", "PS");  
console.log(joeRoot.getElevatorPitch());  