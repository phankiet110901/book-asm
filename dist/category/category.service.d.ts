import { CategoryRepository } from './category.repository';
import { CategoryEntity } from './categoty.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryService {
    private cateRepo;
    constructor(cateRepo: CategoryRepository);
    createCate(createCateDto: CreateCategoryDto): Promise<CategoryEntity>;
    getAllCate(): Promise<CategoryEntity>;
    updateCategory(updateCategory: UpdateCategoryDto, idCate: string): Promise<UpdateCategoryDto>;
    deleteCategory(idCate: string): Promise<CategoryEntity>;
}
