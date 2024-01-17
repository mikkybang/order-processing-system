import { Inject, Injectable } from '@nestjs/common';
import { CreateCalculatedOrderDto } from './dto/create-calculated-order.dto';
import { UpdateCalculatedOrderDto } from './dto/update-calculated-order.dto';
import { CalculatedOrderModel } from './models/calculated-order.model';
import { ModelClass } from 'objection';

@Injectable()
export class CalculatedOrderService {
  constructor(
    @Inject('CalculatedOrderModel') private readonly calculatedOrderModel: ModelClass<CalculatedOrderModel>,
  ) { }
  create(createCalculatedOrderDto: CreateCalculatedOrderDto) {
    return this.calculatedOrderModel.query().insert(createCalculatedOrderDto).returning('*');
  }

  findAll() {
    return this.calculatedOrderModel.query();
  }

  findOne(id: number) {
    return this.calculatedOrderModel.query().findById(id);
  }

  update(id: number, updateCalculatedOrderDto: UpdateCalculatedOrderDto) {
    return this.calculatedOrderModel.query().patchAndFetchById(id, updateCalculatedOrderDto).returning('*');
  }

  remove(id: number) {
    return this.calculatedOrderModel.query().deleteById(id).returning('*').first();
  }
}
