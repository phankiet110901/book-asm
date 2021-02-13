import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateBookDto {
  @IsNotEmpty()
  name_book: string;
  @IsNotEmpty()
  @IsInt()
  price_book: number;
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  review: string;
  @IsNotEmpty()
  id_category: string;
}
