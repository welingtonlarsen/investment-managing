import { GeneralInformationEntity } from './general-information.entity';
import { OrderEntity } from './order.entity';
import { BusinessSummaryEntity } from './business-summary.entity';
import { FinancialSummaryEntity } from './financial-summary.entity';
import { CreateBrokerageOrderDto } from '../dto/create-brokerage-order.dto';
import { DebitOrCredit } from '../dto/financial-summary.dto';
import { InvalidTotalNetValue } from '../error/create-brokerage-order.usecase';

export class BrokerageOrderEntity {
  constructor(
    readonly generalInformation: GeneralInformationEntity,
    readonly orders: OrderEntity[],
    readonly businessSummary: BusinessSummaryEntity,
    readonly financialSummary: FinancialSummaryEntity,
  ) {}

  validateTotalNetValue() {
    const ordersValueSum = this.orders.reduce(
      (sum, order) =>
        order.debitOrCredit === DebitOrCredit.CREDIT
          ? sum + order.total
          : sum - order.total,
      0,
    );

    const clearingFees =
      this.financialSummary.clearing.registryFee +
      this.financialSummary.clearing.settlementFee;
    const totalExchange = this.financialSummary.exchange.total;
    const totalOperationalCost =
      this.financialSummary.operationalCosts.totalCosts;

    const expectedTotalNetValue = +(
      ordersValueSum -
      clearingFees -
      totalExchange -
      totalOperationalCost
    ).toFixed(2);

    let totalNetValue = this.financialSummary.netTotalValue;
    if (this.financialSummary.netDebitOrCredit === DebitOrCredit.DEBIT) {
      totalNetValue *= -1;
    }

    if (totalNetValue != expectedTotalNetValue) {
      throw new InvalidTotalNetValue(
        `Total net value from brokerage order ${this.generalInformation.brokerageOrderNumber} does not match to sum of all values`,
      );
    }
  }
}
