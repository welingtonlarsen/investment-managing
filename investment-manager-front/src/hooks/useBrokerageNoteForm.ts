/* eslint-disable @typescript-eslint/no-misused-promises */
import { useFieldArray, useForm } from "react-hook-form"

type TOrder = {
    market: string,
    buyOrSell: string,
    marketType: string,
    title: string,
    quantity: number | undefined,
    price: number | undefined,
    total: number | undefined,
    debitOrCredit: string
}

export type FormValues = {
    generalInformation: {
        number: number,
        date: string,
        client: string
    },
    orders: {
        market: string,
        buyOrSell: string,
        marketType: string,
        title: string,
        quantity: number | undefined,
        price: number | undefined,
        total: number | undefined,
        debitOrCredit: string
    }[],
    businessSummary: {
        debentures: number,
        sellInCash: number,
        buyInCash: number,
        optionsBuy: number,
        optionsSell: number,
        termOptions: number,
        federalSecurities: number,
        operationalValues: number
    }
}

export const defaultOrder = {
    market: '',
    buyOrSell: '',
    marketType: '',
    title: '',
    quantity: undefined,
    price: undefined,
    total: undefined,
    debitOrCredit: ''
}

export const useBrokerageNoteForm = () => {
    const form = useForm<FormValues>({
        defaultValues: {
            generalInformation: {
                number: undefined,
                date: '',
                client: '',
            },
            orders: [
                defaultOrder
            ],
            businessSummary: {
                debentures: undefined,
                sellInCash: undefined,
                buyInCash: undefined,
                optionsBuy: undefined,
                optionsSell: undefined,
                termOptions: undefined,
                federalSecurities: undefined,
                operationalValues: undefined
            }
        }
    })

    const {register, handleSubmit, control} = form

    const { fields, append } = useFieldArray({
        control,
        name: 'orders'
    })

    return {form, fields, append, handleSubmit, register};
}