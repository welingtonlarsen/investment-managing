import { Injectable } from '@nestjs/common';
import { Stock } from '../adapter/repository/entity/stock.typeorm.entity';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GetStocksService {
  constructor(
    @InjectRepository(Stock)
    private stockRepository: Repository<Stock>,
  ) {}

  async execute(options: IPaginationOptions): Promise<Pagination<Stock>> {
    const r = await paginate<Stock>(this.stockRepository, options);
    return r;
  }
}
