import { BookEntity } from './book.entity';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getAllBook(): Promise<BookEntity>;
    createBook(createBookDto: CreateBookDto): Promise<BookEntity>;
    editBook(updateBookDto: UpdateBookDto, idBook: string): Promise<BookEntity>;
    deleteBook(idBook: string): Promise<BookEntity>;
    getBookByCategory(idCate: string): Promise<BookEntity[]>;
    getDetailBook(idBook: string): Promise<BookEntity>;
    uploadImgBook(file: any, idBook: any): Promise<BookEntity>;
    getImgBook(fileName: string, res: any): any;
    postRating(idBook: string, rate: number): Promise<BookEntity>;
}
