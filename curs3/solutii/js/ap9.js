import {Leu} from '../modules/Leu.js';
import {Catel} from '../modules/Caine.js';
import { Animal } from '../modules/Animal.js';

const animal = new Animal(0.3);
animal.comunica('Oac oac');

const leu = new Leu(200, 2);
leu.comunica('Uauuuuu');

const catel = new Catel(3,true);
catel.comunica('Ham Ham');
catel.musca();
