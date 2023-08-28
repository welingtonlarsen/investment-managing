import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

enum Market {
  BOVESPA = 'BOVESPA',
}

enum BuyOrSell {
  BUY = 'BUY',
  SELL = 'SELL',
}

enum MarketType {
  VISTA = 'VISTA',
}

enum DebitOrCredit {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

export class OrderDto {
  id?: number;

  @IsEnum(Market)
  market: Market;

  @IsEnum(BuyOrSell)
  buyOrSell: BuyOrSell;

  @IsEnum(MarketType)
  marketType: MarketType;

  @IsNotEmpty()
  symbol: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsNumber()
  total: number;

  @IsEnum(DebitOrCredit)
  debitOrCredit: DebitOrCredit;
}
