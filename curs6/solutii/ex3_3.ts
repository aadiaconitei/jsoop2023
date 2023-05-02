abstract class Person2 {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    display(): void{
        console.log(this.name);
    }
    protected salut():string{
        let nume:string = 'Vasile'; 
        if(this.name ==='Ion'){
            nume =  this.name;
        }
        return nume;
        
       
    }


    abstract find(name:string): Person2;
}

 class Employee2 extends Person2 { 
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(name); // must call super()
        this.empCode = code;
    }

    find(name:string): Person2 { 
        return new Employee2(name, 1);
    }
     salut():string{
        let nume:string = 'Vasile'; 
        if(this.name ==='Dan'){
            nume =  this.name;
        }
        return nume;
        
       
    }

}

// let persoana:Person2 = new Person2('Ion');//error

let emp: Employee2 = new Employee2("James", 100);
emp.display(); //James

let emp2: Person2 = emp.find('Steve');