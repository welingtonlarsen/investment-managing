import {
  IsDate,
  IsEnum,
  IsNumber,
  IsObject, IsOptional,
  ValidateNested
} from "class-validator";
import { Type } from 'class-transformer';

class Clearing {
  id?: number;

  @IsNumber()
  operationsNetValue: number;

  @IsNumber()
  settlementFee: number;

  @IsNumber()
  registryFee: number;

  @IsNumber()
  totalCblc: number;
}

class Exchange {
  id?: number;

  @IsNumber()
  termOrOptionsFee: number;

  @IsNumber()
  anaFee: number;

  @IsNumber()
  fees: number;

  @IsNumber()
  total: number;
}

class OperationalCosts {
  id?: number;

  @IsNumber()
  operationalFee: number;

  @IsNumber()
  execution: number;

  @IsNumber()
  custody: number;

  @IsNumber()
  taxes: number;

  @IsNumber()
  irrf: number;

  @IsNumber()
  others: number;

  @IsNumber()
  totalCosts: number;
}

enum DebitOrCredit {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

export class FinancialSummary {
  @IsObject()
  @ValidateNested()
  @Type(() => Clearing)
  clearing: Clearing;

  @IsObject()
  @ValidateNested()
  @Type(() => Exchange)
  exchange: Exchange;

  @IsObject()
  @ValidateNested()
  @Type(() => OperationalCosts)
  operationalCosts: OperationalCosts;

  @IsDate()
  @Type(() => Date)
  netDate: Date;

  @IsNumber()
  netTotalValue: number;

  @IsEnum(DebitOrCredit)
  netDebitOrCredit: DebitOrCredit;
}
