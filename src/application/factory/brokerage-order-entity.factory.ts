import { CreateBrokerageOrderDto } from '../dto/create-brokerage-order.dto';
import { BrokerageOrderEntity } from '../../domain/entity/brokerage-order.entity';

export class BrokerageOrderEntityFactory {
  static from(dto: CreateBrokerageOrderDto): BrokerageOrderEntity {
    return new BrokerageOrderEntity(
      dto.generalInformation,
      dto.orders,
      dto.businessSummary,
      dto.financialSummary,
    );
  }
}
