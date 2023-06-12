import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

export interface TSelectBox {
    id: string
    title: string
    options: {value: string, title: string}[]
    inputProps?: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
}

export const SelectBox: React.FC<TSelectBox> = ({id, title, options, inputProps}) => {
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
