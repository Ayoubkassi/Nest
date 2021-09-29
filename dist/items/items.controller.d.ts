import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
export declare class ItemsController {
    findAll(request: Request, response: Response): Response;
    craeteNewPost(createItemDto: CreateItemDto): string;
}
