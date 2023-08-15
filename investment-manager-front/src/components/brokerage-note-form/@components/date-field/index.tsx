import { TextField as MUITextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { TBrokerageOrderPropType } from '../../../../hooks/useBrokerageNoteForm';

type TProps = {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  field: TBrokerageOrderPropType;
};

export const DateField: React.FC<TProps> = ({ register, field, id, label }) => {
  return (
    <MUITextField
      type="date"
      sx={{ display: 'flex' }}
      {...register(String(field))}
      InputLabelProps={{ shrink: true }}
      id={id}
      label={label}
      variant="outlined"
    />
  );
};
