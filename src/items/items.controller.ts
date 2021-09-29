import { Controller , Get , Post , Put , Delete , Body} from '@nestjs/common';
import {  CreateItemDto } from './dto/create-item.dto';
import { Request , Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res( res: Response)) : Response{
    console.log(req.url);
    res.send('Hello Kassi');
  }

  @Post()
  craeteNewPost(@Body() createItemDto : CreateItemDto) : string {
    return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
  }
}
