import React from "react";
import { FormStep, TOperationalCosts, TRegistrationFormProps } from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";
import { SelectBox } from "../../@ui/select-box";

export const OperationCosts: React.FC<TRegistrationFormProps> = ({register, errors}) => {
  // TODO: Usar laço para gerar os campos, utilizando informação para inputs salvos aqui no proprio arquivo
  return (
    <div className='grid grid-cols-4 gap-2'>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Taxa operacional'
          id={TOperationalCosts.operationalFee}
          errorMessage={errors?.financialSummary?.operationCosts?.operationalFee?.message}
          type={'number'}
          formStep={FormStep.operationalFee}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.operationalFeeDorC}
             register={register}
             errors={errors}
             title="D/C"
             options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}
        />
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Execução'
          id={TOperationalCosts.execution}
          errorMessage={errors?.financialSummary?.operationCosts?.execution?.message}
          type={'number'}
          formStep={FormStep.execution}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.executionDorC}
                   register={register}
                   errors={errors}
                   title="D/C"
                   options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}
        />
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Taxa de custódia'
          id={TOperationalCosts.custody}
          errorMessage={errors?.financialSummary?.operationCosts?.custody?.message}
          type={'number'}
          formStep={FormStep.custody}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.custodyDorC}
                   register={register}
                   errors={errors}
                   title="D/C"
                   options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}
        />
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='IRRF'
          id={TOperationalCosts.irrf}
          errorMessage={errors?.financialSummary?.operationCosts?.irrf?.message}
          type={'number'}
          formStep={FormStep.irrf}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.irrfDorC}
                   register={register}
                   errors={errors}
                   title="D/C"
                   options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}
        />
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Outros'
          id={TOperationalCosts.others}
          errorMessage={errors?.financialSummary?.operationCosts?.others?.message}
          type={'number'}
          formStep={FormStep.others}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.othersDorC}
                   register={register}
                   errors={errors}
                   title="D/C"
                   options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}
        />
      </div>
      <div className="col-span-1">
        <InputBox
          register={register}
          title='Total custos'
          id={TOperationalCosts.totalCosts}
          errorMessage={errors?.financialSummary?.operationCosts?.totalCosts?.message}
          type={'number'}
          formStep={FormStep.totalCosts}
        />
      </div>
      <div className="col-span-1">
        <SelectBox name={FormStep.totalCostsDorC}
           register={register}
           errors={errors}
           title="D/C"
           options={[{value: 'DEBIT', title: 'Débito'}, {value: 'CREDIT', title: 'Crédito'}]}
        />
      </div>
    </div>
  )
}
