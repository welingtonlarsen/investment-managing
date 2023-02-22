import { TOrderProp, TRegistrationForm, TRegistrationFormProps } from "../../../types/registration-form"

export interface TSelectBox extends TRegistrationFormProps {
    name: TOrderProp
    title: string
    options: {value: string, title: string}[]
    index: number
}

export const SelectBox: React.FC<TSelectBox> = ({title, name, options, register, index}) => {

    return (
        <div className="flex flex-col">
            <label htmlFor={title} className="block text-gray-700 font-bold">
                {title}:
            </label>
            <select {...register(`orders.${index}.${name}`)} name={`orders.${index}.${name}`} id={title} className="select w-36">
                {options.map((option, index) => {
                    return (
                    <option key={index} value={option.value}>{option.title}</option>
                )})}
                
            </select>
        </div>
    )
}