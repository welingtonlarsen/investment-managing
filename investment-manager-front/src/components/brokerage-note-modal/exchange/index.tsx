import { TProps } from '../types.ts';
import { Box, Grid } from '@mui/material';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';
import { formatMoney } from '../../../utils/money.utils.ts';

const Exchange = ({ brokerageNote }: TProps) => (
  <Grid item>
    <SectionHeader title="Bolsa" />
    <Box sx={{ ml: 5, mt: 2 }}>
      <ItemValue
        item="Taxa de termo/opções"
        value={formatMoney(brokerageNote?.financialSummary.exchange.termOrOptionsFee || 0)}
      />
      <ItemValue item="Taxa A.N.A" value={formatMoney(brokerageNote?.financialSummary.exchange.anaFee || 0)} />
      <ItemValue item="Emolumentos" value={formatMoney(brokerageNote?.financialSummary.exchange.fees || 0)} />
      <ItemValue item="Total Bovespa | Soma" value={formatMoney(brokerageNote?.financialSummary.exchange.total || 0)} />
    </Box>
  </Grid>
);

export default Exchange;
