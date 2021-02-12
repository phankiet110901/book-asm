import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('category')
export class CategoryEntity extends BaseEntity {
    @PrimaryColumn()
    id_category: string;

    @Column()
    name_category: string;
}