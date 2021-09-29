import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/Item.interface';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Item[];
    findOne(param: any): string;
    craeteNewPost(createItemDto: CreateItemDto): string;
    delete(id: any): string;
    update(updateItemDto: CreateItemDto, id: any): string;
}
