import { Global, Module } from '@nestjs/common';
import * as Knex from 'knex';
import { knexSnakeCaseMappers, Model } from 'objection';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AddonModel } from 'src/addon/models/addon.model';
import { BrandModel } from 'src/brand/models/brand.model';
import { CalculatedOrderModel } from 'src/calculated-order/models/calculated-order.model';
import { MealModel } from 'src/meal/models/meal.model';
import { OrderLogModel } from 'src/order-log/models/order-log.model';
import { OrderTypeModel } from 'src/order-type/models/order-type.model';
import { OrderModel } from 'src/order/models/order.model';


const models = [OrderModel, OrderTypeModel, OrderLogModel, AddonModel, BrandModel, CalculatedOrderModel, MealModel,];

const modelProviders = models.map(model => {
  return {
    provide: model.name,
    useValue: model
  };
});

const providers = [
  ...modelProviders,
  {
    provide: 'KnexConnection',
    useFactory: async (configService: ConfigService) => {
      const knex = Knex({
        client: 'pg',
        connection: {
          host: configService.get('database.host'),
          port: configService.get('database.port'),
          user: configService.get('database.username'),
          database: configService.get('database.name'),
          password: configService.get('database.password'),
          ssl: configService.get('database.ssl')
            ? { rejectUnauthorized: false }
            : false,
        },
        ...knexSnakeCaseMappers()
      });

      Model.knex(knex);
      return knex;
    }
  }
];

@Global()
@Module({
  imports: [ConfigModule],
  providers: [...providers],
  exports: [...providers]
})
export class DatabaseModule { }
