import { Inject, Injectable } from '@nestjs/common';
import { CreateBrokerageOrderDto } from './dto/create-brokerage-order.dto';
import { BrokerageOrderEntityFactory } from './factory/brokerage-order-entity.factory';
import { BrokerageOrder } from '../adapter/repository/entity/brokerage-order.db.entity';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import {
  BROKERAGE_ORDER_REPOSITORY_TOKEN,
  BrokerageOrderRepository,
} from '../adapter/repository/brokerage-order.interface';

@Injectable()
export class BrokerageOrderService {
  constructor(
    @Inject(BROKERAGE_ORDER_REPOSITORY_TOKEN)
    private brokerageOrderRepository: BrokerageOrderRepository,
  ) {}

  public async create(data: CreateBrokerageOrderDto): Promise<void> {
    const brokerageOrderEntity = BrokerageOrderEntityFactory.from(data);
    // brokerageOrderEntity.validateTotalNetValue();
    await this.brokerageOrderRepository.save(brokerageOrderEntity);
  }

  public async findAll(
    options: IPaginationOptions,
  ): Promise<Pagination<BrokerageOrder>> {
    return this.brokerageOrderRepository.findAll(options);
  }
}
