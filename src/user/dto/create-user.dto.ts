import { IsIn, IsNotEmpty } from "class-validator";
import { TypeUser } from "../type-user.enum";

export class CreateUserDto {
    @IsNotEmpty()
    nameUser: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    @IsIn([TypeUser.admin,TypeUser.user])
    typeUser: TypeUser;
}