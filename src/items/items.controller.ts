import { Controller , Get , Post , Put , Delete , Body} from '@nestjs/common';
import {  CreateItemDto } from './dto/craete-item.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll() : string {
    return "Ayoub Kassi"
  }

  @Post()
  craeteNewPost(@Body() createItemDto : CreateItemDto) : string {
    return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
  }
}
