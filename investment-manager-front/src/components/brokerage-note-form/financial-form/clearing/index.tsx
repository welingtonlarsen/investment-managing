import { Box, Typography, Grid } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { TBrokerageNote, TBrokerageOrderPropType } from '../../../../hooks/useBrokerageNoteForm';
import { NumberField } from '../../@components/number-field';

type TProps = {
  register: UseFormRegister<TBrokerageNote>;
};

export const Clearing: React.FC<TProps> = ({ register }) => {
  const fields: { id: string; label: string; field: TBrokerageOrderPropType }[] = [
    {
      id: 'operationsNetValue',
      label: 'Valor líquido das operações',
      field: 'financialSummary.clearing.operationsNetValue',
    },
    {
      id: 'settlementFee',
      label: 'Taxa de liquidação',
      field: 'financialSummary.clearing.settlementFee',
    },
    {
      id: 'registryFee',
      label: 'Taxa de registro',
      field: 'financialSummary.clearing.registryFee',
    },
    {
      id: 'totalCblc',
      label: 'Total CBLC',
      field: 'financialSummary.clearing.totalCblc',
    },
  ];

  return (
    <Box>
      <Typography sx={{ mb: 4 }} variant="h6" gutterBottom>
        Clearing
      </Typography>
      <Grid container spacing={2}>
        {fields.map(({ id, label, field }, index) => (
          <Grid key={index} item xs={12} sm={6} lg={3}>
            <NumberField register={register} id={id} label={label} field={field} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
