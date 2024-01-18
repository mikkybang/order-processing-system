import { CalculatedOrderModel } from 'src/calculated-order/models/calculated-order.model';
import { BaseModel } from '../../database/models/base.model'
import { Model } from 'objection';


export class OrderModel extends BaseModel {
  static tableName = 'orders';

  readonly id: number;
  userId: string;
  completed: boolean;
  cancelled: boolean;
  kitchenCancelled: boolean;
  kitchenAccepted: boolean;
  kitchenDispatched: boolean;
  kitchenDispatchedTime: Date;
  completedTime: Date;
  riderId: string;
  kitchenPrepared: boolean;
  riderAssigned: boolean;
  paid: boolean;
  orderCode: string;
  orderChange: string;
  calculatedOrderId: string;
  kitchenVerifiedTime: Date;
  kitchenCompletedTime: Date;
  shopAccepted: boolean;
  shopPrepared: boolean;
  noOfMealbagsDelivered: number;
  noOfDrinksDelivered: number;
  riderStartedTime: Date;
  riderStarted: boolean;
  riderArrivedTime: Date;
  riderArrived: boolean;
  isFailedTrip: boolean;
  failedTripDetails: Record<string, any>;
  boxNumber: string;
  shelfId: string;
  orderTotalAmountHistory: Record<string, any>;
  scheduled: boolean;
  confirmedById: string;
  completedById: string;
  scheduledDeliveryDate: Date;
  scheduledDeliveryTime: Date;
  isHidden: boolean;

  calculatedOrder: CalculatedOrderModel;

  static relationMappings = {
    calculatedOrder: {
      relation: Model.BelongsToOneRelation,
      modelClass: CalculatedOrderModel, // Adjust the path as needed
      join: {
        from: 'orders.calculated_order_id',
        to: 'calculated_orders.id'
      }
    }
  };

}
