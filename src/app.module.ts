import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeOrm.config';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config'
import { BookModule } from './book/book.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    ConfigModule.forRoot({envFilePath: './development.env'}),
    BookModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
