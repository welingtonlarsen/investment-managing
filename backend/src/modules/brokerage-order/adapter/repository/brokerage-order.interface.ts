import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { BrokerageOrderEntity } from '../../domain/entity/brokerage-order.entity';
import { BrokerageOrder } from './entity/brokerage-order.db.entity';

export const BROKERAGE_ORDER_REPOSITORY_TOKEN =
  'brokerage-order-repository-token';

export interface BrokerageOrderRepository {
  save(entity: BrokerageOrderEntity): Promise<void>;

  findAll(options: IPaginationOptions): Promise<Pagination<BrokerageOrder>>;
}
