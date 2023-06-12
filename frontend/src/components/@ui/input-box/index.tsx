import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type TInputBox = {
  id: string
  title: string
  type: React.HTMLInputTypeAttribute | undefined
  errorMessage?: string | undefined
  inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

export const InputBox: React.FC<TInputBox> = ({title, errorMessage: error, type, id, inputProps}) => {
    return (
        <div>
            <label htmlFor={id} className="block text-gray-700 font-bold">
                {title}:
            </label>
            <input
              {...inputProps}
              id={id}
              type={type}
              className={`${error && 'border-red-600'} input`}
            />
            <p className="text-red-600">{error}</p>
        </div>
    )
}
