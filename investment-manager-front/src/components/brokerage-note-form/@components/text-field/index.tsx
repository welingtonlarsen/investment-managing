import { TextField as MUITextField } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { TBrokerageOrderPropType } from '../../../../hooks/useBrokerageNoteForm';

type TProps = {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  field: TBrokerageOrderPropType;
  index?: number;
};

export const TextField: React.FC<TProps> = ({ register, field, id, label, index }) => {
  const splitedField = String(field).split('.');

  const parsedField = index === 0 || index ? `${splitedField[0]}.${index}.${splitedField[1]}` : field;

  return (
    <MUITextField
      sx={{ display: 'flex' }}
      {...register(String(parsedField))}
      InputLabelProps={{ shrink: true }}
      id={id}
      label={label}
      variant="outlined"
    />
  );
};
