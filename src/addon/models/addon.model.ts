import { BaseModel } from '../../database/models/base.model';

export class AddonModel extends BaseModel {
  static get tableName() {
    return 'addons';
  }
  static get idColumn() {
    return 'id';
  }
  amount: number;
  mealId: number;
  mealData: Record<string, any>;
  mealAddonId: string;
  internalProfit: number;
  minSelectionNo: string;
  mealAddonCategoryId: string;
  postistData: Record<string, any>;
}
