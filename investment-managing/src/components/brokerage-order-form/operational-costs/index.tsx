import React from "react";
import { TRegistrationFormProps } from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";

export const OperationCosts: React.FC<TRegistrationFormProps> = ({register, errors}) => {
  const { financialSummary: financialSummaryErrors } = errors

  const fields = [
    {
      id: 'operationalFee',
      title: 'Taxa operacional',
      type: 'number',
      errorMessage: financialSummaryErrors?.operationCosts?.operationalFee?.message,
      inputProps: {...register('financialSummary.operationCosts.operationalFee')}
    },
    {
      id: 'execution',
      title: 'Execução',
      type: 'number',
      errorMessage: financialSummaryErrors?.operationCosts?.execution?.message,
      inputProps: {...register('financialSummary.operationCosts.execution')}
    },
    {
      id: 'custody',
      title: 'Taxa de custódia',
      type: 'number',
      errorMessage: financialSummaryErrors?.operationCosts?.custody?.message,
      inputProps: {...register('financialSummary.operationCosts.custody')}
    },
    {
      id: 'irrf',
      title: 'IRRF',
      type: 'number',
      errorMessage: financialSummaryErrors?.operationCosts?.irrf?.message,
      inputProps: {...register('financialSummary.operationCosts.irrf')}
    },
    {
      id: 'others',
      title: 'Outros',
      type: 'number',
      errorMessage: financialSummaryErrors?.operationCosts?.others?.message,
      inputProps: {...register('financialSummary.operationCosts.others')}
    },
    {
      id: 'totalCosts',
      title: 'Total custos',
      type: 'number',
      errorMessage: financialSummaryErrors?.operationCosts?.totalCosts?.message,
      inputProps: {...register('financialSummary.operationCosts.totalCosts')}
    }
  ]

  return (
    <div className='grid grid-cols-3 gap-2'>
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
