import { Book } from '../modules/Book.js';
import { UI } from '../modules/UI.js';
import { Store } from '../modules/Store.js';




// DOM Load Event
// We don't need parenthesis here
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book

  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validation
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // Add Book to List
    ui.addBookToList(book);

    // Add to LocalStorage
    // As it's a static method we don't need to use any object instance here
    Store.addBook(book);

    // Show success
    ui.showAlert("Book Added", "success");

    // Clear Fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  // Instanitate UI
  const ui = new UI();

  // Delete Book
  ui.deleteBook(e.target);

  // Remove from LocalStorage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show Alert
  ui.showAlert("Book Removed!", "success");

  e.preventDefault();
});
