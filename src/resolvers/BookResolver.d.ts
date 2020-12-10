import { Book } from '../models/Book';
import { CreateBookInput } from '../inputs/CreateBookInput';
import { UpdateBookInput } from '../inputs/UpdateBookInput';
export declare class BookResolver {
    books(): Promise<Book[]>;
    book(id: string): Promise<Book | undefined>;
    createBook(data: CreateBookInput): Promise<Book>;
    updateBook(id: string, data: UpdateBookInput): Promise<Book>;
    deleteBook(id: string): Promise<boolean>;
}
