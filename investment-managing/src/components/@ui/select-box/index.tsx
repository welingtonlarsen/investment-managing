import {
  TFinancialSummary,
  TOrderProp,
  TRegistrationForm,
  TRegistrationFormProps
} from "../../../types/registration-form";

export interface TSelectBox extends TRegistrationFormProps {
    name: TOrderProp | TFinancialSummary | string
    title: string
    options: {value: string, title: string}[]
    index?: number
}

export const SelectBox: React.FC<TSelectBox> = ({title, name, options, register, index}) => {

    const getRegisterName = (): any => {
      if (index !== undefined) {
        return `orders.${index}.${name}`
      }
      return name;
    }

    return (
        <div className="flex flex-col">
            <label htmlFor={title} className="block text-gray-700 font-bold">
                {title}:
            </label>
            <select {...register(getRegisterName())} name={getRegisterName()} id={title} className="select w-36">
                {options.map((option, index) => {
                    return (
                    <option key={index} value={option.value}>{option.title}</option>
                )})}

            </select>
        </div>
    )
}
