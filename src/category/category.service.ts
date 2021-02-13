import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CategoryEntity } from './categoty.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private cateRepo: CategoryRepository,
  ) {}

  createCate(createCateDto: CreateCategoryDto): Promise<CategoryEntity> {
    return this.cateRepo.createCategory(createCateDto);
  }

  getAllCate(): Promise<CategoryEntity> {
    return this.cateRepo.getAllCategory();
  }

  updateCategory(updateCategory: UpdateCategoryDto, idCate: string) {
    return this.cateRepo.updateCategory(updateCategory, idCate);
  }

  deleteCategory(idCate: string): Promise<CategoryEntity> {
    return this.cateRepo.deleteCategory(idCate);
  }
}
