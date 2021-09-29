import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
export declare class ItemsController {
    findAll(req: Request, : any): Response;
    craeteNewPost(createItemDto: CreateItemDto): string;
}
