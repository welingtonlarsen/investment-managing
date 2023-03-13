import {
  FormStep,
  TBusinessSummary,
  TFinancialSummary, TOrderProp,
  TRegistrationFormProps
} from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";
import React from "react";
import { SelectBox } from "../../@ui/select-box";

export const FinancialSummary: React.FC<TRegistrationFormProps> = ({register, errors}) => {
  return (
    <div className='grid grid-cols-4 gap-2'>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Valor líq op'
          id={TFinancialSummary.operationsNetValue}
          errorMessage={errors?.financialSummary?.clearing?.operationsNetValue?.message}
          type={'number'}
          formStep={FormStep.clearingOperationsNetValue}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.clearingOperationsNetValueDorC} register={register} errors={errors} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Taxa liquidação'
          id={TFinancialSummary.settlementFee}
          errorMessage={errors?.financialSummary?.clearing?.settlementFee?.message}
          type={'number'}
          formStep={FormStep.clearingSettlementFee}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.clearingSettlementFeeDorC} register={register} errors={errors} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Taxa registro'
          id={TFinancialSummary.registryFee}
          errorMessage={errors?.financialSummary?.clearing?.registryFee?.message}
          type={'number'}
          formStep={FormStep.clearingRegistryFee}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.clearingRegistryFeeDorC} register={register} errors={errors} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Total CBLC'
          id={TFinancialSummary.totalCblc}
          errorMessage={errors?.financialSummary?.clearing?.totalCblc?.message}
          type={'number'}
          formStep={FormStep.clearingTotalCblc}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.clearingTotalCblcDorC} register={register} errors={errors} title="D/C" options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}/>
      </div>
    </div>
  )
}
