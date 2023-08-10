import { INestApplication, ValidationPipe } from '@nestjs/common';
import {
  closeDatabaseIntegrationConnections,
  databaseIntegrationSetup,
} from './config/setup';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BrokerageOrderModule } from '../../brokerage-order.module';
import { BrokerageOrderTypeormRepository } from '../repository/brokerage-order.typeorm.repository';
import { Repository } from 'typeorm';
import { BrokerageOrder } from '../repository/entity/brokerage-order.db.entity';
import { brokerageOrderEntity } from './seed/brokerage-order-entity';
import { BROKERAGE_ORDER_REPOSITORY_TOKEN } from '../repository/brokerage-order.interface';
import { ConfigModule, ConfigType } from '@nestjs/config';
import databaseConfig from '../../../../config/database.config';
import { BusinessSummary } from '../repository/entity/business-summary.typeorm.entity';
import {
  Clearing,
  Exchange,
  OperationalCosts,
  FinancialSummary,
} from '../repository/entity/financial-summary.typeorm.entity';
import { GeneralInformation } from '../repository/entity/general-information.typeorm.entity';
import { Order } from '../repository/entity/order.typeorm.entity';

describe('Brokerage Order TypeORM Repository tests', () => {
  let app: INestApplication;
  let brokerageOrderRepository: Repository<BrokerageOrder>;

  let brokerageOrderTypeormRepository: BrokerageOrderTypeormRepository;

  beforeEach(async () => {
    await databaseIntegrationSetup();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        BrokerageOrderModule,
        // TODO: Compartilhar em um mesmo arquivo pois é o mesmo conteudo do AppModule
        ConfigModule.forRoot({
          envFilePath: globalThis.ENV_FILE || 'environments/.env',
        }),
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule.forRoot({ load: [databaseConfig] })],
          useFactory: (
            configDatabase: ConfigType<typeof databaseConfig>,
          ): TypeOrmModuleOptions => ({
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
          inject: [databaseConfig.KEY],
        }),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();

    brokerageOrderRepository = moduleFixture.get<Repository<BrokerageOrder>>(
      `${BrokerageOrder.name}Repository`,
    );

    brokerageOrderTypeormRepository =
      moduleFixture.get<BrokerageOrderTypeormRepository>(
        BROKERAGE_ORDER_REPOSITORY_TOKEN,
      );
  });

  afterEach(async () => {
    await closeDatabaseIntegrationConnections();
    await app.close();
  });

  it('should successful save a brokerage order', async () => {
    await brokerageOrderTypeormRepository.save(brokerageOrderEntity);

    const persistedBrokerageOrders = await brokerageOrderRepository.find();
    expect(persistedBrokerageOrders.length).toBe(1);

    expect(persistedBrokerageOrders[0]).toMatchObject({
      generalInformation: {
        brokerageOrderNumber: 51198038,
        tradingFlorDate: {},
        clientId: '2079101',
        id: 1,
      },
      orders: [
        {
          market: 'BOVESPA',
          buyOrSell: 'BUY',
          marketType: 'VISTA',
          title: 'SANEPAR UNT N2',
          quantity: 100,
          price: 1850,
          total: 185000,
          debitOrCredit: 'DEBIT',
          id: 1,
        },
      ],
      businessSummary: {
        debentures: 0,
        sellInCash: 0,
        buyInCash: 185000,
        optionsBuy: 0,
        optionsSell: 0,
        termOptions: 0,
        federalSecurities: 0,
        operationValues: 185000,
        id: 1,
      },
      financialSummary: {
        clearing: {
          operationsNetValue: 185000,
          settlementFee: 46,
          registryFee: 0,
          totalCblc: 185046,
          id: 1,
        },
        exchange: {
          termOrOptionsFee: 0,
          anaFee: 0,
          fees: 9,
          total: 9,
          id: 1,
        },
        operationalCosts: {
          operationalFee: 490,
          execution: 0,
          custody: 0,
          taxes: 52,
          irrf: 0,
          others: 19,
          totalCosts: 561,
          id: 1,
        },
        netDate: {},
        netTotalValue: 185616,
        netDebitOrCredit: 'DEBIT',
        id: 1,
      },
      id: 1,
    });
  });

  it('should successful find all brokerage orders', async () => {
    await brokerageOrderRepository.save(brokerageOrderEntity);

    const { items } = await brokerageOrderTypeormRepository.findAll({
      page: 1,
      limit: 1,
    });

    expect(items.length).toEqual(1);
    expect(JSON.stringify(items[0])).toStrictEqual(
      JSON.stringify({
        generalInformation: {
          brokerageOrderNumber: 51198038,
          tradingFlorDate: '2022-06-24T00:00:00.000Z',
          clientId: '2079101',
          id: 1,
        },
        orders: [
          {
            market: 'BOVESPA',
            buyOrSell: 'BUY',
            marketType: 'VISTA',
            title: 'SANEPAR UNT N2',
            quantity: 100,
            price: 1850,
            total: 185000,
            debitOrCredit: 'DEBIT',
            id: 1,
          },
        ],
        businessSummary: {
          debentures: 0,
          sellInCash: 0,
          buyInCash: 185000,
          optionsBuy: 0,
          optionsSell: 0,
          termOptions: 0,
          federalSecurities: 0,
          operationValues: 185000,
          id: 1,
        },
        financialSummary: {
          clearing: {
            operationsNetValue: 185000,
            settlementFee: 46,
            registryFee: 0,
            totalCblc: 185046,
            id: 1,
          },
          exchange: {
            termOrOptionsFee: 0,
            anaFee: 0,
            fees: 9,
            total: 9,
            id: 1,
          },
          operationalCosts: {
            operationalFee: 490,
            execution: 0,
            custody: 0,
            taxes: 52,
            irrf: 0,
            others: 19,
            totalCosts: 561,
            id: 1,
          },
          netDate: '2022-06-28T00:00:00.000Z',
          netTotalValue: 185616,
          netDebitOrCredit: 'DEBIT',
          id: 1,
        },
        id: 1,
      }),
    );
  });
});
