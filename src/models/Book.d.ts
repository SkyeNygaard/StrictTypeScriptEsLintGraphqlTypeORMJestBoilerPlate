import { BaseEntity } from 'typeorm';
export declare class Book extends BaseEntity {
    id: string;
    title: string;
    author: string;
    isPublished: boolean;
}
