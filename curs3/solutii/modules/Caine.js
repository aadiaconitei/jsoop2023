import {Animal} from '../modules/Animal.js';
class Catel extends Animal{
    cainerau;
    constructor(greutate, rau){
        super(greutate);
        this.cainerau = rau;
    }
    musca(){
        if(this.cainerau){
            console.log('Atentie caine rau!');

        }
        else{
            console.log(' Acest catel poate fi mangaiat.');
        }
    }
}
export {Catel}