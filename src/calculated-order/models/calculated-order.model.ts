import { BaseModel } from '../../database/models/base.model';

export class CalculatedOrderModel extends BaseModel {
  static tableName = 'calculated_orders';

  readonly id: number;
  totalAmount: number;
  freeDelivery: boolean;
  deliveryFee: number;
  serviceCharge: number;
  addressDetails: Record<string, any>;
  meals: Record<string, any>;
  lat: number;
  lng: number;
  cokitchenPolygonId: string;
  userId: string;
  cokitchenId: string;
  pickup: boolean;
  prevPrice: number;
}
