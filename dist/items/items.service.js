"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
let ItemsService = class ItemsService {
    constructor() {
        this.items = [
            {
                id: "1243",
                name: "First Item",
                qty: 100,
                description: "This is Item One"
            },
            {
                id: "1234",
                name: "Second Item",
                qty: 60,
                description: "This is Item Two"
            }
        ];
    }
    findAll() {
        return this.items;
    }
    findOne(id) {
        return this.items.find(item => item.id === id);
    }
    delete(id) {
        return this.items.filter(item => item.id !== id);
    }
    update(id, item) {
        Item;
        oldItem = this.items.find(item => item.id === id);
        oldItem = Object.assign(Object.assign({}, oldItem), { name: item.name, description: description.name });
        return oldItem;
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)()
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map