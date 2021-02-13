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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../share/auth.guard");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    createCategory(createCateDto) {
        return this.categoryService.createCate(createCateDto);
    }
    getAllCate() {
        return this.categoryService.getAllCate();
    }
    updateCate(updateCategory, idCate) {
        return this.categoryService.updateCategory(updateCategory, idCate);
    }
    deleteCate(idCate) {
        return this.categoryService.deleteCategory(idCate);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "createCategory", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "getAllCate", null);
__decorate([
    common_1.Patch('update/:idCategory'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, common_1.Body()),
    __param(1, common_1.Param('idCategory')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_category_dto_1.UpdateCategoryDto, String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "updateCate", null);
__decorate([
    common_1.Delete('delete/:idCategory'),
    common_1.UseGuards(auth_guard_1.AuthGuard),
    __param(0, common_1.Param("idCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCate", null);
CategoryController = __decorate([
    common_1.Controller('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map