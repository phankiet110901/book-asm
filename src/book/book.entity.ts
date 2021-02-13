import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('books')
export class BookEntity extends BaseEntity {
  @PrimaryColumn()
  id_book: string;

  @Column()
  name_book: string;

  @Column()
  price_book: number;

  @Column()
  author: string;

  @Column()
  review: string;

  @Column({ nullable: true })
  img_book: string | null;

  @Column()
  id_category: string;

  @Column({ nullable: true })
  rating: number;

  @Column({ default: 0 })
  time_rating: number;
}
