import { BaseEntity } from 'typeorm';
export declare class BookEntity extends BaseEntity {
    id_book: string;
    name_book: string;
    price_book: number;
    author: string;
    review: string;
    img_book: string | null;
    id_category: string;
    rating: number;
    time_rating: number;
}
