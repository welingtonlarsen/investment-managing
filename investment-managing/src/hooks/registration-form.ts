import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TRegistrationForm } from "../types/registration-form";

export const defaultOrder = {
  market: undefined,
  buyOrSell: undefined,
  marketType: undefined,
  title: undefined,
  quantity: undefined,
  price: undefined,
  total: undefined,
  debitOrCredit: undefined
}

const schema: yup.SchemaOf<TRegistrationForm> = yup.object({
    generalInformation: yup.object({
        brokerageOrderNumber: yup.number().required('Número da nota é obrigatório.').typeError('Número da nota é obrigatório.'),
        tradingFlorDate: yup.date().required('Data da nota é obrigatório.').typeError('Data da nota é obrigatório.'),
        clientId: yup.number().required('Id do cliente é obrigatório.').typeError('Id do cliente é obrigatório.')
    }),
    orders: yup.array().of(
      yup.object({
        market: yup.string().required(),
        buyOrSell: yup.string().required(),
        marketType: yup.string().required(),
        title: yup.string().required(),
        quantity: yup.number().required().required('Quantidade é obrigatório.').typeError('Quantidade é obrigatório.'),
        price: yup.number().required().required('Preço é obrigatório.').typeError('Preço é obrigatório.'),
        total: yup.number().required().required('Total é obrigatório.').typeError('Total é obrigatório.'),
      })
    ),
    businessSummary: yup.object({
        debentures: yup.number().required('Debêntures é obrigatório.').typeError('Debêntures é obrigatório.'),
        sellInCash: yup.number().required('Venda a vista é obrigatório.').typeError('Venda a vista é obrigatório.'),
        buyInCash: yup.number().required('Compra a vista é obrigatório.').typeError('Compra a vista é obrigatório.'),
        optionsBuy: yup.number().required('Opções de compra é obrigatório.').typeError('Opções de compra é obrigatório.'),
        optionsSell: yup.number().required('Opções de venda é obrigatório.').typeError('Opções de venda é obrigatório.'),
        termOptions: yup.number().required('Opções de termo é obrigatório.').typeError('Opções de termo é obrigatório.'),
        federalSecurities: yup.number().required('Títulos federais é obrigatório.').typeError('Títulos federais é obrigatório.'),
        operationValues: yup.number().required('Valores de operação é obrigatório.').typeError('Valores de operação é obrigatório.')
    }),
    financialSummary : yup.object({
      clearing: yup.object({
        operationsNetValue: yup.number().required('Valor líquido de operações é obrigatório.').typeError('Valor líquido de operações é obrigatório.'),
        settlementFee: yup.number().required('Taxa de liquidação é obrigatório.').typeError('Taxa de liquidação é obrigatório.'),
        registryFee: yup.number().required('Taxa de registro é obrigatório.').typeError('Taxa de registro é obrigatório.'),
        totalCblc: yup.number().required('Total CBLC é obrigatório.').typeError('Total CBLC é obrigatório.'),
      }),
      exchange: yup.object({
        termOrOptionsFee: yup.number().required('Taxa de termo/opções é obrigatório.').typeError('Taxa de termo/opções é obrigatório.'),
        anaFee: yup.number().required('Taxa ANA é obrigatório.').typeError('Taxa ANA é obrigatório.'),
        fees: yup.number().required('Taxas é obrigatório.').typeError('Taxas é obrigatório.'),
        total: yup.number().required('Total é obrigatório.').typeError('Total é obrigatório.'),
      }),
      operationCosts: yup.object({
        operationalFee: yup.number().required('Taxa operacional é obrigatório.').typeError('Taxa operacional é obrigatório.'),
        execution: yup.number().required('Execução é obrigatório.').typeError('Execução é obrigatório.'),
        custody: yup.number().required('Custódia é obrigatório.').typeError('Custódia é obrigatório.'),
        taxes: yup.number().required('Impostos é obrigatório.').typeError('Impostos é obrigatório.'),
        irrf: yup.number().required('IRRF é obrigatório.').typeError('IRRF é obrigatório.'),
        others: yup.number().required('Outros é obrigatório.').typeError('Outros é obrigatório.'),
        totalCosts: yup.number().required('Total de custos é obrigatório.').typeError('Total de custos é obrigatório.'),
      })
    }),
    total: yup.object({
      netDate: yup.date().required('Data líquida é obrigatório.').typeError('Data líquida é obrigatório.'),
      netValue: yup.number().required('Valor líquido é obrigatório.').typeError('Valor líquido é obrigatório.'),
      netValueDorC: yup.string().required()
    })
})

export const useRegistrationForm = () => {
    return useForm<TRegistrationForm>(
        {
          defaultValues: {
            orders: [defaultOrder]
          },
          mode: "onTouched",
          resolver: yupResolver(schema)
        }
      );
}
