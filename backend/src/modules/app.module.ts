import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { BrokerageOrderModule } from './brokerage-order/brokerage-order.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import databaseConfig from '../config/database.config';
import { BrokerageOrder } from './brokerage-order/adapter/repository/entity/brokerage-order.db.entity';
import { GeneralInformation } from './brokerage-order/adapter/repository/entity/general-information.typeorm.entity';
import {
  Clearing,
  Exchange,
  FinancialSummary,
  OperationalCosts,
} from './brokerage-order/adapter/repository/entity/financial-summary.typeorm.entity';
import { Order } from './brokerage-order/adapter/repository/entity/order.typeorm.entity';
import { BusinessSummary } from './brokerage-order/adapter/repository/entity/business-summary.typeorm.entity';

@Module({
  imports: [
    BrokerageOrderModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({ load: [databaseConfig] })],
      useFactory: (configDatabase: ConfigType<typeof databaseConfig>): TypeOrmModuleOptions => ({
        type: configDatabase.type,
        host: configDatabase.host,
        port: configDatabase.port,
        username: configDatabase.username,
        password: configDatabase.password,
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
        synchronize: true,
        database: configDatabase.database,
      }),
      inject: [databaseConfig.KEY]
    }),
  ],
})
export class AppModule {}
