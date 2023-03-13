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

	debentures = 'businessSummary.debentures',
	sellInCash = 'businessSummary.sellInCash',
	buyInCash = 'businessSummary.buyInCash',
	optionsBuy = 'businessSummary.optionsBuy',
	optionsSell = 'businessSummary.optionsSell',
	termOptions = 'businessSummary.termOptions',
	federalSecurities = 'businessSummary.federalSecurities',
	operationValues = 'businessSummary.operationValues',

	clearingOperationsNetValue = 'financialSummary.clearing.operationsNetValue',
	clearingOperationsNetValueDorC = 'financialSummary.clearing.operationsNetValueDorC',
	clearingSettlementFee = 'financialSummary.clearing.settlementFee',
	clearingSettlementFeeDorC = 'financialSummary.clearing.settlementFeeDorC',
	clearingRegistryFee = 'financialSummary.clearing.registryFee',
	clearingRegistryFeeDorC = 'financialSummary.clearing.registryFeeDorC',
	clearingTotalCblc = 'financialSummary.clearing.totalCblc',
	clearingTotalCblcDorC = 'financialSummary.clearing.totalCblcDorC',
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

export enum TBusinessSummary {
	debentures = 'debentures',
	sellInCash = 'sellInCash',
	buyInCash = 'buyInCash',
	optionsBuy = 'optionsBuy',
	optionsSell = 'optionsSell',
	termOptions = 'termOptions',
	federalSecurities = 'federalSecurities',
	operationValues = 'operationValues'
}

export enum TFinancialSummary {
	operationsNetValue = 'operationsNetValue',
	operationsNetValueDorC = 'operationsNetValueDorC',
	settlementFee = 'settlementFee',
	registryFee = 'registryFee',
	totalCblc = 'totalCblc'
}

export enum TExchange {
	termOrOptionsFee = 'termOrOptionsFee',
	anaFee = 'anaFee',
	fees = 'fees',
	total = 'total'
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
			operationsNetValueDorC: string | undefined,
			settlementFee: number,
			settlementFeeDorC: string | undefined,
			registryFee: number,
			registryFeeDorC: string | undefined,
			totalCblc: number,
			totalCblcDorC: string | undefined,
		},
		exchange: {
			termOrOptionsFee: number,
			termOrOptionsFeeDorC: string | undefined,
			anaFee: number,
			anaFeeDorC: string | undefined,
			fees: number,
			feesDorC: string | undefined,
			total: number,
			totalDorC: string | undefined,
		}
	}
}

export type TRegistrationFormProps = {
	control?: Control<TRegistrationForm, any>
	register: UseFormRegister<TRegistrationForm>
	errors: FieldErrors<TRegistrationForm>
	name?: TOrderProp | TGeneralInformation | TFinancialSummary | string
	title?: string
	options?: {value: string, title: string}[]
	index?: number
}
