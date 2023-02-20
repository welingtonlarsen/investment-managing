export type TSelectBox = {
    title: string
    options: {value: string, title: string}[]
}

export const SelectBox: React.FC<TSelectBox> = ({title, options}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor='market' className="block text-gray-700 font-bold">
                {title}:
            </label>
            <select id='market' className="select w-36">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.title}</option>
                ))}
                
            </select>
        </div>
    )
}