import React from "react";
import {
    TRegistrationFormProps
} from "../../../types/registration-form";
import { InputBox } from "../../@ui/input-box";

export const BusinessSummary: React.FC<TRegistrationFormProps> = ({register, errors}) => {
    const { businessSummary: businessSummaryErrors } = errors

    const fields = [
        {
            id: 'debentures',
            title: 'Debentures',
            type: 'number',
            errorMessage: businessSummaryErrors?.debentures?.message,
            inputProps: {...register('businessSummary.debentures')}
        },
        {
            id: 'sellInCash',
            title: 'Vendas à vista',
            type: 'number',
            errorMessage: businessSummaryErrors?.sellInCash?.message,
            inputProps: {...register('businessSummary.sellInCash')}
        },
        {
            id: 'buyInCash',
            title: 'Compras à vista',
            type: 'number',
            errorMessage: businessSummaryErrors?.buyInCash?.message,
            inputProps: {...register('businessSummary.buyInCash')}
        },
        {
            id: 'optionsBuy',
            title: 'Opções - compra',
            type: 'number',
            errorMessage: businessSummaryErrors?.optionsBuy?.message,
            inputProps: {...register('businessSummary.optionsBuy')}
        },
        {
            id: 'optionsSell',
            title: 'Opções - venda',
            type: 'number',
            errorMessage: businessSummaryErrors?.optionsSell?.message,
            inputProps: {...register('businessSummary.optionsSell')}
        },
        {
            id: 'termOptions',
            title: 'Operações a termo',
            type: 'number',
            errorMessage: businessSummaryErrors?.termOptions?.message,
            inputProps: {...register('businessSummary.termOptions')}
        },
        {
            id: 'federalSecurities',
            title: 'Valor das oper. c/ título púb',
            type: 'number',
            errorMessage: businessSummaryErrors?.federalSecurities?.message,
            inputProps: {...register('businessSummary.federalSecurities')}
        },
        {
            id: 'operationValues',
            title: 'Valor das operações',
            type: 'number',
            errorMessage: businessSummaryErrors?.operationValues?.message,
            inputProps: {...register('businessSummary.operationValues')}
        }
    ]

    return(
        <div className="flex flex-col">
            <div className="grid grid-cols-4 gap-2">
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
        </div>
    )
}
