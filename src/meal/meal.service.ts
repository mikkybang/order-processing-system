import { Inject, Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { ModelClass } from 'objection';
import { MealModel } from './models/meal.model';

@Injectable()
export class MealService {
  constructor(
    @Inject("MealModel") private readonly mealModel: ModelClass<MealModel>
  ) { }


  create(createMealDto: CreateMealDto) {
    return this.mealModel.query().insert(createMealDto).returning('*');
  }

  findAll() {
    return this.mealModel.query();
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
