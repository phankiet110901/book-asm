import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/share/auth.guard';
import { CategoryService } from './category.service';
import { CategoryEntity } from './categoty.entity';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(
        private categoryService: CategoryService
    ) {}

    @Post('create')
    // @UseGuards(AuthGuard)
    createCategory(@Body() createCateDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.categoryService.createCate(createCateDto);
    }

    @Get()
    getAllCate(): Promise<CategoryEntity> {
        return this.categoryService.getAllCate();
    }

    @Patch('update')
    updateCate() {

    }

    @Delete('delete')
    deleteCate() {

    }
}
