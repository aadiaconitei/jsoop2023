// Local Storage Class
export class Store {
    // It'll take care of fetching them from LocalStorage
    static getBooks() {
      let books;
      if (localStorage.getItem("books") === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem("books"));
      }
  
      return books;
    }
  
    // It'll take care of the book in the UI
    static displayBooks() {
      const books = Store.getBooks();
  
      books.forEach(function (book) {
        const ui = new UI();
        // Add Book to UI
        ui.addBookToList(book);
      });
    }
  
    // Add books to Local Storage
    static addBook(book) {
      // First we get how many books we already have a fixed unchanged value
      const books = Store.getBooks();
  
      // Added new book to our array using .push method
      books.push(book);
      // Added a key-value pair to our LocalStorage in object syntax, where 'books' is the key and JSON.stringify(books) is the value
      localStorage.setItem("books", JSON.stringify(books));
    }
  
    static removeBook(isbn) {
      const books = Store.getBooks();
  
      books.forEach(function (book, index) {
        if (book.isbn === isbn) {
          books.splice(index, 1);
        }
      });
  
      localStorage.setItem("books", JSON.stringify(books));
    }
  }