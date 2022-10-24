import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Transform } from 'class-transformer';
import { BrokerageOrder } from './brokerage-order.db.entity';
import { DecimalTransformer } from '../../../../../util/transformers';

export enum Market {
  BOVESPA = 'BOVESPA',
}

export enum BuyOrSell {
  BUY = 'BUY',
  SELL = 'SELL',
}

export enum MarketType {
  VISTA = 'VISTA',
}

export enum DebitOrCredit {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Market,
    default: Market.BOVESPA,
  })
  market: Market;

  @Column({
    type: 'enum',
    enum: BuyOrSell,
  })
  buyOrSell: BuyOrSell;

  @Column({
    type: 'enum',
    enum: MarketType,
    default: MarketType.VISTA,
  })
  marketType: MarketType;

  @Column()
  title: string;

  @Column()
  quantity: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    transformer: new DecimalTransformer(),
  })
  price: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    transformer: new DecimalTransformer(),
  })
  total: number;

  @Column({
    type: 'enum',
    enum: DebitOrCredit,
  })
  debitOrCredit: DebitOrCredit;

  @ManyToOne((type) => BrokerageOrder)
  @JoinColumn({ name: 'brokerage_order_id', referencedColumnName: 'id' })
  brokerageOrder: BrokerageOrder;

  constructor(
    market: Market,
    buyOrSell: BuyOrSell,
    marketType: MarketType,
    title: string,
    quantity: number,
    price: number,
    total: number,
    debitOrCredit: DebitOrCredit,
  ) {
    this.market = market;
    this.buyOrSell = buyOrSell;
    this.marketType = marketType;
    this.title = title;
    this.quantity = quantity;
    this.price = price;
    this.total = total;
    this.debitOrCredit = debitOrCredit;
  }
}
