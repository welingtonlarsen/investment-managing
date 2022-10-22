import { DataSource } from 'typeorm';
import { BrokerageOrder } from '../../../db/typeorm/entity/brokerage-order.db.entity';
import { GeneralInformation } from '../../../db/typeorm/entity/general-information.typeorm.entity';

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
        entities: [BrokerageOrder, GeneralInformation],
        logging: true,
      });

      //await dataSource.synchronize();
      return dataSource.initialize();
    },
  },
];
