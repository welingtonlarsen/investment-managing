import { FieldValues, UseFormRegisterReturn } from "react-hook-form"

type TInputBox = {
    register: UseFormRegisterReturn<string>
    title: string
	errorMessage: string | undefined
    type: React.HTMLInputTypeAttribute | undefined
    id: string
}

export const InputBox: React.FC<TInputBox> = ({register, title, errorMessage: error, type, id}) => {
    return (
        <div className="mb-4 min-w-full">
            <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
                {title}:
            </label>
            <input
            {...register}
            id={id}
            type={type}
            className={`${error && 'border-red-600'} input`}
            />
            <p className="text-red-600 mt-1">{error}</p>
        </div>
    )
}