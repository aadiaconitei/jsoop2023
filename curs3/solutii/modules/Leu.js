import {Animal} from '../modules/Animal.js'

class Leu extends Animal{
    lungime;
    constructor(greutate, lungime){
        super(greutate);
        this.lungime = lungime
    }
    vaneaza(){
        console.log(`Cand nu doarme vaneaza alte animale`);
    }
}
export {Leu}