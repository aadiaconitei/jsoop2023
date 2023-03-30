import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion','ion@ion.com',22);
user.doarme(7);
user.mananca(200);
console.log(user);
user.nume = 'Dan';
//user.myAge = -23;
 user._varsta = -25;
//user.#email = 'dan2@dan.ro';
console.log(user);