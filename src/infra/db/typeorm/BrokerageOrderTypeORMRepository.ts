import { BrokerageOrderRepository } from '../../../application/repository/BrokerageOrderRepository';
import { Repository } from 'typeorm';
import { BrokerageOrder } from './entity/brokerage-order.db.entity';
import { BrokerageOrderEntity } from '../../../domain/entity/brokerage-order.entity';

export class BrokerageOrderTypeORMRepository
  implements BrokerageOrderRepository
{
  constructor(private brokerageOrderRepository: Repository<BrokerageOrder>) {}

  async save(entity: BrokerageOrderEntity): Promise<any> {
    console.log('asdad');
    const x = new BrokerageOrder('abcd', null);
    x.other = 'abcde';

    console.log('creating');
    const result = await this.brokerageOrderRepository.save(x);

    console.log(result);

    return Promise.resolve(undefined);
  }
}
