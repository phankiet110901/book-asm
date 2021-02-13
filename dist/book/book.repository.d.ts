import { Repository } from 'typeorm';
import { BookEntity } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookRepository extends Repository<BookEntity> {
    getAllBook(): Promise<BookEntity>;
    createBook(createBookDto: CreateBookDto): Promise<BookEntity>;
    insertImgBook(fileName: string, idBook: string): Promise<BookEntity>;
    getDetailBook(idBook: string): Promise<BookEntity>;
    getBookByCategory(idCate: string): Promise<BookEntity[]>;
    deleteBook(idBook: string): Promise<BookEntity>;
    editBook(updateBookDto: UpdateBookDto, idBook: string): Promise<BookEntity>;
    postRating(idBook: string, rating: number): Promise<BookEntity>;
}
