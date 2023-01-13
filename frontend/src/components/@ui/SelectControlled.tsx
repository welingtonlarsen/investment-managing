import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import { Control, Controller, FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props<T extends FieldValues> = {
    index: number, 
    name: string, 
    control: Control<T>,  
    register: UseFormRegister<T>,
    menuItems: string[],
    errors: any,
    title: string
}

const SelectControlled = <T extends FieldValues>({index, name, control, register, menuItems, errors, title}: Props<T>): JSX.Element => {
    return (
        <Controller
            key={index}
            {...register(name as any)}
            control={control}
            name={name as any}
            render={({ field, field: { onChange, value}, }) => (
                <FormControl error={!!errors.orders?.[index]?.[name]?.message} variant="standard" fullWidth>
                    <InputLabel id="market">{title}</InputLabel>
                    <Select
                        {...field}
                        name={`orders.${index}.${name}`}
                        // {...field}
                        // labelId="market"
                        // id="market"
                        // value={value}
                        // onChange={onChange}
                        // label="Negociação"
                        >
                        {menuItems.map((item) => {
                            return(
                                <MenuItem value={item}>{item}</MenuItem>
                            )
                        })}
                    </Select>
                    {<FormHelperText>{errors.orders?.[index]?.[name]?.message}</FormHelperText>}
                </FormControl>
        )}
        />
    )
}

export default SelectControlled;