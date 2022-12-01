import { Test, TestingModule } from '@nestjs/testing';
import { BrokerageOrderService } from '../brokerage-order.service';
import { BrokerageOrderTypeormRepository } from '../../adapter/repository/brokerage-order.typeorm.repository';
import { InvalidTotalNetValue } from '../error/create-brokerage-order.usecase';
import { ValidCreateBrokerageOrderDto } from './seed/valid-create-brokerage-order-dto';
import {
  BuyOrSell,
  DebitOrCredit,
  Market,
  MarketType,
} from '../entity/order.entity';
import { InvalidTotalNetValueDto } from './seed/invalid-total-net-value-dto';

describe('BrokerageOrderService', () => {
  let service: BrokerageOrderService;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const brokerageOrderTypeORMRepositoryMock: BrokerageOrderTypeormRepository = {
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BrokerageOrderService,
        {
          provide: BrokerageOrderTypeormRepository,
          useValue: brokerageOrderTypeORMRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<BrokerageOrderService>(BrokerageOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should save brokerage order', async () => {
    await service.create(ValidCreateBrokerageOrderDto);
    expect(brokerageOrderTypeORMRepositoryMock.save).toHaveBeenCalledWith({
      generalInformation: {
        brokerageOrderNumber: 51198038,
        tradingFlorDate: new Date('2022-06-24'),
        clientId: '2079101',
      },
      orders: [
        {
          market: Market.BOVESPA,
          buyOrSell: BuyOrSell.BUY,
          marketType: MarketType.VISTA,
          title: 'SANEPAR UNT N2',
          quantity: 100,
          price: 1850,
          total: 185000,
          debitOrCredit: DebitOrCredit.DEBIT,
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
      },
      financialSummary: {
        clearing: {
          operationsNetValue: 185000,
          settlementFee: 46,
          registryFee: 0,
          totalCblc: 185046,
        },
        exchange: {
          termOrOptionsFee: 0,
          anaFee: 0,
          fees: 9,
          total: 9,
        },
        operationalCosts: {
          operationalFee: 490,
          execution: 0,
          custody: 0,
          taxes: 52,
          irrf: 0,
          others: 19,
          totalCosts: 561,
        },
        netDate: new Date('2022-06-28'),
        netTotalValue: 185616,
        netDebitOrCredit: DebitOrCredit.DEBIT,
      },
    });
  });

  it('should throw InvalidTotalNetValue error', async () => {
    await expect(() => service.create(InvalidTotalNetValueDto)).rejects.toThrow(
      new InvalidTotalNetValue(
        `Total net value from brokerage order 51198038 does not match to sum of all values`,
      ),
    );
  });
});
