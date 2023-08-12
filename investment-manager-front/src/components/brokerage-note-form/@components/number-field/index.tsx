import { TextField as MUITextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { TBrokerageOrderPropType } from '../../../../hooks/useBrokerageNoteForm';

type TProps = {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  field: TBrokerageOrderPropType;
};

export const NumberField: React.FC<TProps> = ({ register, field, id, label }) => {
  return (
    <MUITextField
      type="number"
      sx={{ display: 'flex' }}
      {...register(String(field), { valueAsNumber: true })}
      InputLabelProps={{ shrink: true }}
      id={id}
      label={label}
      variant="outlined"
    />
  );
};
