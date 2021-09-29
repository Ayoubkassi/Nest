import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/Item.interface';

@Injectable()
export class ItemsService {
  private readonly items : Item[] = [
    {
      id : "124346815",
      name : "First Item",
      qty : 100,
      description : "This is Item One"
    },
    {
      id : "12334815",
      name : "Second Item",
      qty : 60,
      description : "This is Item Two"
    }
  ];

  findAll() : Item[] {
    return this.items;
  }
}
