import { BaseModel } from '../../database/models/base.model';

export class OrderLogModel extends BaseModel {
  static tableName = 'order_logs';

  readonly id: number;
  orderId: number;
  time: Date;
  description: string;
}
