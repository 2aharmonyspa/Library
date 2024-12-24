function Book(Author, Title, pages, Read) {
    this.Author = Author;
    this.Title = Title;
    this.pages = pages;
    this.Read = Read;

    this.info = function() {
        console.log(this.Author);
        console.log(this.Title);
        console.log(this.pages);
        console.log(this.Read);
    };
}

function addBookToLibrary(myLibrary, book) {
    myLibrary.push(book); // Push the book object to myLibrary
}

const myLibrary = []; // Ensure myLibrary is an empty array for storing Book objects

const book1 = new Book("J.K. Rowling", "Harry Potter", "384", "yes");
addBookToLibrary(myLibrary, book1); // Add book1 to myLibrary

book1.info(); // Log book1's info

let text = "";
for (let i = 0; i < myLibrary.length; i++) {
    text += myLibrary[i].Title + " Book ";
}

console.log(text); // Output the titles of books in the library
console.log(myLibrary); // Output the full library of books
myLibrary.forEach(book => book.info());
