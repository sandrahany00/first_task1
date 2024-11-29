import {Book} from './Book';
import{ BookList }from './BookList';
import {LibraryUtils} from './LibraryUtils';

const library=new BookList(); //to initialize the library
const books:Book[]=[
    {
        id: LibraryUtils.generateId(),
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isBorrowed: false,
        year: 1925,
        borrowedBy: null,
        category: "Fiction",
    },
    {
        id: LibraryUtils.generateId(),
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        isBorrowed: false,
        year: 1988,
        borrowedBy: null,
        category: "Science",
    },
    {
        id: LibraryUtils.generateId(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isBorrowed: false,
        year: 1960,
        borrowedBy: null,
        category: "Fiction",
    },
    {
        id: LibraryUtils.generateId(),
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        isBorrowed: false,
        year: 2011,
        borrowedBy: null,
        category: "History",
    },
    {
        id: LibraryUtils.generateId(),
        title: "The Show man ",
        author: "ahmed helmy",
        isBorrowed: false,
        year: 2021,
        borrowedBy: null,
        category: "fiction",
    },
];
books.forEach((book) => {
    if (LibraryUtils.validateBook(book)) {
        library.addBook(book);
    } else {
        console.log(`Invalid book data: ${JSON.stringify(book)}`);
    }
});

console.log("\nSearch Results for 'History':");
const searchResults = library.searchBooks("Time");
searchResults.forEach((book) => console.log(`${book.title} by ${book.author}`));



// Display Library Details
console.log("\nAll Books in the Library:");
library.printBooks();

const borrowedBooks = library.getBorrowedBooks();
borrowedBooks.forEach((book) => {
    if (book.title === "The Great Gatsby" && book.borrowedBy === "Sayed") {
        console.log(`${book.title} borrowed by ${book.borrowedBy}`);
    }
});
library.markAsBorrowed(1, "Sayed"); //sayed borrows the first book


// Remove a Book
library.removeBook(2); // Remove "brief history of time"
