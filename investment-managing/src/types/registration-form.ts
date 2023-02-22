import { Control, FieldErrors, UseFormRegister } from "react-hook-form"

export enum TGeneralInformation {
	brokerageOrderNumber = 'brokerageOrderNumber',
	tradingFlorDate = 'tradingFlorDate',
	clientId = 'clientId'
}

export enum FormStep {
	brokerageOrderNumber = 'generalInformation.brokerageOrderNumber',
	tradingFlorDate = 'generalInformation.tradingFlorDate',
	clientId = 'generalInformation.clientId',
}

export enum TOrderProp {
	market = 'market',
	buyOrSell = 'buyOrSell',
	marketType = 'marketType',
	title = 'title',
	quantity = 'quantity',
	price = 'price',
	total = 'total',
	debitOrCredit = 'debitOrCredit'
}

export type TRegistrationForm = {
    generalInformation: {
		brokerageOrderNumber: number,
		tradingFlorDate: Date,
		clientId: number
	},
	orders: {
		market: string | undefined
        buyOrSell: string | undefined,
        marketType: string | undefined,
        title: string | undefined,
        quantity: number | undefined,
        price: number | undefined,
        total: number | undefined,
        debitOrCredit: string | undefined
	}[]
}

export type TRegistrationFormProps = {
	control?: Control<TRegistrationForm, any>
	register: UseFormRegister<TRegistrationForm>
	errors: FieldErrors<TRegistrationForm>
	name?: TOrderProp | TGeneralInformation
    title?: string
    options?: {value: string, title: string}[]
    index?: number
}