import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GeneralInformation } from './general-information.typeorm.entity';

@Entity()
export class BrokerageOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  other: string;

  @OneToOne(() => GeneralInformation)
  @JoinColumn()
  generalInformation: GeneralInformation;

  constructor(other: string, generalInformation: GeneralInformation) {
    this.other = other;
    this.generalInformation = generalInformation;
  }
}
