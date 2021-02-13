"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'postgresql-20449-0.cloudclusters.net',
    port: 20482,
    username: 'phankiet110901',
    password: 'Kietpro@123',
    database: 'book-asm',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
};
//# sourceMappingURL=typeOrm.config.js.map