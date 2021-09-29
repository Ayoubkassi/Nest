"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
const craete_item_dto_1 = require("./dto/craete-item.dto");
let ItemsController = class ItemsController {
    findAll() {
        return "Ayoub Kassi";
    }
    craeteNewPost(createItemDto) {
        return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ItemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof craete_item_dto_1.CreateItemDto !== "undefined" && craete_item_dto_1.CreateItemDto) === "function" ? _a : Object]),
    __metadata("design:returntype", String)
], ItemsController.prototype, "craeteNewPost", null);
ItemsController = __decorate([
    (0, common_1.Controller)('items')
], ItemsController);
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map