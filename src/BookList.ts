import {Book} from './Book'

export class BookList {
    private books:Book[]=[];


    addBook(book:Book){
    this.books.push(book)
        console.log("The Great Gatsby")
        console.log("A Brief History of Time")
    }


    removeBook(id: number): void {
        const initialLength = this.books.length;
        this.books = this.books.filter(book => book.id !== id);
        if (this.books.length < initialLength) {
            console.log(`Book with ID ${id} removed.`);
        } else {
            console.log(`Book with ID ${id} not found.`);
        }
    }
    searchBooks(query: string): Book[] {
        const lowerCaseQuery = query.toLowerCase();
        // @ts-ignore
        return this.books.filter(
            book => {
                return book.title.toLowerCase().includes(lowerCaseQuery) ||
                    book.author.toLowerCase().includes(lowerCaseQuery);
            }
        );
    }
    markAsBorrowed(id: number, borrower: string): void {
        const book = this.books.find(book => book.id === id);
        if (book) {
            if (book.isBorrowed) {
                console.log(`Book with ID ${id} is already borrowed.`);
            } else {
                book.isBorrowed = true;
                book.borrowedBy = borrower;
                console.log(`Book with ID ${id} borrowed by ${borrower}.`);
            }
        } else {
            console.log(`Book with ID ${id} not found.`);
        }
    }
    markAsReturned(id: number): void {
        const book = this.books.find(book => book.id === id);
        if (book) {
            if (!book.isBorrowed) {
                console.log(`Book with ID ${id} is already returned.`);
            } else {
                book.isBorrowed = false;
                book.borrowedBy = null;
                console.log(`Book with ID ${id} has been returned.`);
            }
        } else {
            console.log(`Book with ID ${id} not found.`);
        }
    }
    getBorrowedBooks(): Book[] {
        return this.books.filter(book => book.isBorrowed);
    }

    printBooks(): void {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            console.log("Library Books:");
            this.books.forEach(book => {
                console.log(
                    `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}, Category: ${book.category}, Borrowed: ${book.isBorrowed ? `Yes, by ${book.borrowedBy}` : "No"}`
                );
            });
        }
    }

}