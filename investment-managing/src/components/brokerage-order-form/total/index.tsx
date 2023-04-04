import { FormStep, TGeneralInformation, TRegistrationFormProps, TTotal } from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";
import { SelectBox } from "../../@ui/select-box";
import React from "react";

export const Total: React.FC<TRegistrationFormProps> = ({register, errors}) => {
  const {total: totalErrors} = errors;

  return (
    <>
      <InputBox
        register={register}
        title={'Líquido para'}
        id={TTotal.netDate}
        errorMessage={totalErrors?.netDate?.message}
        type={'date'}
        formStep='total.netDate'
      />
      <InputBox
        register={register}
        title={'Valor total'}
        id={TTotal.netValue}
        errorMessage={totalErrors?.netValue?.message}
        type={'number'}
        formStep='total.netValue'
      />
      <div className="col-span-1">
        <SelectBox
          name={FormStep.netValueDorC}
          register={register}
          errors={errors}
          title="D/C"
          options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}
        />
      </div>
    </>
  )
}
