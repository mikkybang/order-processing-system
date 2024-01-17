import { BaseModel } from '../../database/models/base.model'


export class OrderModel extends BaseModel {
  static tableName = 'orders';

  readonly id: number;
  user_id: string;
  completed: boolean;
  cancelled: boolean;
  kitchen_cancelled: boolean;
  kitchen_accepted: boolean;
  kitchen_dispatched: boolean;
  kitchen_dispatched_time: Date;
  completed_time: Date;
  rider_id: string;
  kitchen_prepared: boolean;
  rider_assigned: boolean;
  paid: boolean;
  order_code: string;
  order_change: string;
  calculated_order_id: string;
  kitchen_verified_time: Date;
  kitchen_completed_time: Date;
  shop_accepted: boolean;
  shop_prepared: boolean;
  no_of_mealbags_delivered: number;
  no_of_drinks_delivered: number;
  rider_started_time: Date;
  rider_started: boolean;
  rider_arrived_time: Date;
  rider_arrived: boolean;
  is_failed_trip: boolean;
  failed_trip_details: Record<string, any>;
  box_number: string;
  shelf_id: string;
  order_total_amount_history: Record<string, any>;
  scheduled: boolean;
  confirmed_by_id: string;
  completed_by_id: string;
  scheduled_delivery_date: Date;
  scheduled_delivery_time: Date;
  is_hidden: boolean;

}
