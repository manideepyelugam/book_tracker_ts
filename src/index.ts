import {listBooks, addBook, finishBook, deleteBook} from './bookManager';
import { readBooks } from './storage';


const args = process.argv.slice(2);
const command = args[0];


switch(command){
    case "add":
        const title = args.slice(1).join(" ");
        if(title){
            addBook(title);
        }else{
            console.log("Please provide a title for the book.");
        }
        break;
    
    case "list":
        listBooks();
        break;

    case "finish":
        const books = readBooks();
        if(books.length === 0){
            console.log("No books found to finish.");
            break;
        }
        const book = books.find(b => b.title === args[1]);
        if(!book){
            console.log(`Book with title "${args[1]}" not found.`);
            break;
        }

        const finishId = book.id;
        if (isNaN(finishId)) {
                console.log("❗ Provide a valid book ID.");
        } 
        finishBook(finishId);
         break;

    case "delete":
        const deleteId = (args[1]);
        if (!deleteId) {
            console.log("❗ Please provide a book ID to delete.");
            break;
        }
        deleteBook(deleteId);
        break;  

    default:
        console.log("❗ Unknown command. Use 'add', 'list', 'finish', or 'delete'.");
        console.log("Usage:");
        console.log("  add <title> - Add a new book with the given title.");
        console.log("  list - List all books.");
        console.log("  finish <id> - Mark a book as finished by its ID.");
        console.log("  delete <id> - Delete a book by its ID.");
        break;


        
}