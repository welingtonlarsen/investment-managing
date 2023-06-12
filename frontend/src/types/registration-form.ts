import { Control, FieldErrors, UseFormRegister } from "react-hook-form"

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
	}[],
	businessSummary: {
		debentures: number,
		sellInCash: number,
		buyInCash: number,
		optionsBuy: number,
		optionsSell: number,
		termOptions: number,
		federalSecurities: number,
		operationValues: number
	},
	financialSummary: {
		clearing: {
			operationsNetValue: number,
			settlementFee: number,
			registryFee: number,
			totalCblc: number,
		},
		exchange: {
			termOrOptionsFee: number,
			anaFee: number,
			fees: number,
			total: number,
		},
		operationCosts: {
			operationalFee: number,
			execution: number,
			custody: number,
			taxes: number,
			irrf: number,
			others: number,
			totalCosts: number,
		}
	},
	total: {
		netDate: Date,
		netValue: number,
		netValueDorC: string | undefined
	}
}

export type TRegistrationFormProps = {
	control?: Control<TRegistrationForm, any>
	register: UseFormRegister<TRegistrationForm>
	errors: FieldErrors<TRegistrationForm>
	name?: string
	title?: string
	options?: {value: string, title: string}[]
	index?: number
}
