import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderModel } from './models/order.model';
import { ModelClass } from 'objection';
import { IPaginationOptions, paginate } from 'src/common/utils/pagination';

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderModel') private readonly orderModel: ModelClass<OrderModel>
  ) { }
  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.query().insert(createOrderDto).returning('*');
  }

  findAll(query: IPaginationOptions) {
    return paginate(this.orderModel.query(), query.page, query.limit)
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
