import { Repository } from 'typeorm';
import { CategoryEntity } from './categoty.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryRepository extends Repository<CategoryEntity> {
    createCategory(createCateDto: CreateCategoryDto): Promise<CategoryEntity>;
    updateCategory(updateCateDto: UpdateCategoryDto, idCate: string): Promise<UpdateCategoryDto>;
    getAllCategory(): Promise<CategoryEntity>;
    deleteCategory(idCate: string): Promise<CategoryEntity>;
}
