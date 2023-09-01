export type BrokerageNoteSummary = {
  id: number;
  date: Date;
  exchange: string;
  purchases: number;
  sales: number;
  costs: number;
  net: number;
  debitOrCredit: string;
};
