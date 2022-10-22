import { Test, TestingModule } from '@nestjs/testing';
import { BrokerageOrderController } from './brokerage-order.controller';
//import { BrokerageOrderService } from '../brokerage-order.service';

describe('BrokerageOrderController', () => {
  let controller: BrokerageOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrokerageOrderController],
      //providers: [BrokerageOrderService],
    }).compile();

    controller = module.get<BrokerageOrderController>(BrokerageOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
