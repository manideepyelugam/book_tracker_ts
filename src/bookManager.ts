import { read } from 'fs';
import { readBooks, writeBooks } from './storage';


export interface Book {
  id: number;
  title: string;
  finished: boolean;
}

export const listBooks = ():void => {
        const books = readBooks();
        if(books.length == 0){
            console.log("No books found");
        }else{
            books.forEach((book) => {   
                console.log(`ID: ${book.id}, Title: ${book.title}, Finished: ${book.finished}`);
        })
        }
}


export const addBook = (title : string) : void => {
        const books = readBooks();
        const newBook : Book = {
            id:Date.now(),
            title: title,
            finished: false
        }

        books.push(newBook);

        writeBooks(books);
        console.log(`Book added: ${newBook.title}`);
}



export const finishBook = (id:number): void => {
    const books = readBooks();
    const book = books.find(b => b.id === id);
    if(book){
        book.finished = true;
        writeBooks(books);
        console.log(`Book finished: ${book.title}`);
    }else{
        console.log(`Book with ID ${id} not found.`);
    }
}


export const deleteBook = (title:string):void => {
    const books = readBooks();
    const book = books.find(b => b.title === title);
    if(book){
        const updatedBooks = books.filter(b => b.title !== title);
        writeBooks(updatedBooks);
        console.log(`Book deleted: ${book.title}`);
    }else{
        console.log(`Book with title ${title} not found.`);
    }
}