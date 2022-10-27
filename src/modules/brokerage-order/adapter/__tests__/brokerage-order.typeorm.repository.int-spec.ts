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
import { ValidCreateBrokerageOrderDto } from '../../../../util/test-seed/seed/valid-create-brokerage-order-dto';
import { BrokerageOrderEntity } from '../../domain/entity/brokerage-order.entity';
import { Repository } from 'typeorm';
import { BrokerageOrder } from '../repository/entity/brokerage-order.db.entity';

describe('Brokerage Order TypeORM Repository tests', () => {
  let app: INestApplication;
  let brokerageOrderRepository: Repository<BrokerageOrder>;

  let brokerageOrderTypeormRepository: BrokerageOrderTypeormRepository;

  beforeAll(async () => {
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

  afterAll(async () => {
    await closeDatabaseIntegrationConnections();
    await app.close();
  });

  afterEach(async () => {
    await resetDatabase();
  });

  it('should successful save a brokerage order', async () => {
    await brokerageOrderTypeormRepository.save(
      ValidCreateBrokerageOrderDto as BrokerageOrderEntity,
    );

    const persistedBrokerageOrders = await brokerageOrderRepository.find();
    expect(persistedBrokerageOrders.length).toBe(1);

    const persistedBrokerageOrder = persistedBrokerageOrders[0];
    delete persistedBrokerageOrder.id;
    delete persistedBrokerageOrder.financialSummary.id;
    delete persistedBrokerageOrder.financialSummary.clearing.id;
    delete persistedBrokerageOrder.financialSummary.exchange.id;
    delete persistedBrokerageOrder.financialSummary.operationalCosts.id;
    delete persistedBrokerageOrder.businessSummary.id;
    delete persistedBrokerageOrder.generalInformation.id;
    delete persistedBrokerageOrder.orders[0].id;

    expect(persistedBrokerageOrder).toEqual(ValidCreateBrokerageOrderDto);
  });
});
