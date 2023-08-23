import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { BrokerageOrder } from '../adapter/repository/entity/brokerage-order.db.entity';
import { paginate } from 'nestjs-typeorm-paginate';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('brokerageorders')
export class BrokerageOrderQueryController {
  constructor(
    @InjectRepository(BrokerageOrder)
    private brokerageOrderRepository: Repository<BrokerageOrder>,
  ) {}

  @Get()
  fetchAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return paginate<BrokerageOrder>(this.brokerageOrderRepository, {
      page,
      limit,
    });
  }
}
