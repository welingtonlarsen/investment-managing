import {
  Controller,
  Get,
  Post,
  Body,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
  Delete,
  Param,
  Put,
  Patch,
} from '@nestjs/common';
import { CreateBrokerageOrderDto } from './dto/create-brokerage-order.dto';
import { BrokerageOrderService } from '../domain/brokerage-order.service';
import { UpdateBrokerageOrderDto } from './dto/update-brokerage-order.dto';

@Controller('brokeragenotes')
export class BrokerageOrderController {
  constructor(private brokerageOrderService: BrokerageOrderService) {}

  @Post()
  create(@Body() createBrokerageOrderDto: CreateBrokerageOrderDto) {
    return this.brokerageOrderService.create(createBrokerageOrderDto);
  }

  @Put(':id')
  update(
    @Body() updateBrokerageOrderDto: UpdateBrokerageOrderDto,
    @Param('id') id: number,
  ) {
    return this.brokerageOrderService.update(id, updateBrokerageOrderDto);
  }

  @Get('/summaries')
  getAllSummary(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return this.brokerageOrderService.getAllSummary({ page, limit });
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.brokerageOrderService.getById(id);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.brokerageOrderService.delete(id);
  }
}
