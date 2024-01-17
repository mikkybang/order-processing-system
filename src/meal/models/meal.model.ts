
import { BaseModel } from '../../database/models/base.model';

export class MealModel extends BaseModel {
  static tableName = 'meals';

  readonly id: number;
  name: string;
  brand_id: number;
  active: boolean;
  amount: number;
  images: Record<string, any>;
  item_type: string;
}

