import { Controller , Get , Post , Put , Delete , Body , Param , Req , Res} from '@nestjs/common';
import {  CreateItemDto } from './dto/create-item.dto';
import { Request , Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/Item.interface';

@Controller('items')
export class ItemsController {

  constructor(private readonly itemsService : ItemsService){

  }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param() param) : Item {
    return this.itemsService.findOne(param.id);
  }

  //we can work with mongoose then we gonna have better design

  @Post()
  craeteNewPost(@Body() createItemDto : CreateItemDto) : string {
    return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id) : string{
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto : CreateItemDto, @Param('id') id) : string{
    return `Update ${id} - Name : ${updateItemDto.name}`;
  }
}
