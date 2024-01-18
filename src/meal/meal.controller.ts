import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MealService } from './meal.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { GetQuery } from 'src/common/decorators/query.decorator';
import { IPaginationOptions } from 'src/common/utils/pagination';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) { }

  @Post()
  create(@Body() createMealDto: CreateMealDto) {
    return this.mealService.create(createMealDto);
  }

  @Get()
  findAll(@GetQuery() query: IPaginationOptions) {
    return this.mealService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMealDto: UpdateMealDto) {
    return this.mealService.update(+id, updateMealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealService.remove(+id);
  }
}
