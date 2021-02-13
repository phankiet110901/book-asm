import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'postgresql-20449-0.cloudclusters.net',
    port: 20482,
    username: 'phankiet110901',
    password: 'Kietpro@123',
    database: 'book-asm',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}