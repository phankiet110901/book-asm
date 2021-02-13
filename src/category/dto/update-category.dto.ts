import { IsNotEmpty } from "class-validator";

export class UpdateCategoryDto {
    @IsNotEmpty()
    name_category: string;
}