import { UseFormRegister } from 'react-hook-form';
import { TBrokerageNote, TBrokerageOrderPropType } from '../../../hooks/useBrokerageNoteForm';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { NumberField } from '../@components/number-field';

type TProps = {
  register: UseFormRegister<TBrokerageNote>;
};

export const OperationalCostsForm: React.FC<TProps> = ({ register }) => {
  const fields: { id: string; label: string; field: TBrokerageOrderPropType }[] = [
    {
      id: 'operationalFee',
      label: 'Taxa operacional',
      field: 'financialSummary.operationalCosts.operationalFee',
    },
    {
      id: 'execution',
      label: 'Execução',
      field: 'financialSummary.operationalCosts.execution',
    },
    {
      id: 'custody',
      label: 'Taxa de custódia',
      field: 'financialSummary.operationalCosts.custody',
    },
    {
      id: 'taxes',
      label: 'Impostos',
      field: 'financialSummary.operationalCosts.taxes',
    },
    {
      id: 'irrf',
      label: 'IRRF',
      field: 'financialSummary.operationalCosts.irrf',
    },
    {
      id: 'others',
      label: 'Outros',
      field: 'financialSummary.operationalCosts.others',
    },
    {
      id: 'totalCosts',
      label: 'Total Custos / Despesas',
      field: 'financialSummary.operationalCosts.totalCosts',
    },
  ];
  return (
    <Box>
      <Typography sx={{ mb: 4 }} variant="h6" gutterBottom>
        Despesas
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

export default OperationalCostsForm;
