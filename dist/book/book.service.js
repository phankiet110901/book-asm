"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_repository_1 = require("../category/category.repository");
const book_repository_1 = require("./book.repository");
let BookService = class BookService {
    constructor(bookRepository, categoryRepository) {
        this.bookRepository = bookRepository;
        this.categoryRepository = categoryRepository;
    }
    getAllBook() {
        return this.bookRepository.getAllBook();
    }
    getDetailBook(idBook) {
        return this.bookRepository.getDetailBook(idBook);
    }
    async createBook(createBookDto) {
        const foundCategory = await this.categoryRepository.findOne({
            where: { id_category: createBookDto.id_category },
        });
        if (!foundCategory) {
            throw new common_1.BadRequestException(`Can not find category id ${createBookDto.id_category}`);
        }
        return this.bookRepository.createBook(createBookDto);
    }
    uploadImgBook(nameFile, idBook) {
        return this.bookRepository.insertImgBook(nameFile, idBook);
    }
    editBook(updateBookDto, idBook) {
        return this.bookRepository.editBook(updateBookDto, idBook);
    }
    deleteBook(idBook) {
        return this.bookRepository.deleteBook(idBook);
    }
    async getBookByCategory(idCate) {
        if (!(await this.categoryRepository.findOne({
            where: { id_category: idCate },
        }))) {
            throw new common_1.BadRequestException(`Can not find category id ${idCate}`);
        }
        return this.bookRepository.getBookByCategory(idCate);
    }
    postRating(idBook, rating) {
        return this.bookRepository.postRating(idBook, rating);
    }
};
BookService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(book_repository_1.BookRepository)),
    __param(1, typeorm_1.InjectRepository(category_repository_1.CategoryRepository)),
    __metadata("design:paramtypes", [book_repository_1.BookRepository,
        category_repository_1.CategoryRepository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map