import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  nameBook: string;

  @IsNotEmpty()
  @IsInt()
  priceBook: number;

  @IsNotEmpty()
  author: string;
  
  @IsNotEmpty()
  review: string;

  @IsNotEmpty()
  id_category: string;
}
