import React from "react";
import {
    FormStep,
    TBusinessSummary,
    TRegistrationFormProps
} from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";

export const BusinessSummary: React.FC<TRegistrationFormProps> = ({register, errors}) => {
    return(
        <div className="flex flex-col">
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1">
                    <InputBox
                      register={register}
                      title={'Debentures'}
                      id={TBusinessSummary.debentures}
                      errorMessage={errors?.businessSummary?.debentures?.message}
                      type={'number'}
                      formStep={FormStep.debentures}
                    />
                </div>
                <div className="col-span-1">
                    <InputBox
                      register={register}
                      title={'Vendas à vista'}
                      id={TBusinessSummary.sellInCash}
                      errorMessage={errors?.businessSummary?.sellInCash?.message}
                      type={'number'}
                      formStep={FormStep.sellInCash}
                    />
                </div>
                <div className="col-span-1">
                    <InputBox
                      register={register}
                      title={'Compras à vista'}
                      id={TBusinessSummary.buyInCash}
                      errorMessage={errors?.businessSummary?.buyInCash?.message}
                      type={'number'}
                      formStep={FormStep.buyInCash}
                    />
                </div>
                <div className="col-span-1">
                    <InputBox
                      register={register}
                      title={'Opções - compra'}
                      id={TBusinessSummary.optionsBuy}
                      errorMessage={errors?.businessSummary?.optionsBuy?.message}
                      type={'number'}
                      formStep={FormStep.optionsBuy}
                    />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1">
                    <InputBox
                      register={register}
                      title={'Opções - venda'}
                      id={TBusinessSummary.optionsSell}
                      errorMessage={errors?.businessSummary?.optionsSell?.message}
                      type={'number'}
                      formStep={FormStep.optionsSell}
                    />
                </div>
                <div className="col-span-1">
                    <InputBox
                      register={register}
                      title={'Operações a termo'}
                      id={TBusinessSummary.termOptions}
                      errorMessage={errors?.businessSummary?.termOptions?.message}
                      type={'number'}
                      formStep={FormStep.termOptions}
                    />
                </div>
                <div className="col-span-1">
                    <InputBox
                      register={register}
                      title={'Valor das oper. c/ título púb'}
                      id={TBusinessSummary.federalSecurities}
                      errorMessage={errors?.businessSummary?.federalSecurities?.message}
                      type={'number'}
                      formStep={FormStep.federalSecurities}
                    />
                </div>
                <div className="col-span-1">
                    <InputBox
                      register={register}
                      title={'Valor das operações'}
                      id={TBusinessSummary.operationValues}
                      errorMessage={errors?.businessSummary?.operationValues?.message}
                      type={'number'}
                      formStep={FormStep.operationValues}
                    />
                </div>
            </div>
        </div>
    )
}
