import { Box, Typography, Grid } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { TBrokerageNote, TBrokerageOrderPropType } from '../../../../hooks/useBrokerageNoteForm';
import { NumberField } from '../../@components/number-field';

type TProps = {
  register: UseFormRegister<TBrokerageNote>;
};

export const Exchange: React.FC<TProps> = ({ register }) => {
  const fields: { id: string; label: string; field: TBrokerageOrderPropType }[] = [
    {
      id: 'termOrOptionsFee',
      label: 'Taxa de termo/opções',
      field: 'financialSummary.exchange.termOrOptionsFee',
    },
    {
      id: 'anaFee',
      label: 'Taxa A.N.A',
      field: 'financialSummary.exchange.anaFee',
    },
    {
      id: 'fees',
      label: 'Emolumentos',
      field: 'financialSummary.exchange.fees',
    },
    {
      id: 'total',
      label: 'Total Bovespa',
      field: 'financialSummary.exchange.total',
    },
  ];

  return (
    <Box>
      <Typography sx={{ my: 4 }} variant="h6" gutterBottom>
        Bolsa
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
