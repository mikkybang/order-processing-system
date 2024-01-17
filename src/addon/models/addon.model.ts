
import { BaseModel } from '../../database/models/base.model';

export class AddonModel extends BaseModel {
  static tableName = 'addons';

  readonly id: number;
  amount: number;
  mealId: number;
  mealData: Record<string, any>;

}

