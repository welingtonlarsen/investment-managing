import { UseFormRegister } from 'react-hook-form';
import { TBrokerageOrder } from '../../../hooks/useBrokerageNoteForm';
import { Box, TextField, Grid, Typography } from '@mui/material';
import { Clearing } from './clearing';

type TProps = {
  register: UseFormRegister<TBrokerageOrder>;
};

const FinancialForm: React.FC<TProps> = ({ register }) => {
  const renderExchange = () => (
    <Box>
      <Typography sx={{ my: 4 }} variant="h6" gutterBottom>
        Bolsa
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            type="number"
            sx={{ display: 'flex' }}
            {...register('financialSummary.exchange.termOrOptionsFee', { valueAsNumber: true })}
            InputLabelProps={{ shrink: true }}
            id="outlined-basic"
            label="Taxa de termo/opções"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            type="number"
            sx={{ display: 'flex' }}
            {...register('financialSummary.exchange.anaFee', { valueAsNumber: true })}
            InputLabelProps={{ shrink: true }}
            id="outlined-basic"
            label="Taxa A.N.A."
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            type="number"
            sx={{ display: 'flex' }}
            {...register('financialSummary.exchange.fees', { valueAsNumber: true })}
            InputLabelProps={{ shrink: true }}
            id="outlined-basic"
            label="Emolumentos"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            type="number"
            sx={{ display: 'flex' }}
            {...register('financialSummary.exchange.total', { valueAsNumber: true })}
            InputLabelProps={{ shrink: true }}
            id="outlined-basic"
            label="Total Bovespa"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <Clearing register={register} />
      {renderExchange()}
    </>
  );
};

export default FinancialForm;
