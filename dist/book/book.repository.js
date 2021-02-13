"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const typeorm_1 = require("typeorm");
const book_entity_1 = require("./book.entity");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
let BookRepository = class BookRepository extends typeorm_1.Repository {
    async getAllBook() {
        const allBook = await this.query(`SELECT * FROM public.Books`);
        return allBook.map((book) => {
            book.img_book = `${process.env.DOMAIN}/get-img-book/${book.img_book}`;
            book.rating = Math.round(book.rating / book.time_rating);
            delete book.time_rating;
            return book;
        });
    }
    async createBook(createBookDto) {
        const newBook = new book_entity_1.BookEntity();
        newBook.id_book = uuid_1.v4();
        newBook.name_book = createBookDto.nameBook;
        newBook.price_book = createBookDto.priceBook;
        newBook.review = createBookDto.review;
        newBook.author = createBookDto.author;
        newBook.id_category = createBookDto.id_category;
        await newBook.save();
        return newBook;
    }
    async insertImgBook(fileName, idBook) {
        const foundBook = await this.findOne({ where: { id_book: idBook } });
        if (!foundBook) {
            throw new common_1.BadRequestException(`Can not find book id ${idBook}`);
        }
        foundBook.img_book = fileName;
        return await foundBook.save();
    }
    async getDetailBook(idBook) {
        const foundBook = await this.findOne({ where: { id_book: idBook } });
        if (!foundBook) {
            throw new common_1.BadRequestException(`Can not found book id ${idBook}`);
        }
        foundBook.img_book = `${process.env.DOMAIN}/book/get-img-book/${foundBook.img_book}`;
        return foundBook;
    }
    async getBookByCategory(idCate) {
        return (await this.find({ where: { id_category: idCate } })).map((book) => {
            book.img_book = `${process.env.DOMAIN}/book/get-img-book/${book.img_book}`;
            return book;
        });
    }
    async deleteBook(idBook) {
        const foundBook = await this.findOne({ where: { id_book: idBook } });
        if (!foundBook) {
            throw new common_1.BadRequestException(`Can not find book id ${idBook}`);
        }
        return await foundBook.remove();
    }
    async editBook(updateBookDto, idBook) {
        const foundBook = await this.findOne({ where: { id_book: idBook } });
        if (!foundBook) {
            throw new common_1.BadRequestException(`Can not found book id ${idBook}`);
        }
        await this.update({ id_book: idBook }, updateBookDto);
        const respBook = await this.findOne({ id_book: idBook });
        return respBook;
    }
    async postRating(idBook, rating) {
        if (isNaN(rating) === true || rating <= 0 || rating > 5) {
            throw new common_1.BadRequestException(`Rating must be a number less than 5 and more than 0`);
        }
        const foundBook = await this.findOne({ where: { id_book: idBook } });
        if (!foundBook) {
            throw new common_1.BadRequestException(`Can not find book id ${idBook}`);
        }
        foundBook.time_rating += 1;
        foundBook.rating = foundBook.rating + rating;
        await foundBook.save();
        foundBook.rating = Math.round(foundBook.rating / foundBook.time_rating);
        delete foundBook.time_rating;
        return foundBook;
    }
};
BookRepository = __decorate([
    typeorm_1.EntityRepository(book_entity_1.BookEntity)
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.repository.js.map