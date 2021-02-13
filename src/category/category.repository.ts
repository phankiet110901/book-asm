import { EntityRepository, Repository } from 'typeorm';
import { CategoryEntity } from './categoty.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { v4 as uuid } from 'uuid';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { BadRequestException } from '@nestjs/common';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {
  async createCategory(createCateDto: CreateCategoryDto) {
    const newCate = new CategoryEntity();
    newCate.id_category = uuid();
    newCate.name_category = createCateDto.nameCategory;

    await newCate.save();

    return newCate;
  }

  async updateCategory(updateCateDto: UpdateCategoryDto, idCate: string) {
    const foundCate = await this.findOne({ where: { id_category: idCate } });

    if (!foundCate) {
      throw new BadRequestException(`Can not found category id ${idCate}`);
    }

    await this.update({ id_category: idCate }, updateCateDto);

    return updateCateDto;
  }

  async getAllCategory(): Promise<CategoryEntity> {
    const sql = 'SELECT * FROM public.category';
    return await this.query(sql);
  }

  async deleteCategory(idCate: string): Promise<CategoryEntity> {
    const foundCate = await this.findOne({ where: { id_category: idCate } });

    if (!foundCate) {
      throw new BadRequestException(`Can not find category id ${idCate}`);
    }

    try {
      await foundCate.remove();
    } catch {
      throw new BadRequestException(`Can not delete category ${idCate}`);
    }

    return foundCate;
  }
}
