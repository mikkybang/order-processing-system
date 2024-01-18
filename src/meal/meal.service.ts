import { Inject, Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { ModelClass } from 'objection';
import { MealModel } from './models/meal.model';
import { IPaginationOptions, paginate } from 'src/common/utils/pagination';

@Injectable()
export class MealService {
  constructor(
    @Inject("MealModel") private readonly mealModel: ModelClass<MealModel>
  ) { }


  create(createMealDto: CreateMealDto) {
    return this.mealModel.query().insert(createMealDto).returning('*');
  }

  findAll(query: IPaginationOptions) {
    return paginate(this.mealModel.query(), query.page, query.limit);
  }

  findOne(id: number) {
    return this.mealModel.query().findById(id);
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return this.mealModel.query().patchAndFetchById(id, updateMealDto).returning('*');
  }

  remove(id: number) {
    return this.mealModel.query().deleteById(id).returning('*');
  }
}
