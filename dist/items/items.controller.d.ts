import { CreateItemDto } from './dto/create-item.dto';
export declare class ItemsController {
    findAll(): string;
    findOne(param: any): string;
    craeteNewPost(createItemDto: CreateItemDto): string;
    delete(id: any): string;
    update(updateItemDto: CreateItemDto, id: any): string;
}
