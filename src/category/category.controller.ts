import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/share/auth.guard';
import { CategoryService } from './category.service';
import { CategoryEntity } from './categoty.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('create')
  @UseGuards(AuthGuard)
  createCategory(
    @Body() createCateDto: CreateCategoryDto,
  ): Promise<CategoryEntity> {
    return this.categoryService.createCate(createCateDto);
  }

  @Get()
  getAllCate(): Promise<CategoryEntity> {
    return this.categoryService.getAllCate();
  }

  @Patch('update/:idCategory')
  @UseGuards(AuthGuard)
  updateCate(
    @Body() updateCategory: UpdateCategoryDto,
    @Param('idCategory') idCate: string,
  ) {
    return this.categoryService.updateCategory(updateCategory, idCate);
  }

  @Delete('delete/:idCategory')
  deleteCate(@Param("idCategory") idCate: string): Promise<CategoryEntity> {
    return this.categoryService.deleteCategory(idCate); 
  }
}
