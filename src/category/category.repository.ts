import { EntityRepository, Repository } from 'typeorm';
import { CategoryEntity } from './categoty.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { v4 as uuid } from 'uuid';

@EntityRepository(CategoryEntity)
export class CategoryRepository extends Repository<CategoryEntity> {
  async createCategory(createCateDto: CreateCategoryDto) {
    const newCate = new CategoryEntity();
    newCate.id_category = uuid();
    newCate.name_category = createCateDto.nameCategory;

    await newCate.save();

    return newCate;
  }

  async updateCategory() {}

  async getAllCategory(): Promise<CategoryEntity> {
    const sql = 'SELECT * FROM public.category';
    return await this.query(sql);
  }

  async deleteCategory() {}

  private async getCategoryById(idCate: string): Promise<CategoryEntity> {
    return await this.findOne({ where: { id_category: idCate } });
  }
}
