import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/Item.interface';

@Injectable()
export class ItemsService {
  private readonly items : Item[] = [
    {
      id : "1243",
      name : "First Item",
      qty : 100,
      description : "This is Item One"
    },
    {
      id : "1234",
      name : "Second Item",
      qty : 60,
      description : "This is Item Two"
    }
  ];

  findAll() : Item[] {
    return this.items;
  }

  findOne(id : string): Item{
    return this.items.find(item => item.id === id);
  }
}
