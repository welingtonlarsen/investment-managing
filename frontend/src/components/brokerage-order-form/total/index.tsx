import { TRegistrationFormProps } from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";
import { SelectBox } from "../../@ui/select-box";
import React from "react";

export const Total: React.FC<TRegistrationFormProps> = ({register, errors}) => {
  const {total: totalErrors} = errors;

  return (
    <>
      <InputBox
        id={'netDate'}
        title={'Líquido para'}
        type={'date'}
        errorMessage={totalErrors?.netDate?.message}
        inputProps={{...register('total.netDate')}}
      />
      <InputBox
        id={'netValue'}
        title={'Valor total'}
        type={'number'}
        errorMessage={totalErrors?.netValue?.message}
        inputProps={{...register('total.netValue')}}
      />
      <div className="col-span-1">
        <SelectBox
          id={'netValueDorC'}
          title={'D/C'}
          options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}
          inputProps={{...register('total.netValueDorC')}}
        />
      </div>
    </>
  )
}
