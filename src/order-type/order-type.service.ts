import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderTypeDto } from './dto/create-order-type.dto';
import { UpdateOrderTypeDto } from './dto/update-order-type.dto';
import { OrderTypeModel } from './models/order-type.model';
import { ModelClass } from 'objection';
import { IPaginationOptions, paginate } from 'src/common/utils/pagination';

@Injectable()
export class OrderTypeService {
  constructor(
    @Inject("OrderTypeModel") private readonly orderTypeModel: ModelClass<OrderTypeModel>
  ) { }
  create(createOrderTypeDto: CreateOrderTypeDto) {
    return this.orderTypeModel.query().insert(createOrderTypeDto).returning('*');
  }

  findAll(query: IPaginationOptions) {
    return paginate(this.orderTypeModel.query(), query.page, query.limit);
  }

  findOne(id: number) {
    return this.orderTypeModel.query().findById(id);
  }

  update(id: number, updateOrderTypeDto: UpdateOrderTypeDto) {
    return this.orderTypeModel.query().patchAndFetchById(id, updateOrderTypeDto).returning('*');
  }

  remove(id: number) {
    return this.orderTypeModel.query().deleteById(id).returning('*');
  }
}
