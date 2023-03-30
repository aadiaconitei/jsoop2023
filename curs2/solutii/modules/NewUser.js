class NewUser{
    #varsta; // proprietate privata
    #password; // proprietate privata
    constructor(id,nume,email){
        //setam proprietatile
        this._id = id;// proprietate ptotected
        this.nume = nume;
        this._email = email; // proprietate ptotected
        this.#varsta=18;
        this.#password ='12345';
    }
    get id(){
        return this._id;
    }
    // Adresa de email este protected atunci ii definim getter sar nu setam setter
    get email(){
        return this._email;
    }
    
    get varsta(){
        return this.#varsta;
    }
    get password(){
        return this.#password;
    }
    // set varsta(newVarsta){
    //     console.log('sunt in setter');
    //     this.#varsta = newVarsta;
    // }
    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} ore pe zi`);
        console.log(`Parola mea este ${this.#password}`);
    }

}

class Abonat extends NewUser{
    constructor(id, nume, email){
        super(id, nume, email);

    }
    info (){
        console.log(`Numele meu este ${this.nume} cu adresa de email ${this.email}`);
        // console.log(`Parola mea este ${this.#password}`);
    }
   
}
export {NewUser, Abonat}
