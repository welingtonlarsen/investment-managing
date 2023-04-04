import { UseFormRegister } from "react-hook-form"
import { TRegistrationForm } from "../../../types/registration-form"
import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TInputBox = {
  id: string
  title: string
  type: React.HTMLInputTypeAttribute | undefined
  errorMessage?: string | undefined
  inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

  // todo: remove all these props, because it should be parent component responsibility
  register?: UseFormRegister<TRegistrationForm>
  formStep?: any
  index?: number
  name?: string
}

export const InputBox: React.FC<TInputBox> = ({register, title, errorMessage: error, type, id, formStep, name, inputProps}) => {
    const registerReturn = () => {
        if(register && formStep) {
            return register(formStep);
        }
        return {};
    }

    return (
        <div>
            <label htmlFor={id} className="block text-gray-700 font-bold">
                {title}:
            </label>
            <input
              name={name}
              {...registerReturn()}
              {...inputProps}
              id={id}
              type={type}
              className={`${error && 'border-red-600'} input`}
            />
            <p className="text-red-600">{error}</p>
        </div>
    )
}
