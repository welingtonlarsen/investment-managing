import { CreateBrokerageOrderDto } from '../dto/create-brokerage-order.dto';
import { BrokerageOrderRepository } from '../repository/BrokerageOrderRepository';
import { BrokerageOrderEntityFactory } from '../factory/brokerage-order-entity.factory';

export class CreateBrokerageOrderUseCase {
  constructor(private brokerageOrderRepository: BrokerageOrderRepository) {}

  async execute(data: CreateBrokerageOrderDto): Promise<void> {
    const brokerageOrderEntity = BrokerageOrderEntityFactory.from(data);
    brokerageOrderEntity.validateTotalNetValue();
    await this.brokerageOrderRepository.save(brokerageOrderEntity);
  }
}
