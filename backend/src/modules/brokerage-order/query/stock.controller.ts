import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { GetStocksService } from './get-stocks.service';

@Controller('stocks')
export class StockController {
  constructor(private getStockService: GetStocksService) {}

  @Get()
  getAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return this.getStockService.execute({ page, limit });
  }
}
