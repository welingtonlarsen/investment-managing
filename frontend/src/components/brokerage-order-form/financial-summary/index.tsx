import {
  TRegistrationFormProps
} from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";
import React from "react";

// todo: change component name to clearing ou unificar com exchange
export const FinancialSummary: React.FC<TRegistrationFormProps> = ({register, errors}) => {
  const { financialSummary: financialSummaryErrors } = errors;

  const fields = [
    {
      id: 'operationsNetValue',
      title: 'Valor líq op',
      type: 'number',
      errorMessage: financialSummaryErrors?.clearing?.operationsNetValue?.message,
      inputProps: {...register('financialSummary.clearing.operationsNetValue')}
    },
    {
      id: 'settlementFee',
      title: 'Taxa liquidação',
      type: 'number',
      errorMessage: financialSummaryErrors?.clearing?.settlementFee?.message,
      inputProps: {...register('financialSummary.clearing.settlementFee')}
    },
    {
      id: 'registryFee',
      title: 'Taxa registro',
      type: 'number',
      errorMessage: financialSummaryErrors?.clearing?.registryFee?.message,
      inputProps: {...register('financialSummary.clearing.registryFee')}
    },
    {
      id: 'totalCblc',
      title: 'Total CBLC',
      type: 'number',
      errorMessage: financialSummaryErrors?.clearing?.totalCblc?.message,
      inputProps: {...register('financialSummary.clearing.totalCblc')}
    }
  ]

  return (
    <div className='grid grid-cols-4 gap-2'>
        {
          fields.map(({id, title, type, errorMessage, inputProps}, key) => {
            return (
              <InputBox
                key={key}
                id={id}
                title={title}
                type={type}
                errorMessage={errorMessage}
                inputProps={inputProps}
              />
            )
          })
        }
    </div>
  )
}
