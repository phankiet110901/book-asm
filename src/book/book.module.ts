import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from 'src/category/category.repository';
import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookRepository,CategoryRepository])
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
