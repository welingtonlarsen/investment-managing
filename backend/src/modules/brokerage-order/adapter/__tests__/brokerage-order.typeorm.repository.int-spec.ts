import { INestApplication } from '@nestjs/common';
import {
  closeDatabaseIntegrationConnections,
  databaseIntegrationSetup,
  resetDatabase,
} from './config/setup';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrokerageOrderModule } from '../../brokerage-order.module';
import { BrokerageOrderTypeormRepository } from '../repository/brokerage-order.typeorm.repository';
import { Repository } from 'typeorm';
import { BrokerageOrder } from '../repository/entity/brokerage-order.db.entity';
import { brokerageOrderEntity } from './seed/brokerage-order-entity';

describe('Brokerage Order TypeORM Repository tests', () => {
  let app: INestApplication;
  let brokerageOrderRepository: Repository<BrokerageOrder>;

  let brokerageOrderTypeormRepository: BrokerageOrderTypeormRepository;

  beforeEach(async () => {
    const databaseConnection = await databaseIntegrationSetup();
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        BrokerageOrderModule,
        TypeOrmModule.forRoot(databaseConnection.options),
      ],
    }).compile();
    app = module.createNestApplication();
    await app.init();

    brokerageOrderRepository = module.get('BrokerageOrderRepository');

    brokerageOrderTypeormRepository =
      module.get<BrokerageOrderTypeormRepository>(
        BrokerageOrderTypeormRepository,
      );
  });

  afterEach(async () => {
    await resetDatabase();
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
