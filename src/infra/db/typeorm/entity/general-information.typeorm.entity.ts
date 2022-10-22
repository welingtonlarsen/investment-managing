import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GeneralInformation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brokerageOrderNumber: number;

  @Column()
  tradingFlorDate: Date;

  @Column()
  clientId: string;
}
