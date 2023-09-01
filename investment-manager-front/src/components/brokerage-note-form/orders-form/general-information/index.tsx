import { Box, Typography, Grid } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { TBrokerageNote } from '../../../../hooks/useBrokerageNoteForm';
import { NumberField } from '../../@components/number-field';
import { DateField } from '../../@components/date-field';
import { TextField } from '../../@components/text-field';

type TProps = {
  register: UseFormRegister<TBrokerageNote>;
};

export const GeneralInformation: React.FC<TProps> = ({ register }) => {
  return (
    <Box>
      <Typography sx={{ mb: 4 }} variant="h6" gutterBottom>
        Informações gerais
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={2}>
          <NumberField
            register={register}
            id="brokerageOrderNumber"
            label="Número"
            field="generalInformation.brokerageOrderNumber"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={2}>
          <DateField register={register} id="tradingFlorDate" label="Data" field="generalInformation.tradingFlorDate" />
        </Grid>
        <Grid item xs={12} sm={6} lg={2}>
          <TextField register={register} id="clientId" label="Cliente" field="generalInformation.clientId" />
        </Grid>
      </Grid>
    </Box>
  );
};
