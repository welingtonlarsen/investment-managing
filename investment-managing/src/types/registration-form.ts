import { Control, FieldErrors, UseFormRegister } from "react-hook-form"

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

	termOrOptionsFee = 'financialSummary.exchange.termOrOptionsFee',
	termOrOptionsFeeDorC = 'financialSummary.exchange.termOrOptionsFeeDorC',
	anaFee = 'financialSummary.exchange.anaFee',
	anaFeeDorC = 'financialSummary.exchange.anaFeeDorC',
	fees = 'financialSummary.exchange.fees',
	feesDorC = 'financialSummary.exchange.feesDorC',
	total = 'financialSummary.exchange.total',
	totalDorC = 'financialSummary.exchange.totalDorC',

	operationalFee = 'financialSummary.operationalCosts.operationalFee',
	operationalFeeDorC = 'financialSummary.operationalCosts.operationalFeeDorC',
	execution = 'financialSummary.operationalCosts.execution',
	executionDorC = 'financialSummary.operationalCosts.executionDorC',
	custody = 'financialSummary.operationalCosts.custody',
	custodyDorC = 'financialSummary.operationalCosts.custodyDorC',
	taxes = 'financialSummary.operationalCosts.taxes',
	taxesDorC = 'financialSummary.operationalCosts.taxesDorC',
	irrf = 'financialSummary.operationalCosts.irrf',
	irrfDorC = 'financialSummary.operationalCosts.irrfDorC',
	others = 'financialSummary.operationalCosts.others',
	othersDorC = 'financialSummary.operationalCosts.othersDorC',
	totalCosts = 'financialSummary.operationalCosts.totalCosts',
	totalCostsDorC = 'financialSummary.operationalCosts.totalCostsDorC',

	netDate = 'total.netDate',
	netValue = 'total.netValue',
	netValueDorC = 'total.netValueDorC',
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

export enum TOperationalCosts {
	operationalFee = 'operationalFee',
	execution = 'execution',
	custody = 'custody',
	taxes = 'taxes',
	irrf = 'irrf',
	others = 'others',
	totalCosts = 'totalCosts'
}

export enum TTotal {
	netDate = 'netDate',
	netValue = 'netValue',
	netValueDorC = 'netValueDorC'
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
		},
		operationCosts: {
			operationalFee: number,
			operationalFeeDorC: string | undefined,
			execution: number,
			executionDorC: string | undefined,
			custody: number,
			custodyDorC: string | undefined,
			taxes: number,
			taxesDorC: string | undefined,
			irrf: number,
			irrfDorC: string | undefined,
			others: number,
			othersDorC: string | undefined,
			totalCosts: number,
			totalCostsDorC: string | undefined,
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
	name?: TOrderProp | TFinancialSummary | string
	title?: string
	options?: {value: string, title: string}[]
	index?: number
}
