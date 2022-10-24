import { Injectable } from '@nestjs/common';
import { CreateBrokerageOrderDto } from './dto/create-brokerage-order.dto';
import { BrokerageOrderEntityFactory } from './factory/brokerage-order-entity.factory';
import { BrokerageOrderTypeormRepository } from '../adapter/repository/brokerage-order.typeorm.repository';

@Injectable()
export class BrokerageOrderService {
  constructor(
    private brokerageOrderRepository: BrokerageOrderTypeormRepository,
  ) {}

  public async create(data: CreateBrokerageOrderDto): Promise<void> {
    const brokerageOrderEntity = BrokerageOrderEntityFactory.from(data);
    brokerageOrderEntity.validateTotalNetValue();
    await this.brokerageOrderRepository.save(brokerageOrderEntity);
  }
}
