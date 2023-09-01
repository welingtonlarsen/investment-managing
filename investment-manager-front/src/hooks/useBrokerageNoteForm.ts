import { useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

export type TOrder = {
  id?: string;
  market: string;
  buyOrSell: 'BUY' | 'SELL';
  marketType: string;
  symbol?: string;
  stock?: {
    symbol: string;
    specification: string;
  };
  quantity: number | undefined;
  price: number | undefined;
  total: number | undefined;
  debitOrCredit: string;
};

export type TBrokerageNote = {
  id?: number;
  generalInformation: {
    brokerageOrderNumber: number | undefined;
    tradingFlorDate: string | undefined;
    clientId: string | undefined;
  };
  orders: TOrder[];
  businessSummary: {
    debentures: number | undefined;
    sellInCash: number | undefined;
    buyInCash: number | undefined;
    optionsBuy: number | undefined;
    optionsSell: number | undefined;
    termOptions: number | undefined;
    federalSecurities: number | undefined;
    operationValues: number | undefined;
  };
  financialSummary: {
    clearing: {
      operationsNetValue: number | undefined;
      settlementFee: number | undefined;
      registryFee: number | undefined;
      totalCblc: number | undefined;
    };
    exchange: {
      termOrOptionsFee: number | undefined;
      anaFee: number | undefined;
      fees: number | undefined;
      total: number | undefined;
    };
    operationalCosts: {
      operationalFee: number | undefined;
      execution: number | undefined;
      custody: number | undefined;
      taxes: number | undefined;
      irrf: number | undefined;
      others: number | undefined;
      totalCosts: number | undefined;
    };
    netDate: string | undefined;
    netTotalValue: number | undefined;
    netDebitOrCredit: string | undefined;
  };
};

type Paths<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? Paths<T[K], `${Prefix & string}${Prefix extends '' ? '' : '.'}${K & string}`>
    : `${Prefix & string}${Prefix extends '' ? '' : '.'}${K & string}`;
}[keyof T];

export type TBrokerageOrderPropType =
  | Paths<TBrokerageNote, any>
  | Paths<{ orders: TOrder }, any>
  | 'netDate'
  | 'netTotalValue'
  | 'netDebitOrCredit';

export const defaultOrder = {
  market: '',
  buyOrSell: '' as 'BUY' | 'SELL',
  marketType: '',
  symbol: '',
  quantity: undefined,
  price: undefined,
  total: undefined,
  debitOrCredit: '',
};

export const defaultValues: TBrokerageNote = {
  generalInformation: {
    brokerageOrderNumber: undefined,
    tradingFlorDate: '',
    clientId: '',
  },
  orders: [defaultOrder],
  businessSummary: {
    debentures: undefined,
    sellInCash: undefined,
    buyInCash: undefined,
    optionsBuy: undefined,
    optionsSell: undefined,
    termOptions: undefined,
    federalSecurities: undefined,
    operationValues: undefined,
  },
  financialSummary: {
    clearing: {
      operationsNetValue: undefined,
      settlementFee: undefined,
      registryFee: undefined,
      totalCblc: undefined,
    },
    exchange: {
      termOrOptionsFee: undefined,
      anaFee: undefined,
      fees: undefined,
      total: undefined,
    },
    operationalCosts: {
      operationalFee: undefined,
      execution: undefined,
      custody: undefined,
      taxes: undefined,
      irrf: undefined,
      others: undefined,
      totalCosts: undefined,
    },
    netDate: undefined,
    netTotalValue: undefined,
    netDebitOrCredit: '',
  },
};

export const useBrokerageNoteForm = () => {
  const defaultValues: TBrokerageNote = {
    generalInformation: {
      brokerageOrderNumber: undefined,
      tradingFlorDate: '',
      clientId: '',
    },
    orders: [defaultOrder],
    businessSummary: {
      debentures: undefined,
      sellInCash: undefined,
      buyInCash: undefined,
      optionsBuy: undefined,
      optionsSell: undefined,
      termOptions: undefined,
      federalSecurities: undefined,
      operationValues: undefined,
    },
    financialSummary: {
      clearing: {
        operationsNetValue: undefined,
        settlementFee: undefined,
        registryFee: undefined,
        totalCblc: undefined,
      },
      exchange: {
        termOrOptionsFee: undefined,
        anaFee: undefined,
        fees: undefined,
        total: undefined,
      },
      operationalCosts: {
        operationalFee: undefined,
        execution: undefined,
        custody: undefined,
        taxes: undefined,
        irrf: undefined,
        others: undefined,
        totalCosts: undefined,
      },
      netDate: undefined,
      netTotalValue: undefined,
      netDebitOrCredit: '',
    },
  };

  const form = useForm<TBrokerageNote>({ defaultValues });

  const { register: formRegister, handleSubmit, control, reset } = form;
  const { current: register } = useRef(formRegister);

  const { fields, append } = useFieldArray({
    control,
    name: 'orders',
  });

  return { form, fields, append, handleSubmit, register, control, reset };
};
