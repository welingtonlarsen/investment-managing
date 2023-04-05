import {
  TFinancialSummary,
  TOrderProp,
  TRegistrationForm,
  TRegistrationFormProps
} from "../../../types/registration-form";
import { DetailedHTMLProps, InputHTMLAttributes, SelectHTMLAttributes } from "react";

export interface TSelectBox extends TRegistrationFormProps {
    id: string
    title: string
    options: {value: string, title: string}[]
    inputProps?: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

    // todo: remove all these props, because it should be parent component responsibility
    errorMessage?: string | undefined
    type?: React.HTMLInputTypeAttribute | undefined
    name?: TOrderProp | TFinancialSummary | string
    index?: number
}

export const SelectBox: React.FC<TSelectBox> = ({id, title, name, options,
                                                  index, inputProps}) => {

    // const getRegisterName = (): any => {
    //   if (index !== undefined) {
    //     return `orders.${index}.${name}`
    //   }
    //   return name;
    // }
    //
    // return (
    //     <div className="flex flex-col">
    //         <label htmlFor={title} className="block text-gray-700 font-bold">
    //             {title}:
    //         </label>
    //         <select {...register(getRegisterName())} name={getRegisterName()} id={title} className="select w-36">
    //             {options?.map((option, index) => {
    //                 return (
    //                 <option key={index} value={option.value}>{option.title}</option>
    //             )})}
    //         </select>
    //     </div>
    // )

    return (
      <div className="flex flex-col">
        <label htmlFor={title} className="block text-gray-700 font-bold">
          {title}:
        </label>
        <select id={id} {...inputProps} className="select w-36">
          {options?.map((option, index) => {
            return (
              <option key={index} value={option.value}>{option.title}</option>
            )})}
        </select>
      </div>
    )
}
