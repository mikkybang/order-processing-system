
import { BaseModel } from '../../database/models/base.model';

export class BrandModel extends BaseModel {
  static tableName = 'brands';

  readonly id: number;
  name: string;
}

