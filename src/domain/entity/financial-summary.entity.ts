type Clearing = {
  operationsNetValue: number;
  settlementFee: number;
  registryFee: number;
  totalCblc: number;
};

type Exchange = {
  termOrOptionsFee: number;
  anaFee: number;
  fees: number;
  total: number;
};

type OperationalCosts = {
  operationalFee: number;
  execution: number;
  custody: number;
  taxes: number;
  irrf: number;
  others: number;
  totalCosts: number;
};

export enum DebitOrCredit {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

export type FinancialSummaryEntity = {
  clearing: Clearing;
  exchange: Exchange;
  operationalCosts: OperationalCosts;
  netDate: Date;
  netTotalValue: number;
  netDebitOrCredit: DebitOrCredit;
};
