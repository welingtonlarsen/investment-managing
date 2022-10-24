import { DataSource } from 'typeorm';
import { BrokerageOrder } from '../brokerage-order/adapter/repository/entity/brokerage-order.db.entity';
import {
  Clearing,
  Exchange,
  FinancialSummary,
  OperationalCosts,
} from '../brokerage-order/adapter/repository/entity/financial-summary.typeorm.entity';
import { BusinessSummary } from '../brokerage-order/adapter/repository/entity/business-summary.typeorm.entity';
import { Order } from '../brokerage-order/adapter/repository/entity/order.typeorm.entity';
import { GeneralInformation } from '../brokerage-order/adapter/repository/entity/general-information.typeorm.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3308,
        username: 'root',
        password: 'root',
        database: 'investment-managing',
        // entities: [__dirname + '/../../../../**/*.entity{.ts,.js}'],
        synchronize: true,
        entities: [
          BrokerageOrder,
          GeneralInformation,
          Order,
          BusinessSummary,
          Clearing,
          Exchange,
          OperationalCosts,
          FinancialSummary,
        ],
        logging: true,
      });

      //await dataSource.synchronize();
      return dataSource.initialize();
    },
  },
];
