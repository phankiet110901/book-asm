import { BaseEntity } from "typeorm";
import { TypeUser } from './type-user.enum';
export declare class UserEntity extends BaseEntity {
    id_user: string;
    name_user: string;
    password_user: string;
    type_user: TypeUser;
    hashPassword(): Promise<void>;
}
