import { Inject, Injectable } from '@nestjs/common';
import { CreateBrokerageOrderDto } from './dto/create-brokerage-order.dto';
import { BrokerageOrderEntityFactory } from './factory/brokerage-order-entity.factory';
import {
  IPaginationMeta,
  IPaginationOptions,
  Pagination,
} from 'nestjs-typeorm-paginate';
import {
  BROKERAGE_ORDER_REPOSITORY_TOKEN,
  BrokerageOrderRepository,
} from '../adapter/repository/brokerage-order.interface';
import { BrokerageOrderSummary } from './entity/brokerage-order-summary.entity';
import { BrokerageOrderEntity } from './entity/brokerage-order.entity';
import { UpdateBrokerageOrderDto } from '../controllers/dto/update-brokerage-order.dto';

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

  public async getAllSummary(
    options: IPaginationOptions,
  ): Promise<Pagination<BrokerageOrderSummary, IPaginationMeta>> {
    const brokerageOrders = await this.brokerageOrderRepository.findAll(
      options,
    );
    const summaryItems = brokerageOrders.items.map(
      (brokerageOrder) => new BrokerageOrderSummary(brokerageOrder),
    );

    return {
      ...brokerageOrders,
      items: summaryItems,
    };
  }

  public async delete(id: number): Promise<void> {
    return this.brokerageOrderRepository.delete(id);
  }

  public async getById(id: number): Promise<BrokerageOrderEntity> {
    return this.brokerageOrderRepository.getById(id);
  }

  public async update(id: number, brokerageOrder: UpdateBrokerageOrderDto) {
    const brokerageOrderEntity =
      brokerageOrder as unknown as BrokerageOrderEntity;
    return this.brokerageOrderRepository.update(id, brokerageOrderEntity);
  }
}
