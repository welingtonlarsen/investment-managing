import { useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

export type TOrder = {
  id?: string
  market: string;
  buyOrSell: 'BUY' | 'SELL';
  marketType: string;
  symbol?: string;
  stock?: {
    symbol: string,
    specification: string
  }
  quantity: number | undefined;
  price: number | undefined;
  total: number | undefined;
  debitOrCredit: string;
};

export type TBrokerageOrder = {
  generalInformation: {
    brokerageOrderNumber: number;
    tradingFlorDate: string;
    clientId: string;
  };
  orders: TOrder[];
  businessSummary: {
    debentures: number;
    sellInCash: number;
    buyInCash: number;
    optionsBuy: number;
    optionsSell: number;
    termOptions: number;
    federalSecurities: number;
    operationValues: number;
  };
  financialSummary: {
    clearing: {
      operationsNetValue: number;
      settlementFee: number;
      registryFee: number;
      totalCblc: number;
    };
    exchange: {
      termOrOptionsFee: number;
      anaFee: number;
      fees: number;
      total: number;
    };
    operationalCosts: {
      operationalFee: number;
      execution: number;
      custody: number;
      taxes: number;
      irrf: number;
      others: number;
      totalCosts: number;
    };
    netDate: string;
    netTotalValue: number;
    netDebitOrCredit: string;
  };
};

type Paths<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? Paths<T[K], `${Prefix & string}${Prefix extends '' ? '' : '.'}${K & string}`>
    : `${Prefix & string}${Prefix extends '' ? '' : '.'}${K & string}`;
}[keyof T];

export type TBrokerageOrderPropType =
  | Paths<TBrokerageOrder, any>
  | Paths<{ orders: TOrder }, any>
  | 'netDate'
  | 'netTotalValue'
  | 'netDebitOrCredit';

export const defaultOrder = {
  market: '',
  buyOrSell: '',
  marketType: '',
  symbol: '',
  quantity: undefined,
  price: undefined,
  total: undefined,
  debitOrCredit: '',
};

export const useBrokerageNoteForm = () => {
  const form = useForm<TBrokerageOrder>({
    defaultValues: {
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
    },
  });

  const { register: formRegister, handleSubmit, control } = form;
  const { current: register } = useRef(formRegister);

  const { fields, append } = useFieldArray({
    control,
    name: 'orders',
  });

  return { form, fields, append, handleSubmit, register, control };
};
