import { GeneralInformationEntity } from './general-information.entity';
import { OrderEntity } from './order.entity';
import { BusinessSummaryEntity } from './business-summary.entity';
import { FinancialSummaryEntity } from './financial-summary.entity';
import { DebitOrCredit } from '../dto/financial-summary.dto';
import { InvalidTotalNetValue } from '../error/create-brokerage-order.usecase';
import { FloatParser } from '../../../../util/float-parser';

export class BrokerageOrderEntity {
  constructor(
    readonly generalInformation: GeneralInformationEntity,
    readonly orders: OrderEntity[],
    readonly businessSummary: BusinessSummaryEntity,
    readonly financialSummary: FinancialSummaryEntity,
    readonly id?: number,
  ) {}

  validateTotalNetValue() {
    const ordersValueSum =
      this.orders.reduce(
        (sum, order) =>
          order.debitOrCredit === DebitOrCredit.CREDIT
            ? sum + order.total * 100
            : sum - order.total * 100,
        0,
      ) / 100;

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

  parseFinancialValuesToFloat(): BrokerageOrderEntity {
    const orders = this.orders.map((order) => {
      const obj = {
        ...order,
        quantity: FloatParser.floatMoney(order.quantity),
        price: FloatParser.floatMoney(order.price),
        total: FloatParser.floatMoney(order.total),
      };
      return obj;
    });

    const businessSummary = {
      ...this.businessSummary,
      debentures: FloatParser.floatMoney(this.businessSummary.debentures),
      sellInCash: FloatParser.floatMoney(this.businessSummary.sellInCash),
      buyInCash: FloatParser.floatMoney(this.businessSummary.buyInCash),
      optionsBuy: FloatParser.floatMoney(this.businessSummary.optionsBuy),
      optionsSell: FloatParser.floatMoney(this.businessSummary.optionsSell),
      termOptions: FloatParser.floatMoney(this.businessSummary.termOptions),
      federalSecurities: FloatParser.floatMoney(
        this.businessSummary.federalSecurities,
      ),
      operationValues: FloatParser.floatMoney(
        this.businessSummary.operationValues,
      ),
    };

    const { clearing, exchange, operationalCosts } = this.financialSummary;

    const financialSummary = {
      ...this.financialSummary,
      clearing: {
        ...clearing,
        operationsNetValue: FloatParser.floatMoney(clearing.operationsNetValue),
        settlementFee: FloatParser.floatMoney(clearing.settlementFee),
        registryFee: FloatParser.floatMoney(clearing.registryFee),
        totalCblc: FloatParser.floatMoney(clearing.totalCblc),
      },
      exchange: {
        ...exchange,
        termOrOptionsFee: FloatParser.floatMoney(exchange.termOrOptionsFee),
        anaFee: FloatParser.floatMoney(exchange.anaFee),
        fees: FloatParser.floatMoney(exchange.fees),
        total: FloatParser.floatMoney(exchange.total),
      },
      operationalCosts: {
        ...operationalCosts,
        operationalFee: FloatParser.floatMoney(operationalCosts.operationalFee),
        execution: FloatParser.floatMoney(operationalCosts.execution),
        custody: FloatParser.floatMoney(operationalCosts.custody),
        taxes: FloatParser.floatMoney(operationalCosts.taxes),
        irrf: FloatParser.floatMoney(operationalCosts.irrf),
        others: FloatParser.floatMoney(operationalCosts.others),
        totalCosts: FloatParser.floatMoney(operationalCosts.totalCosts),
      },
      netTotalValue: FloatParser.floatMoney(
        this.financialSummary.netTotalValue,
      ),
    };

    return new BrokerageOrderEntity(
      this.generalInformation,
      orders,
      businessSummary,
      financialSummary,
      this.id,
    );
  }
}
