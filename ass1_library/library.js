"use strict";

let books = [];
const columns = {
    name    :   "Book: ", 
    topic   :   "Topic: ", 
    pages   :   "Pages: ", 
    isbn    :   "ISBN: ",
};

// hardcoded examples
books.push(new Book({name: "Book1", topic: "A story", pages: 129, isbn: "321123-123123"}));
books.push(new Book({name: "Book2", topic: "A second story", pages: 139, isbn: "321123-123124"}));
books.push(new Book({name: "Book3", topic: "A third story", pages: 12, isbn: "321123-123125"}));

/*  I'm aware that this is not how the constructor is supposed to be made, but I find it more easily 
    maintained and dynamic this way (?)
*/
function Book(data) {
    this.getBookInfo = () => {
        let printData = "";
        for (const [key, value] of Object.entries(columns)) {
            printData += value + data[key] + "\n";
        }
        console.log(printData);
        console.log("-----");
    };
}

// print library
function printBooks() {
    books.forEach((book) => {
        book.getBookInfo();
    });
}

// build object for each book and pass to constructor
function buildBooks(numBooks) {
    for (let i = 1; i <= numBooks; i++) {
        let data = {};
        for (const [key, value] of Object.entries(columns)) {
            data[key] = prompt("Entry " + i + ", " + value, "");
        }
        books.push(new Book(data));
    }
}

// prompt on window load
window.onload = () => {
    let numBooks = parseInt(prompt("Number of books to add?", "")); // empty default for IE
    // silently die on cancel or bad number
    if (isNaN(numBooks) || numBooks <= 0) {
        return;
    }
    buildBooks(numBooks);
    printBooks();
};

