import {
  BuyOrSell,
  DebitOrCredit,
  Market,
  MarketType,
} from '../../dto/order.dto';
import { ValidCreateBrokerageOrderDto } from './valid-create-brokerage-order-dto';

export const invalidTotalNetValue = {
  ...ValidCreateBrokerageOrderDto,
  financialSummary: {
    ...ValidCreateBrokerageOrderDto.financialSummary,
    netTotalValue: 999.99,
    netDebitOrCredit: DebitOrCredit.DEBIT,
  },
};
