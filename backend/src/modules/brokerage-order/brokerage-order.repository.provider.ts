import { Repository } from 'typeorm';
import { BrokerageOrder } from './adapter/repository/entity/brokerage-order.db.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BrokerageOrderTypeormRepository } from './adapter/repository/brokerage-order.typeorm.repository';
import { Provider } from '@nestjs/common';
import { BROKERAGE_ORDER_REPOSITORY_TOKEN } from './adapter/repository/brokerage-order.interface';
import { DataSource } from '../../common/constants/datasource-typeorm';

export function provideBrokerageOrderRepository(): Provider[] {
  return [
    {
      provide: BROKERAGE_ORDER_REPOSITORY_TOKEN,
      useFactory: async (
        dependenciesProvider: BrokerageOrderRepoDependenciesProvider,
      ) => provideBrokerageOrderRepositoryFactory(dependenciesProvider),
      inject: [BrokerageOrderRepoDependenciesProvider],
    },
    BrokerageOrderRepoDependenciesProvider,
  ];
}

async function provideBrokerageOrderRepositoryFactory(
  dependenciesProvider: BrokerageOrderRepoDependenciesProvider,
) {
  await ConfigModule.envVariablesLoaded;
  switch (process.env.DATABASE_DATASOURCE) {
    case DataSource.TYPEORM:
      return new BrokerageOrderTypeormRepository(
        dependenciesProvider.typeOrmRepository,
      );
    default:
      throw new Error('Data source not implemented');
  }
}

export class BrokerageOrderRepoDependenciesProvider {
  constructor(
    @InjectRepository(BrokerageOrder)
    public typeOrmRepository: Repository<BrokerageOrder>,
  ) {}
}
