import { IsNumber } from 'class-validator';

export class BusinessSummary {
  id?: number;

  @IsNumber()
  debentures: number;

  @IsNumber()
  sellInCash: number;

  @IsNumber()
  buyInCash: number;

  @IsNumber()
  optionsBuy: number;

  @IsNumber()
  optionsSell: number;

  @IsNumber()
  termOptions: number;

  @IsNumber()
  federalSecurities: number;

  @IsNumber()
  operationValues: number;
}
