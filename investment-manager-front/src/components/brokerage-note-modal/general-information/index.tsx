import { Box } from '@mui/material';
import { removeTimeFromDate } from '../../../../utils/date.utils.ts';
import * as React from 'react';
import { SectionHeader } from '../section-header';

const GeneralInformation = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <SectionHeader title="Informações Gerais" />
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', pl: 5, mt: 2 }}>
        <ItemValue item="Número da nota" value={brokerageNote?.generalInformation.brokerageOrderNumber} />
        <ItemValue
          item="Data pregão"
          value={removeTimeFromDate(brokerageNote?.generalInformation.tradingFlorDate || '')}
        />
        <ItemValue item="Cliente" value={brokerageNote?.generalInformation.clientId} />
      </Box>
    </Box>
  );
};

export default GeneralInformation;
