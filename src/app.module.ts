import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderTypeModule } from './order-type/order-type.module';
import { BrandModule } from './brand/brand.module';
import { AddonModule } from './addon/addon.module';
import { MealModule } from './meal/meal.module';
import { CalculatedOrderModule } from './calculated-order/calculated-order.module';
import { OrderLogModule } from './order-log/order-log.module';
import { OrderModule } from './order/order.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { LoggerMiddleware } from './common/middleware/GlobalLoggerMiddleware';

@Module({
  imports: [
    OrderModule,
    OrderLogModule,
    CalculatedOrderModule,
    MealModule,
    AddonModule,
    BrandModule,
    OrderTypeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
