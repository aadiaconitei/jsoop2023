import {Animal} from './Animal.js';
class Caine extends Animal{
    constructor(greutate, nrPicioare, nume){
        super(greutate, nrPicioare);
        super.comunica('Ham Ham');
        this.nume = nume;

    }
    info(){
        console.log(`Numele meu este ${this.nume}`);
        super.comunica('Ham Ham');
    }
    comunica(mesaj){
        // super.comunica(mesaj);
        console.log(`Nu musc`);

    }


}
export {Animal, Caine};