import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Kietpro@123',
    database: 'book-asm',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false
}