import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderModel } from './models/order.model';
import { ModelClass } from 'objection';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderModel') private readonly orderModel: ModelClass<OrderModel>
  ) { }
  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.query().insert(createOrderDto).returning('*');
  }

  findAll() {
    return this.orderModel.query();
  }

  findOne(id: number) {
    return this.orderModel.query().findById(id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderModel.query().patchAndFetchById(id, updateOrderDto).returning('*');
  }

  remove(id: number) {
    return this.orderModel.query().deleteById(id).returning('*');
  }
}
