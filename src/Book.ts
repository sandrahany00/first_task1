type book = {
    id: number;
    title: string;
    author: string;
    isBorrowed: boolean;
    year: number;
    borrowedBy: string|null; //null if the book is not borrowed by anyone
    category: string;
}
export type Book={
    id: number;
    title: string;
    author: string;
    isBorrowed: boolean;
    year: number;
    borrowedBy: string|null; //null if the book is not borrowed by anyone
    category: string;
}