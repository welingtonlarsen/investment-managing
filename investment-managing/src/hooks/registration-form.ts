import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TRegistrationForm } from "../types/registration-form";

const schema: yup.SchemaOf<TRegistrationForm> = yup.object({
    generalInformation: yup.object({
        brokerageOrderNumber: yup.number().required('Número da nota é obrigatório.').typeError('Número da nota é obrigatório.'),
        tradingFlorDate: yup.date().required('Data da nota é obrigatório.').typeError('Data da nota é obrigatório.'),
        clientId: yup.number().required('Id do cliente é obrigatório.').typeError('Id do cliente é obrigatório.')
    })
})

export const useRegistrationForm = () => {
    return useForm<TRegistrationForm>(
        {
          mode: "onTouched",
          resolver: yupResolver(schema)
        }
      );
}