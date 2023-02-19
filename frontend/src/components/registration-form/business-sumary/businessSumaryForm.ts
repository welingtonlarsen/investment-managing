import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type BusinessSumaryInput = {
  debentures: number
  sellInCash: number
}

const schemaBusinessSumary = yup.object({
  debentures: yup
    .number()
    .typeError('Preço é obrigatório.')
    .required('Preço é obrigatório.')
    .moreThan(0, 'Preço é invalido.'),
  sellInCash: yup
    .number()
    .typeError('Preço é obrigatório.')
    .required('Preço é obrigatório.')
    .moreThan(0, 'Preço é invalido.'),
})

export const useBusinessSumaryForm = () => {
  return useForm<BusinessSumaryInput>({
    // defaultValues: {
    //     debentures: number
    //     sellInCash: number
    // },
    mode: 'all',
    resolver: yupResolver(schemaBusinessSumary),
  })
}
