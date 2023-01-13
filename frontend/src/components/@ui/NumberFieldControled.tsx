import { TextField } from '@mui/material'
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form'

type Props<T extends FieldValues> = {
  index: number
  namePos: string
  name: string
  control: Control<T>
  register: UseFormRegister<T>
  errors: any
  title: string
}

const NumberFieldControled = <T extends FieldValues>({ index, namePos, name, control, errors, title }: Props<T>) => {
  return (
    <Controller
      control={control}
      name={namePos as any}
      defaultValue={0 as any}
      render={({ field }) => (
        <TextField
          {...field}
          error={!!errors.orders?.[index]?.[name]?.message}
          helperText={errors.orders?.[index]?.[name]?.message}
          id={`orders.${index}.${name}`}
          label={title}
          type="number"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
        />
      )}
    />
  )
}

export default NumberFieldControled
