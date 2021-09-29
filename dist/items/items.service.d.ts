import { Item } from './interfaces/Item.interface';
export declare class ItemsService {
    private readonly items;
    findAll(): Item[];
    findOne(id: string): Item;
    delete(id: string): Item[];
    update(id: string, item: any): Item;
}
