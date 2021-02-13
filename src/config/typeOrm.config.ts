import { TypeOrmModuleOptions } from "@nestjs/typeorm";


export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'ec2-52-7-168-69.compute-1.amazonaws.com',
    port: 5432,
    username: 'cldyhkbgfprxkz',
    password: '5d1193622a65ef063f5c4bf21225694cf9b482415e54b98e758c9ca06889dddc',
    database: 'd3pvd2qljh6883',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: false
}