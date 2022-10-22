import { Module } from '@nestjs/common';
import { BrokerageOrderController } from './entrypoint/brokerage-order.controller';
import { CreateBrokerageOrderUseCase } from '../../../../application/usecase/create-brokerage-order.usecase';
import { BrokerageOrderTypeORMRepository } from '../../../db/typeorm/BrokerageOrderTypeORMRepository';
import { BrokerageOrderRepository } from '../../../../application/repository/BrokerageOrderRepository';
import { DatabaseModule } from '../database/database.module';
import { DataSource, Repository } from 'typeorm';
import { BrokerageOrder } from '../../../db/typeorm/entity/brokerage-order.db.entity';
import { GeneralInformation } from '../../../db/typeorm/entity/general-information.typeorm.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [BrokerageOrderController],
  providers: [
    {
      provide: 'BROKERAGE_ORDER_REPOSITORY',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(BrokerageOrder),
      inject: ['DATA_SOURCE'],
    },
    {
      provide: 'GENERAL_INFORMATION_REPOSITORY',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(GeneralInformation),
      inject: ['DATA_SOURCE'],
    },
    {
      provide: BrokerageOrderTypeORMRepository,
      useFactory: (repo: Repository<BrokerageOrder>) => {
        return new BrokerageOrderTypeORMRepository(repo);
      },
      inject: ['BROKERAGE_ORDER_REPOSITORY'],
    },
    {
      provide: CreateBrokerageOrderUseCase,
      useFactory: (repo: BrokerageOrderRepository) =>
        new CreateBrokerageOrderUseCase(repo),
      inject: [BrokerageOrderTypeORMRepository],
    },
  ],
})
export class BrokerageOrderModule {}
