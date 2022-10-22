import { CreateBrokerageOrderUseCase } from '../usecase/create-brokerage-order.usecase';
import { invalidTotalNetValue } from './seed/invalid-total-net-value';
import { InvalidTotalNetValue } from '../../domain/error/create-brokerage-order.usecase';
import { BrokerageOrderRepository } from '../repository/BrokerageOrderRepository';
import { ValidCreateBrokerageOrderDto } from './seed/valid-create-brokerage-order-dto';

const mockedBrokerageOrderRepository: jest.Mocked<BrokerageOrderRepository> = {
  save: jest.fn(),
};

describe('Create Brokerage Order Use Case', () => {
  let createBrokerageOrderUseCase: CreateBrokerageOrderUseCase;

  beforeEach(() => {
    createBrokerageOrderUseCase = new CreateBrokerageOrderUseCase(
      mockedBrokerageOrderRepository,
    );
  });

  it('should save brokerage order', async () => {
    await createBrokerageOrderUseCase.execute(ValidCreateBrokerageOrderDto);
    expect(mockedBrokerageOrderRepository.save).toHaveBeenCalledWith(
      ValidCreateBrokerageOrderDto,
    );
  });

  it('should throw InvalidTotalNetValue error', async () => {
    await expect(() =>
      createBrokerageOrderUseCase.execute(invalidTotalNetValue),
    ).rejects.toThrow(
      new InvalidTotalNetValue(
        `Total net value from brokerage order 51198038 does not match to sum of all values`,
      ),
    );
  });
});
