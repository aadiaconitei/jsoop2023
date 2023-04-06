
class UI {
    addBookToList(book) {
      const list = document.getElementById("book-list");
  
      // Create tr element
      const row = document.createElement("tr");
  
      // Insert cols
      row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td>${book.isbn}</td>
           <td><a href="#" class="delete">X</a></td>
         `;
  
      list.appendChild(row);
    }
  
    showAlert(message, className) {
      // Create a div
      const div = document.createElement("div");
      // Add classes
      div.className = `alert ${className}`;
      // Add Text
      div.appendChild(document.createTextNode(message));
      // Get Parent
      const container = document.querySelector(".container");
  
      // Put it before form
  
      // Get Form
      const form = document.querySelector("#book-form");
      // Insert Alert
      container.insertBefore(div, form);
  
      // Timeout after 3 sec
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  
    deleteBook(target) {
      if (target.className === "delete") {
        target.parentElement.parentElement.remove();
      }
    }
  
    clearFields() {
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("isbn").value = "";
    }
  }

  export { UI }