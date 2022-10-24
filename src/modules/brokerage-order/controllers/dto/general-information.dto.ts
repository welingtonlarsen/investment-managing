import { IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GeneralInformationDto {
  @IsNumber()
  brokerageOrderNumber: number;

  @IsDate()
  @Type(() => Date)
  tradingFlorDate: Date;

  @IsString()
  clientId: string;
}
