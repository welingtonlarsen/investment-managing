import { FieldValues, UseFormRegister, UseFormRegisterReturn } from "react-hook-form"
import { FormStep, TGeneralInformation, TRegistrationForm } from "../../../types/registration-form"

type TInputBox = {
    register: UseFormRegister<TRegistrationForm>
    title: string
	errorMessage?: string | undefined
    type: React.HTMLInputTypeAttribute | undefined
    id: string
    formStep: any
    index?: number
    name?: string
}

export const InputBox: React.FC<TInputBox> = ({register, title, errorMessage: error, type, id, formStep, name}) => {
    const registerReturn = () => {
        if(register) {
            return register(formStep);
        }
        return {};
    }
    
    return (
        <div className="mb-4 min-w-full">
            <label htmlFor={id} className="block text-gray-700 font-bold">
                {title}:
            </label>
            <input
            name={name}
            {...registerReturn()}
            id={id}
            type={type}
            className={`${error && 'border-red-600'} input`}
            />
            <p className="text-red-600 mt-1">{error}</p>
        </div>
    )
}