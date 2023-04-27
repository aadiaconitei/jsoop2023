// ES6 version

class Product {
    static sale=0;
    constructor(name, price, percent=10) {
        this.name = name;
        if(Product.sale ==1){
            this.price = price - (price * percent / 100)
        }
        else{
            this.price = price;
        }
        
    }
    static orderByPrice(a, b) {
        return a.price - b.price;
    }
}

class Book extends Product {
    constructor(name, price, author) {
        super(name, price);
        this.author = author;
    }
}

class Basket {
    constructor() {
        this.products = [];
    }

    addProduct(amount, product) {
        this.products.push(...Array(amount).fill(product));
    }

    calcTotal() {
        return this.products
            .map(product => product.price)
            .reduce((a, b) => a + b, 0);
    }

    printShoppingInfo() {
        console.log('Total: ' + this.calcTotal());
    }
}

console.log(typeof Product);
const bread = new Product('bread', 1);
console.log(typeof bread);
const water = new Product('water', 0.25);
const products = [
    new Product("Product 1", 22),
    new Product("Product 2", 33),
    new Product("Product 3", 18),
    new Product("Product 4", 101),
    new Product("Product 5", 39)
];
// console.log(products);
products.sort(Product.orderByPrice);
console.log(products);
Product.sale=1;
const products2 = [
    new Product("Product 1", 22),
    new Product("Product 2", 33),
    new Product("Product 3", 18),
    new Product("Product 4", 101),
    new Product("Product 5", 39)
];
console.log(products2);
const faust = new Book('faust', 12.5, 'Goethe');

const basket = new Basket();
basket.addProduct(2, bread);
basket.addProduct(3, bread);
basket.addProduct(3, water);
basket.addProduct(1, faust);
basket.printShoppingInfo();
