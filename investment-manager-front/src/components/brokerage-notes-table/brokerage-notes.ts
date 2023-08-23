import { BrokerageNotesSummaries } from '../../types/brokerage-notes-summaries.type';
import { TBrokerageNoteSummary } from '../../utils/types/brokerage-note-summary.type';

export const brokerageNotes: BrokerageNotesSummaries[] = [
  {
    id: 1,
    date: new Date('2015-09-13'),
    exchange: 'XP',
    purchases: 5000,
    sales: 3000,
    costs: 50,
    net: 1950,
    debitOrCredit: 'DEBIT',
  },
  {
    id: 2,
    date: new Date('2020-05-25'),
    exchange: 'ABC',
    purchases: 3500,
    sales: 2800,
    costs: 40,
    net: 760,
    debitOrCredit: 'CREDIT',
  },
];
