import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { BookEntity } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { v4 as uuid } from 'uuid';
import { BadRequestException } from '@nestjs/common';
import { UpdateBookDto } from './dto/update-book.dto';

@EntityRepository(BookEntity)
export class BookRepository extends Repository<BookEntity> {
  async getAllBook(): Promise<BookEntity> {
    const allBook = await this.query(`SELECT * FROM public.Books`);
    return allBook.map((book) => {
      book.img_book = `${process.env.DOMAIN}/get-img-book/${book.img_book}`;
      book.rating = Math.round(book.rating / book.time_rating);
      delete book.time_rating;
      return book;
    });
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    const newBook = new BookEntity();
    newBook.id_book = uuid();
    newBook.name_book = createBookDto.nameBook;
    newBook.price_book = createBookDto.priceBook;
    newBook.review = createBookDto.review;
    newBook.author = createBookDto.author;
    newBook.id_category = createBookDto.id_category;
    await newBook.save();

    return newBook;
  }

  async insertImgBook(fileName: string, idBook: string): Promise<BookEntity> {
    const foundBook = await this.findOne({ where: { id_book: idBook } });

    if (!foundBook) {
      throw new BadRequestException(`Can not find book id ${idBook}`);
    }

    foundBook.img_book = fileName;
    return await foundBook.save();
  }

  async getDetailBook(idBook: string): Promise<BookEntity> {
    const foundBook = await this.findOne({ where: { id_book: idBook } });
    if (!foundBook) {
      throw new BadRequestException(`Can not found book id ${idBook}`);
    }

    foundBook.img_book = `${process.env.DOMAIN}/book/get-img-book/${foundBook.img_book}`;

    return foundBook;
  }

  async getBookByCategory(idCate: string): Promise<BookEntity[]> {
    return (await this.find({ where: { id_category: idCate } })).map((book) => {
      book.img_book = `${process.env.DOMAIN}/book/get-img-book/${book.img_book}`;
      return book;
    });
  }

  async deleteBook(idBook: string): Promise<BookEntity> {
    const foundBook = await this.findOne({ where: { id_book: idBook } });

    if (!foundBook) {
      throw new BadRequestException(`Can not find book id ${idBook}`);
    }

    return await foundBook.remove();
  }

  async editBook(
    updateBookDto: UpdateBookDto,
    idBook: string,
  ): Promise<BookEntity> {
    const foundBook = await this.findOne({ where: { id_book: idBook } });

    if (!foundBook) {
      throw new BadRequestException(`Can not found book id ${idBook}`);
    }

    await this.update({ id_book: idBook }, updateBookDto);
    const respBook = await this.findOne({ id_book: idBook });
    return respBook;
  }

  async postRating(idBook: string, rating: number): Promise<BookEntity> {
    if (isNaN(rating) === true || rating <= 0 || rating > 5) {
      throw new BadRequestException(
        `Rating must be a number less than 5 and more than 0`,
      );
    }

    const foundBook = await this.findOne({ where: { id_book: idBook } });
    if (!foundBook) {
      throw new BadRequestException(`Can not find book id ${idBook}`);
    }
    foundBook.time_rating += 1;
    foundBook.rating = foundBook.rating + rating;

    await foundBook.save();
    foundBook.rating = Math.round(foundBook.rating / foundBook.time_rating);
    delete foundBook.time_rating;
    return foundBook;
  }
}
