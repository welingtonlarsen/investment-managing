import { TextField as MUITextField, MenuItem } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { TBrokerageNote, TBrokerageOrderPropType } from '../../../../hooks/useBrokerageNoteForm';

type TProps = {
  id: string;
  label: string;
  field: TBrokerageOrderPropType;
  control: Control<TBrokerageNote, unknown>;
  index?: number;
  options: { key: string; value: string; title: string }[];
};

export const SelectField: React.FC<TProps> = ({ field, id, label, control, index, options }) => {
  const indexField = String(field).split('.');

  const name = index === 0 || index ? `${indexField[0]}.${index}.${indexField[1]}` : field;

  return (
    <Controller
      name={name as any}
      control={control}
      render={({ field: props }) => (
        <MUITextField
          id={id}
          select
          sx={{ display: 'flex' }}
          label={label}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          {...props} // Passa os atributos do campo do Controller para o TextField
        >
          {options.map(({ key, value, title }) => (
            <MenuItem key={key} value={value}>
              {title}
            </MenuItem>
          ))}
        </MUITextField>
      )}
    />
  );
};
