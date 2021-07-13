import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        // return `Name: ${createItemDto.name} Desc: ${createItemDto.description} `;
        return this.itemsService.create(createItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Item> {
        // return `Delete ${id}`;
        return this.itemsService.delete(id);
    }

    @Put(':id')
    async update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        // return `Update ${id} - Name: ${updateItemDto.name}`;
        return this.itemsService.update(id, updateItemDto);
    }
}
