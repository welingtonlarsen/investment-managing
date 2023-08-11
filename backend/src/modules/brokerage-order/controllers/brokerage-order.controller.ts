import {
  Controller,
  Get,
  Post,
  Body,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CreateBrokerageOrderDto } from './dto/create-brokerage-order.dto';
import { BrokerageOrderService } from '../domain/brokerage-order.service';

@Controller('brokerage-order')
export class BrokerageOrderController {
  constructor(private brokerageOrderService: BrokerageOrderService) {}

  @Post()
  create(@Body() createBrokerageOrderDto: CreateBrokerageOrderDto) {
    return this.brokerageOrderService.create(createBrokerageOrderDto);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return this.brokerageOrderService.findAll({
      page,
      limit,
    });
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.brokerageOrderService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateBrokerageOrderDto: UpdateBrokerageOrderDto,
  // ) {
  //   return this.brokerageOrderService.update(+id, updateBrokerageOrderDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.brokerageOrderService.remove(+id);
  // }
}
