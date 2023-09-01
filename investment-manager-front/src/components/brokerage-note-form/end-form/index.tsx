import { Control, UseFormRegister } from 'react-hook-form';
import { TBrokerageNote } from '../../../hooks/useBrokerageNoteForm';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { DateField } from '../@components/date-field';
import { NumberField } from '../@components/number-field';
import { SelectField } from '../@components/select-field';

type TProps = {
  register: UseFormRegister<TBrokerageNote>;
  control: Control<TBrokerageNote, unknown>;
};

export const EndForm: React.FC<TProps> = ({ register, control }) => {
  return (
    <Box>
      <Typography sx={{ mb: 4 }} variant="h6" gutterBottom>
        Final
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <DateField register={register} id="netDate" label="Líquido para" field="financialSummary.netDate" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <NumberField
            register={register}
            id={'netTotalValue'}
            label="Valor total"
            field="financialSummary.netTotalValue"
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <SelectField
            id={`financialSummary.netDebitOrCredit`}
            label="D/C"
            field={'financialSummary.netDebitOrCredit'}
            control={control}
            options={[
              { key: 'DEBIT', value: 'DEBIT', title: 'Débito' },
              { key: 'CREDIT', value: 'CREDIT', title: 'Crédito' },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EndForm;
