import { FieldErrors, UseFormRegister } from "react-hook-form"

export type TRegistrationForm = {
    generalInformation: {
		brokerageOrderNumber: number,
		tradingFlorDate: Date,
		clientId: number
	},
}

export type TRegistrationFormProps = {
	register: UseFormRegister<TRegistrationForm>
	errors: FieldErrors<TRegistrationForm>
}