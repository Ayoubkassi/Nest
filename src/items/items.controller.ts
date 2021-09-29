import { Controller , Get , Post , Put , Delete , Body , Param , Req , Res} from '@nestjs/common';
import {  CreateItemDto } from './dto/create-item.dto';
import { Request , Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'kassi';
  }

  @Get(':id')
  findOne(@Param() param) : string{
    return `Item ${param.id}`
  }


  @Post()
  craeteNewPost(@Body() createItemDto : CreateItemDto) : string {
    return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id) : string{
    return `Delete ${id}`;
  }
}
