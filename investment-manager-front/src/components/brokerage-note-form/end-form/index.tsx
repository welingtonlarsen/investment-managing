import { Control, Controller, UseFormRegister } from 'react-hook-form';
import { TBrokerageOrder } from '../../../hooks/useBrokerageNoteForm';
import { Box, TextField, Grid, Typography, MenuItem } from '@mui/material';
import React from 'react';

type TProps = {
  register: UseFormRegister<TBrokerageOrder>;
  control: Control<TBrokerageOrder, unknown>;
};

export const EndForm: React.FC<TProps> = ({ register, control }) => {
  return (
    <Box>
      <Typography sx={{ mb: 4 }} variant="h6" gutterBottom>
        Final
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            type="date"
            sx={{ display: 'flex' }}
            {...register('financialSummary.netDate')}
            InputLabelProps={{ shrink: true }}
            id="outlined-basic"
            label="Líquido para"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            sx={{ display: 'flex' }}
            {...register('financialSummary.netTotalValue', { valueAsNumber: true })}
            InputLabelProps={{ shrink: true }}
            id="outlined-basic"
            label="Valor total"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          {/* <TextField sx={{display: 'flex'}} {...register('financialSummary.netDebitOrCredit')} InputLabelProps={{shrink: true}} id="outlined-basic" label="D/C" variant="outlined" /> */}
          <Controller
            name="financialSummary.netDebitOrCredit"
            control={control}
            render={({ field }) => (
              <TextField
                select
                sx={{ display: 'flex' }}
                label="D/C"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                {...field} // Passa os atributos do campo do Controller para o TextField
              >
                <MenuItem key="DEBIT" value="DEBIT">
                  Débito
                </MenuItem>
                <MenuItem key="CREDIT" value="CREDIT">
                  Credito
                </MenuItem>
              </TextField>
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EndForm;
