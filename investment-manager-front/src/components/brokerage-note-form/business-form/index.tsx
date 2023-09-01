import { Box, Grid, Typography } from '@mui/material';
import { NumberField } from '../@components/number-field';
import { UseFormRegister } from 'react-hook-form';
import { TBrokerageNote, TBrokerageOrderPropType } from '../../../hooks/useBrokerageNoteForm';
import React from 'react';

type TProps = {
  register: UseFormRegister<TBrokerageNote>;
};

const BusinessForm: React.FC<TProps> = ({ register }) => {
  const fields: { id: string; label: string; field: TBrokerageOrderPropType }[] = [
    {
      id: 'debentures',
      label: 'Debêntures',
      field: 'businessSummary.debentures',
    },
    {
      id: 'sellInCash',
      label: 'Vendas à vista',
      field: 'businessSummary.sellInCash',
    },
    {
      id: 'buyInCash',
      label: 'Compras à vista',
      field: 'businessSummary.buyInCash',
    },
    {
      id: 'optionsBuy',
      label: 'Opções - compras',
      field: 'businessSummary.optionsBuy',
    },
    {
      id: 'optionsSell',
      label: 'Opções - vendas',
      field: 'businessSummary.optionsSell',
    },
    {
      id: 'termOptions',
      label: 'Operações à termo',
      field: 'businessSummary.termOptions',
    },
    {
      id: 'federalSecurities',
      label: 'Títulos públicos',
      field: 'businessSummary.federalSecurities',
    },
    {
      id: 'operationValues',
      label: 'Valor das operações',
      field: 'businessSummary.operationValues',
    },
  ];

  return (
    <Box>
      <Typography sx={{ mb: 4 }} variant="h6" gutterBottom>
        Resumo dos negócios
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

export default BusinessForm;
