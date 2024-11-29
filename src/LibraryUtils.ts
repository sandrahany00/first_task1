import {Book }from './Book';
export class LibraryUtils {
    private static currentId=0;
    //to generate a new if for each book
    /**
     * Generates a unique ID for a book.
     * @returns A unique number.
     */
    static generateId(): number {
        this.currentId +=1 ;
return this.currentId;
    }

    static validateBook(book: Book): boolean {
        if (
            typeof book.id !== 'number' ||
            typeof book.title !== 'string' ||
            typeof book.author !== 'string' ||
            typeof book.isBorrowed !== 'boolean' ||
            typeof book.year !== 'number' ||
            (book.borrowedBy !== null && typeof book.borrowedBy !== 'string') ||
            typeof book.category !== 'string'
        ) {
            return false;
        }

        if (book.title.trim() === '' || book.author.trim() === '' || book.category.trim() === '') {
            return false;
        }

        if (book.year <= 0) {
            return false;
        }

        return true;
    }


}