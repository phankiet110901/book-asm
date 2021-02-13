import { CategoryService } from './category.service';
import { CategoryEntity } from './categoty.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    createCategory(createCateDto: CreateCategoryDto): Promise<CategoryEntity>;
    getAllCate(): Promise<CategoryEntity>;
    updateCate(updateCategory: UpdateCategoryDto, idCate: string): Promise<UpdateCategoryDto>;
    deleteCate(idCate: string): Promise<CategoryEntity>;
}
