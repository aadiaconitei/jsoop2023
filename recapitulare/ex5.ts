// Definim o clasă abstractă "Forma" cu o metodă abstractă "calculeazaAria"
abstract class Forma {
    constructor(public nume: string) {}
  
    abstract calculeazaAria(): number;
  }
  
  // Definim o interfață "Desen" cu o metodă "deseneaza"
  interface Desen {
    deseneaza(): void;
  }
  
  // Implementăm clasa "Cerc" care extinde clasa abstractă "Forma" și implementează interfața "Desen"
  class Cerc extends Forma implements Desen {
    constructor(public raza: number) {
      super("Cerc");
    }
  
    calculeazaAria() {
      return Math.PI * Math.pow(this.raza, 2);
    }
  
    deseneaza() {
      console.log(`Desenez un cerc cu raza ${this.raza}`);
    }
  }
  
  // Creăm un obiect de tip "Cerc"
  const cerc = new Cerc(5);
  
  // Apelăm metoda "calculeazaAria" definită în clasa "Forma"
  console.log(`${cerc.nume} - Aria: ${cerc.calculeazaAria()}`);
  
  // Apelăm metoda "deseneaza" definită în interfața "Desen"
  cerc.deseneaza();
  