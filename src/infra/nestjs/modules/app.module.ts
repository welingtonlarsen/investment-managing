import { Module } from '@nestjs/common';
import { BrokerageOrderModule } from './brokerage-order/brokerage-order.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BrokerageOrderModule, DatabaseModule],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
