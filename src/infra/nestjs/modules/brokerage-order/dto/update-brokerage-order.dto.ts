import { PartialType } from '@nestjs/mapped-types';
import { CreateBrokerageOrderDto } from './create-brokerage-order.dto';

export class UpdateBrokerageOrderDto extends PartialType(CreateBrokerageOrderDto) {}
