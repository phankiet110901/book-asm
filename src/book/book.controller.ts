import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/share/auth.guard';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { v4 as uuid } from 'uuid';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBook(): Promise<BookEntity> {
    return this.bookService.getAllBook();
  }

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  createBook(@Body() createBookDto: CreateBookDto): Promise<BookEntity> {
    return this.bookService.createBook(createBookDto);
  }

  @UseGuards(AuthGuard)
  @Put('edit-book/:idBook')
  editBook(@Body() updateBookDto: UpdateBookDto, @Param("idBook") idBook: string): Promise<BookEntity> {
    return this.bookService.editBook(updateBookDto, idBook);
  }

  @UseGuards(AuthGuard)
  @Delete('delete-book/:idBook')
  deleteBook(@Param('idBook') idBook: string): Promise<BookEntity> {
    return this.bookService.deleteBook(idBook);
  }

  @Get('get-book-by-category/:idCate')
  getBookByCategory(@Param('idCate') idCate: string): Promise<BookEntity[]> {
    return this.bookService.getBookByCategory(idCate);
  }

  @Get('get-detail-book/:idBook')
  getDetailBook(@Param('idBook') idBook: string): Promise<BookEntity> {
    return this.bookService.getDetailBook(idBook);
  }

  @Post('upload-img-book/:idBook')
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileInterceptor('imgBook', {
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return cb(
            new BadRequestException(
              'Only image files are allowed: jpg|jpeg|png|gif',
            ),
            false,
          );
        }
        cb(null, true);
      },
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName: string = file.originalname.split('.')[0];
          const fileExtName: string = extname(file.originalname);
          file.originName = `${fileName}-${uuid()}${fileExtName}`;
          cb(null, file.originName);
        },
      }),
    }),
  )
  uploadImgBook(
    @UploadedFile() file,
    @Param('idBook') idBook,
  ): Promise<BookEntity> {
    return this.bookService.uploadImgBook(file.filename, idBook);
  }

  @Get('get-img-book/:fileName')
  getImgBook(@Param('fileName') fileName: string, @Res() res) {
    return res.sendFile(join(__dirname, '../..', 'uploads/' + fileName));
  }

}
