import { TProps } from '../types.ts';
import { Box, Grid } from '@mui/material';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';

const Exchange = ({ brokerageNote }: TProps) => (
  <Grid item>
    <SectionHeader title="Bolsa" />
    <Box sx={{ ml: 5, mt: 2 }}>
      <ItemValue item="Taxa de termo/opções" value={brokerageNote?.financialSummary.exchange.termOrOptionsFee} />
      <ItemValue item="Taxa A.N.A" value={brokerageNote?.financialSummary.exchange.anaFee} />
      <ItemValue item="Emolumentos" value={brokerageNote?.financialSummary.exchange.fees} />
      <ItemValue item="Total Bovespa | Soma" value={brokerageNote?.financialSummary.exchange.total} />
    </Box>
  </Grid>
);

export default Exchange;
