import { Module } from '@nestjs/common';
import { BrokerageOrderController } from './controllers/brokerage-order.controller';
import { BrokerageOrderService } from './domain/brokerage-order.service';
import { BrokerageOrderTypeormRepository } from './adapter/repository/brokerage-order.typeorm.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrokerageOrder } from './adapter/repository/entity/brokerage-order.db.entity';
import { GeneralInformation } from './adapter/repository/entity/general-information.typeorm.entity';
import { Order } from './adapter/repository/entity/order.typeorm.entity';
import {
  Clearing,
  Exchange,
  FinancialSummary,
  OperationalCosts,
} from './adapter/repository/entity/financial-summary.typeorm.entity';
import { BusinessSummary } from './adapter/repository/entity/business-summary.typeorm.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BrokerageOrder,
      GeneralInformation,
      Order,
      BusinessSummary,
      Clearing,
      Exchange,
      OperationalCosts,
      FinancialSummary,
    ]),
  ],
  controllers: [BrokerageOrderController],
  providers: [BrokerageOrderService, BrokerageOrderTypeormRepository],
})
export class BrokerageOrderModule {}
