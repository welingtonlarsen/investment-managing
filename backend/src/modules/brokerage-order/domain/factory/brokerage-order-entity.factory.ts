import { CreateBrokerageOrderDto } from '../dto/create-brokerage-order.dto';
import { BrokerageOrderEntity } from '../entity/brokerage-order.entity';
import { FloatParser } from '../../../../util/float-parser';

export class BrokerageOrderEntityFactory {
  static from(dto: CreateBrokerageOrderDto): BrokerageOrderEntity {
    const {
      orders: ordersDto,
      businessSummary: businessSummaryDto,
      financialSummary: financialSummaryDto,
    } = dto;

    const orders = ordersDto.map((order) => {
      const obj = {
        ...order,
        stock: { symbol: order.symbol, specification: undefined },
        quantity: order.quantity,
        price: FloatParser.moneyAsCent(order.price),
        total: FloatParser.moneyAsCent(order.total),
      };
      return obj;
    });

    const businessSummary = {
      id: businessSummaryDto.id,
      debentures: FloatParser.moneyAsCent(businessSummaryDto.debentures),
      sellInCash: FloatParser.moneyAsCent(businessSummaryDto.sellInCash),
      buyInCash: FloatParser.moneyAsCent(businessSummaryDto.buyInCash),
      optionsBuy: FloatParser.moneyAsCent(businessSummaryDto.optionsBuy),
      optionsSell: FloatParser.moneyAsCent(businessSummaryDto.optionsSell),
      termOptions: FloatParser.moneyAsCent(businessSummaryDto.termOptions),
      federalSecurities: FloatParser.moneyAsCent(
        businessSummaryDto.federalSecurities,
      ),
      operationValues: FloatParser.moneyAsCent(
        businessSummaryDto.operationValues,
      ),
    };

    const {
      clearing: clearingDto,
      exchange: exchangeDto,
      operationalCosts: operationalCostsDto,
    } = financialSummaryDto;

    const financialSummary = {
      ...financialSummaryDto,
      id: financialSummaryDto.id,
      clearing: {
        id: clearingDto.id,
        operationsNetValue: FloatParser.moneyAsCent(
          clearingDto.operationsNetValue,
        ),
        settlementFee: FloatParser.moneyAsCent(clearingDto.settlementFee),
        registryFee: FloatParser.moneyAsCent(clearingDto.registryFee),
        totalCblc: FloatParser.moneyAsCent(clearingDto.totalCblc),
      },
      exchange: {
        id: exchangeDto.id,
        termOrOptionsFee: FloatParser.moneyAsCent(exchangeDto.termOrOptionsFee),
        anaFee: FloatParser.moneyAsCent(exchangeDto.anaFee),
        fees: FloatParser.moneyAsCent(exchangeDto.fees),
        total: FloatParser.moneyAsCent(exchangeDto.total),
      },
      operationalCosts: {
        id: operationalCostsDto.id,
        operationalFee: FloatParser.moneyAsCent(
          operationalCostsDto.operationalFee,
        ),
        execution: FloatParser.moneyAsCent(operationalCostsDto.execution),
        custody: FloatParser.moneyAsCent(operationalCostsDto.custody),
        taxes: FloatParser.moneyAsCent(operationalCostsDto.taxes),
        irrf: FloatParser.moneyAsCent(operationalCostsDto.irrf),
        others: FloatParser.moneyAsCent(operationalCostsDto.others),
        totalCosts: FloatParser.moneyAsCent(operationalCostsDto.totalCosts),
      },
      netTotalValue: FloatParser.moneyAsCent(financialSummaryDto.netTotalValue),
    };

    return new BrokerageOrderEntity(
      dto.generalInformation,
      orders,
      businessSummary,
      financialSummary,
    );
  }
}
