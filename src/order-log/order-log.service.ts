import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderLogDto } from './dto/create-order-log.dto';
import { UpdateOrderLogDto } from './dto/update-order-log.dto';
import { OrderLogModel } from './models/order-log.model';
import { ModelClass } from 'objection';
import { IPaginationOptions, paginate } from 'src/common/utils/pagination';

@Injectable()
export class OrderLogService {
  constructor(
    @Inject('OrderLogModel') private readonly orderLogModel: ModelClass<OrderLogModel>
  ) { }
  create(createOrderLogDto: CreateOrderLogDto) {
    return this.orderLogModel.query().insert(createOrderLogDto).returning('*');
  }

  findAll(query: IPaginationOptions) {
    return paginate(this.orderLogModel.query(), query.page, query.limit);
  }

  findOne(id: number) {
    return this.orderLogModel.query().findById(id);
  }

  update(id: number, updateOrderLogDto: UpdateOrderLogDto) {
    return this.orderLogModel.query().patchAndFetchById(id, updateOrderLogDto).returning('*');
  }

  remove(id: number) {
    return this.orderLogModel.query().deleteById(id).returning('*');
  }
}
