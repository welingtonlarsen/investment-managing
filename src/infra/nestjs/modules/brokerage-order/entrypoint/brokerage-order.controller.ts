import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateBrokerageOrderDto } from '../dto/create-brokerage-order.dto';
import { CreateBrokerageOrderUseCase } from '../../../../../application/usecase/create-brokerage-order.usecase';

@Controller('brokerage-order')
export class BrokerageOrderController {
  constructor(
    private createBrokerageOrderUseCase: CreateBrokerageOrderUseCase,
  ) {}

  @Post()
  create(@Body() createBrokerageOrderDto: CreateBrokerageOrderDto) {
    return this.createBrokerageOrderUseCase.execute(createBrokerageOrderDto);
  }

  // @Get()
  // findAll() {
  //   return this.brokerageOrderService.findAll();
  // }
  //
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
