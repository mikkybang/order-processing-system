import { BaseModel } from '../../database/models/base.model';

export class OrderTypeModel extends BaseModel {
  static tableName = 'order_type';

  readonly id: number;
  name: string;
}
