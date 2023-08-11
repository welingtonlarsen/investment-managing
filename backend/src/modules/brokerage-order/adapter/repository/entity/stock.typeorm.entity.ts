import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 6 })
  symbol: string;

  @Column()
  specification: string;
}
