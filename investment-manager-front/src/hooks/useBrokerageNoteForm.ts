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

type FormValues = {
    number: number,
    date: string,
    client: string
    orders: {
        market: string,
        buyOrSell: string,
        marketType: string,
        title: string,
        quantity: number | undefined,
        price: number | undefined,
        total: number | undefined,
        debitOrCredit: string
    }[]
}

const defaultOrder = {
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
            number: undefined,
            date: '',
            client: '',
            orders: [
                defaultOrder
            ]
        }
    })

    const {register, handleSubmit, control} = form

    const { fields, append } = useFieldArray({
        control,
        name: 'orders'
    })

    return {form, fields, append, handleSubmit, register};
}