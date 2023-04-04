import React from "react";
import { FormStep, TExchange, TFinancialSummary, TRegistrationFormProps } from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";
import { SelectBox } from "../../@ui/select-box";

export const Exchange: React.FC<TRegistrationFormProps> = ({register, errors}) => {
  return (
    <div className='grid grid-cols-4 gap-2'>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Taxa termo/opc'
          id={TExchange.termOrOptionsFee}
          errorMessage={errors?.financialSummary?.exchange?.termOrOptionsFee?.message}
          type={'number'}
          formStep={FormStep.termOrOptionsFee}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.termOrOptionsFeeDorC} register={register} errors={errors} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Taxa A.N.A'
          id={TExchange.anaFee}
          errorMessage={errors?.financialSummary?.exchange?.anaFee?.message}
          type={'number'}
          formStep={FormStep.anaFee}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.anaFeeDorC} register={register} errors={errors} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Emolumentos'
          id={TExchange.fees}
          errorMessage={errors?.financialSummary?.exchange?.fees?.message}
          type={'number'}
          formStep={FormStep.fees}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.feesDorC} register={register} errors={errors} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Total Bovespa'
          id={TExchange.total}
          errorMessage={errors?.financialSummary?.exchange?.total?.message}
          type={'number'}
          formStep={FormStep.total}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.totalDorC} register={register} errors={errors} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
      </div>
    </div>
  )
}
