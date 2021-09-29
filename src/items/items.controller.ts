import { Controller , Get , Post , Put , Delete , Body} from '@nestjs/common';
import {  CreateItemDto } from './dto/create-item.dto';
import { Request , Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() request: Request, @Res() response: Response): Response {
    console.log(request.url);
    return response.send('Hello Kassi');
  }

  @Post()
  craeteNewPost(@Body() createItemDto : CreateItemDto) : string {
    return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
  }
}
