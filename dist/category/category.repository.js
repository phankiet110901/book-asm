"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const categoty_entity_1 = require("./categoty.entity");
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
    async createCategory(createCateDto) {
        const newCate = new categoty_entity_1.CategoryEntity();
        newCate.id_category = uuid_1.v4();
        newCate.name_category = createCateDto.nameCategory;
        await newCate.save();
        return newCate;
    }
    async updateCategory(updateCateDto, idCate) {
        const foundCate = await this.findOne({ where: { id_category: idCate } });
        if (!foundCate) {
            throw new common_1.BadRequestException(`Can not found category id ${idCate}`);
        }
        await this.update({ id_category: idCate }, updateCateDto);
        return updateCateDto;
    }
    async getAllCategory() {
        const sql = 'SELECT * FROM public.category';
        return await this.query(sql);
    }
    async deleteCategory(idCate) {
        const foundCate = await this.findOne({ where: { id_category: idCate } });
        if (!foundCate) {
            throw new common_1.BadRequestException(`Can not find category id ${idCate}`);
        }
        try {
            await foundCate.remove();
        }
        catch (_a) {
            throw new common_1.BadRequestException(`Can not delete category ${idCate}`);
        }
        return foundCate;
    }
};
CategoryRepository = __decorate([
    typeorm_1.EntityRepository(categoty_entity_1.CategoryEntity)
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map