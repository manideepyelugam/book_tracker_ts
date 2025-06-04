import fs from 'fs';
import path from 'path';
import { Book } from './bookManager';

const filePath = path.join(__dirname, '..', 'books.json');

export const readBooks = (): Book[] => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export const writeBooks = (books: Book[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
};