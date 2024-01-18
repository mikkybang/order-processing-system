import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderTypeService } from './order-type.service';
import { CreateOrderTypeDto } from './dto/create-order-type.dto';
import { UpdateOrderTypeDto } from './dto/update-order-type.dto';
import { GetQuery } from 'src/common/decorators/query.decorator';
import { IPaginationOptions } from 'src/common/utils/pagination';

@Controller('order-type')
export class OrderTypeController {
  constructor(private readonly orderTypeService: OrderTypeService) { }

  @Post()
  create(@Body() createOrderTypeDto: CreateOrderTypeDto) {
    return this.orderTypeService.create(createOrderTypeDto);
  }

  @Get()
  findAll(@GetQuery() query: IPaginationOptions) {
    return this.orderTypeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderTypeDto: UpdateOrderTypeDto) {
    return this.orderTypeService.update(+id, updateOrderTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderTypeService.remove(+id);
  }
}
