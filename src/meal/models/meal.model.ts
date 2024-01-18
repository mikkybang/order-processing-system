
import { BrandModel } from 'src/brand/models/brand.model';
import { BaseModel } from '../../database/models/base.model';
import { Model } from 'objection';
import { AddonModel } from 'src/addon/models/addon.model';

export class MealModel extends BaseModel {
  static tableName = 'meals';

  readonly id: number;
  name: string;
  brandId: number;
  active: boolean;
  amount: number;
  images: Record<string, any>;
  itemType: string;

  brand: BrandModel;
  addons: AddonModel[];

  static relationMappings = {
    brand: {
      relation: Model.BelongsToOneRelation,
      modelClass: BrandModel, // Adjust the path as needed
      join: {
        from: 'meals.brand_id',
        to: 'brands.id'
      }
    },
    addons: {
      relation: Model.HasManyRelation,
      modelClass: AddonModel, // Adjust the path as needed
      join: {
        from: 'meals.id',
        to: 'addons.meal_id'
      }
    }
  };
}
