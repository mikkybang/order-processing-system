import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { OrderLogModule } from './order-log/order-log.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [OrderModule, OrderLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
