
import { BaseModel } from '../../database/models/base.model';

export class MealModel extends BaseModel {
  static tableName = 'meals';

  readonly id: number;
  name: string;
  brandId: number;
  active: boolean;
  amount: number;
  images: Record<string, any>;
  itemType: string;
}

