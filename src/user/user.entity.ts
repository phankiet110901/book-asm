import { BaseEntity, BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { TypeUser } from './type-user.enum';
import * as bcrypt from 'bcrypt';


@Entity('users')
export class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id_user: string;

    @Column()
    name_user: string;

    @Column()
    password_user: string;

    @Column()
    type_user: TypeUser;

    @BeforeInsert()
    async hashPassword() {
        this.password_user = await bcrypt.hash(this.password_user, 10);
    }
}