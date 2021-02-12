import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/category/category.repository';
import { BookEntity } from './book.entity';
import { BookRepository } from './book.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository)
    private bookRepository: BookRepository,
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  getAllBook(): Promise<BookEntity> {
    return this.bookRepository.getAllBook();
  }

  getDetailBook(idBook: string): Promise<BookEntity> {
    return this.bookRepository.getDetailBook(idBook);
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    const foundCategory = await this.categoryRepository.findOne({
      where: { id_category: createBookDto.id_category },
    });

    if (!foundCategory) {
      throw new BadRequestException(
        `Can not find category id ${createBookDto.id_category}`,
      );
    }
    return this.bookRepository.createBook(createBookDto);
  }

  uploadImgBook(nameFile: string, idBook: string) {
    return this.bookRepository.insertImgBook(nameFile, idBook);
  }

  editBook(updateBookDto: UpdateBookDto, idBook: string): Promise<BookEntity> {
    return this.bookRepository.editBook(updateBookDto, idBook);
  }

  deleteBook(idBook: string): Promise<BookEntity> {
    return this.bookRepository.deleteBook(idBook);
  }

  async getBookByCategory(idCate: string): Promise<BookEntity[]> {
    if (
      !(await this.categoryRepository.findOne({
        where: { id_category: idCate },
      }))
    ) {
      throw new BadRequestException(`Can not find category id ${idCate}`);
    }

    return this.bookRepository.getBookByCategory(idCate);
  }
}
