
import { BaseModel } from '../../database/models/base.model';

export class CalculatedOrderModel extends BaseModel {
  static tableName = 'calculated_orders';

  readonly id: number;
  total_amount: number;
  free_delivery: boolean;
  delivery_fee: number;
  service_charge: number;
  address_details: Record<string, any>;
  meals: Record<string, any>;
  lat: number;
  lng: number;
  cokitchen_polygon_id: string;
  user_id: string;
  cokitchen_id: string;
  pickup: boolean;
  prev_price: number;
}

