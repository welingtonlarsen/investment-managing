import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

type Inputs = {
  brokerageOrderNumber: string
  tradingFlorDate: string
  clientId: string
}

const schema = yup
  .object({
    brokerageOrderNumber: yup.string().required('Número da nota é obrigatório.'),
    tradingFlorDate: yup.string().required('Data da nota é obrigatório.'),
    clientId: yup.string().required('Id do cliente é obrigatório.'),
  })
  .required()

export const useGeneralInformationForm = () => {
  return useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  })
}
