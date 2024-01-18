import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderLogService } from './order-log.service';
import { CreateOrderLogDto } from './dto/create-order-log.dto';
import { UpdateOrderLogDto } from './dto/update-order-log.dto';
import { GetQuery } from 'src/common/decorators/query.decorator';
import { IPaginationOptions } from 'src/common/utils/pagination';

@Controller('order-log')
export class OrderLogController {
  constructor(private readonly orderLogService: OrderLogService) { }

  @Post()
  create(@Body() createOrderLogDto: CreateOrderLogDto) {
    return this.orderLogService.create(createOrderLogDto);
  }

  @Get()
  findAll(@GetQuery() query: IPaginationOptions) {
    return this.orderLogService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderLogDto: UpdateOrderLogDto) {
    return this.orderLogService.update(+id, updateOrderLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderLogService.remove(+id);
  }
}
