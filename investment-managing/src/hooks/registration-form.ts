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
        debitOrCredit: yup.string().required()
      })
    )
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