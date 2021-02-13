import { CategoryRepository } from 'src/category/category.repository';
import { BookEntity } from './book.entity';
import { BookRepository } from './book.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookService {
    private bookRepository;
    private categoryRepository;
    constructor(bookRepository: BookRepository, categoryRepository: CategoryRepository);
    getAllBook(): Promise<BookEntity>;
    getDetailBook(idBook: string): Promise<BookEntity>;
    createBook(createBookDto: CreateBookDto): Promise<BookEntity>;
    uploadImgBook(nameFile: string, idBook: string): Promise<BookEntity>;
    editBook(updateBookDto: UpdateBookDto, idBook: string): Promise<BookEntity>;
    deleteBook(idBook: string): Promise<BookEntity>;
    getBookByCategory(idCate: string): Promise<BookEntity[]>;
    postRating(idBook: string, rating: number): Promise<BookEntity>;
}
