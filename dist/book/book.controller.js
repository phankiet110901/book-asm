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
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_guard_1 = require("../share/auth.guard");
const book_service_1 = require("./book.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const multer_1 = require("multer");
const path_1 = require("path");
const uuid_1 = require("uuid");
const update_book_dto_1 = require("./dto/update-book.dto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    getAllBook() {
        return this.bookService.getAllBook();
    }
    createBook(createBookDto) {
        return this.bookService.createBook(createBookDto);
    }
    editBook(updateBookDto, idBook) {
        return this.bookService.editBook(updateBookDto, idBook);
    }
    deleteBook(idBook) {
        return this.bookService.deleteBook(idBook);
    }
    getBookByCategory(idCate) {
        return this.bookService.getBookByCategory(idCate);
    }
    getDetailBook(idBook) {
        return this.bookService.getDetailBook(idBook);
    }
    uploadImgBook(file, idBook) {
        return this.bookService.uploadImgBook(file.filename, idBook);
    }
    getImgBook(fileName, res) {
        return res.sendFile(path_1.join(__dirname, '../..', 'uploads/' + fileName));
    }
    postRating(idBook, rate) {
        return this.bookService.postRating(idBook, rate);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBook", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.UsePipes(common_1.ValidationPipe),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.Put('edit-book/:idBook'),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('idBook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_book_dto_1.UpdateBookDto, String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "editBook", null);
__decorate([
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.Delete('delete-book/:idBook'),
    __param(0, common_1.Param('idBook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
__decorate([
    common_1.Get('get-book-by-category/:idCate'),
    __param(0, common_1.Param('idCate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBookByCategory", null);
__decorate([
    common_1.Get('get-detail-book/:idBook'),
    __param(0, common_1.Param('idBook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getDetailBook", null);
__decorate([
    common_1.Post('upload-img-book/:idBook'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('imgBook', {
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return cb(new common_1.BadRequestException('Only image files are allowed: jpg|jpeg|png|gif'), false);
            }
            cb(null, true);
        },
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const fileName = file.originalname.split('.')[0];
                const fileExtName = path_1.extname(file.originalname);
                file.originName = `${fileName}-${uuid_1.v4()}${fileExtName}`;
                cb(null, file.originName);
            },
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Param('idBook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "uploadImgBook", null);
__decorate([
    common_1.Get('get-img-book/:fileName'),
    __param(0, common_1.Param('fileName')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "getImgBook", null);
__decorate([
    common_1.Post('post-rating/:idBook'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, common_1.Param('idBook')),
    __param(1, common_1.Body('rating')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "postRating", null);
BookController = __decorate([
    common_1.Controller('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map