import React from "react";
import { TRegistrationFormProps } from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";

export const Exchange: React.FC<TRegistrationFormProps> = ({register, errors}) => {
  const { financialSummary: financialSummaryErrors } = errors;

  const fields = [
    {
      id: 'termOrOptionsFee',
      title: 'Taxa termo/opc',
      type: 'number',
      errorMessage: financialSummaryErrors?.exchange?.termOrOptionsFee?.message,
      inputProps: {...register('financialSummary.exchange.termOrOptionsFee')}
    },
    {
      id: 'anaFee',
      title: 'Taxa A.N.A',
      type: 'number',
      errorMessage: financialSummaryErrors?.exchange?.anaFee?.message,
      inputProps: {...register('financialSummary.exchange.anaFee')}
    },
    {
      id: 'fees',
      title: 'Emolumentos',
      type: 'number',
      errorMessage: financialSummaryErrors?.exchange?.fees?.message,
      inputProps: {...register('financialSummary.exchange.fees')}
    },
    {
      id: 'total',
      title: 'Total Bovespa',
      type: 'number',
      errorMessage: financialSummaryErrors?.exchange?.total?.message,
      inputProps: {...register('financialSummary.exchange.total')}
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
