import { Repository } from 'typeorm';
import { BrokerageOrder } from './entity/brokerage-order.db.entity';
import { GeneralInformation } from './entity/general-information.typeorm.entity';
import { Order } from './entity/order.typeorm.entity';
import { BusinessSummary } from './entity/business-summary.typeorm.entity';
import {
  Clearing,
  Exchange,
  FinancialSummary,
  OperationalCosts,
} from './entity/financial-summary.typeorm.entity';
import { Injectable } from '@nestjs/common';
import { BrokerageOrderEntity } from '../../domain/entity/brokerage-order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class BrokerageOrderTypeormRepository {
  constructor(
    @InjectRepository(BrokerageOrder)
    private readonly brokerageOrderRepository: Repository<BrokerageOrder>,
  ) {}

  async save(entity: BrokerageOrderEntity): Promise<any> {
    const { generalInformation, orders, businessSummary, financialSummary } =
      entity;
    const { clearing, exchange, operationalCosts } = financialSummary;

    // Parse General Information
    const generalInformationTypeOrm = new GeneralInformation(
      generalInformation.brokerageOrderNumber,
      generalInformation.tradingFlorDate,
      generalInformation.clientId,
    );

    // Parse Orders
    const ordersTypeOrm = orders.map(
      (order) =>
        new Order(
          order.market,
          order.buyOrSell,
          order.marketType,
          order.title,
          order.quantity,
          order.price,
          order.total,
          order.debitOrCredit,
        ),
    );

    // Parse Business Summary
    const businessSummaryTypeOrm = new BusinessSummary(
      businessSummary.debentures,
      businessSummary.sellInCash,
      businessSummary.buyInCash,
      businessSummary.optionsBuy,
      businessSummary.optionsSell,
      businessSummary.termOptions,
      businessSummary.federalSecurities,
      businessSummary.operationValues,
    );

    // Parse Financial Summary
    const clearingTypeOrm = new Clearing(
      clearing.operationsNetValue,
      clearing.settlementFee,
      clearing.registryFee,
      clearing.totalCblc,
    );
    const exchangeTypeOrm = new Exchange(
      exchange.termOrOptionsFee,
      exchange.anaFee,
      exchange.fees,
      exchange.total,
    );
    const operationalCostsTypeOrm = new OperationalCosts(
      operationalCosts.operationalFee,
      operationalCosts.execution,
      operationalCosts.custody,
      operationalCosts.taxes,
      operationalCosts.irrf,
      operationalCosts.others,
      operationalCosts.totalCosts,
    );
    const financialSummaryTypeOrm = new FinancialSummary(
      clearingTypeOrm,
      exchangeTypeOrm,
      operationalCostsTypeOrm,
      financialSummary.netDate,
      financialSummary.netTotalValue,
      financialSummary.netDebitOrCredit,
    );

    // Parse Brokerage Order
    const brokerageOrderTypeOrm = new BrokerageOrder(
      generalInformationTypeOrm,
      ordersTypeOrm,
      businessSummaryTypeOrm,
      financialSummaryTypeOrm,
    );

    await this.brokerageOrderRepository.save(brokerageOrderTypeOrm);

    return Promise.resolve();
  }

  async findAll(
    options: IPaginationOptions,
  ): Promise<Pagination<BrokerageOrder>> {
    return paginate<BrokerageOrder>(this.brokerageOrderRepository, options);
  }
}
