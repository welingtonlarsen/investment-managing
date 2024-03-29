import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/modules/app.module';
import {
  closeDatabaseIntegrationConnections,
  databaseIntegrationSetup,
} from '../src/modules/brokerage-order/adapter/__tests__/config/setup';
import { Stock } from '../src/modules/brokerage-order/adapter/repository/entity/stock.typeorm.entity';
import { Repository } from 'typeorm/repository/Repository';

describe('Brokerage Order e2e', () => {
  let app: INestApplication;
  let stockRepository: Repository<Stock>;

  beforeAll(async () => {
    await databaseIntegrationSetup();

    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = testingModule.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();

    stockRepository = testingModule.get<Repository<Stock>>(
      `${Stock.name}Repository`,
    );

    await stockRepository.save({
      symbol: 'HGCR11',
      specification: 'FII CSHGCRI HGCR11',
    });
  });

  afterAll(async () => {
    await closeDatabaseIntegrationConnections();
    await app.close();
  });

  it('should validate request body', async () => {
    return request(app.getHttpServer())
      .post('/brokerage-order')
      .send({})
      .expect(400)
      .expect({
        statusCode: 400,
        message: [
          'generalInformation must be an object',
          'businessSummary must be an object',
          'financialSummary must be an object',
        ],
        error: 'Bad Request',
      });
  });

  it('should create brokerage order', () => {
    return request(app.getHttpServer())
      .post('/brokerage-order')
      .send({
        generalInformation: {
          brokerageOrderNumber: 51198038,
          tradingFlorDate: '2022-06-24',
          clientId: '2079101',
        },
        orders: [
          {
            market: 'BOVESPA',
            buyOrSell: 'BUY',
            marketType: 'VISTA',
            symbol: 'HGCR11',
            quantity: 100,
            price: 18.5,
            total: 1850.0,
            debitOrCredit: 'DEBIT',
          },
        ],
        businessSummary: {
          debentures: 0.0,
          sellInCash: 0.0,
          buyInCash: 1850.0,
          optionsBuy: 0.0,
          optionsSell: 0.0,
          termOptions: 0.0,
          federalSecurities: 0.0,
          operationValues: 1850.0,
        },
        financialSummary: {
          clearing: {
            operationsNetValue: -1850.0,
            settlementFee: 0.46,
            registryFee: 0.0,
            totalCblc: 1850.46,
          },
          exchange: {
            termOrOptionsFee: 0.0,
            anaFee: 0.0,
            fees: 0.09,
            total: 0.09,
          },
          operationalCosts: {
            operationalFee: 4.9,
            execution: 0.0,
            custody: 0.0,
            taxes: 0.52,
            irrf: 0.0,
            others: 0.19,
            totalCosts: 5.61,
          },
          netDate: '2022-06-28',
          netTotalValue: 1856.16,
          netDebitOrCredit: 'DEBIT',
        },
      })
      .expect(201);
  });
});
