import { TProps } from '../types.ts';
import { Box, Grid } from '@mui/material';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';
import { formatMoney } from '../../../utils/money.utils.ts';

const Clearing = ({ brokerageNote }: TProps) => (
  <Grid item>
    <SectionHeader title="Clearing" />
    <Box sx={{ ml: 5, mt: 2 }}>
      <ItemValue
        item="Valor líquido das operações"
        value={formatMoney(brokerageNote?.financialSummary.clearing.operationsNetValue || 0)}
      />
      <ItemValue
        item="Taxa de liquídação"
        value={formatMoney(brokerageNote?.financialSummary.clearing.settlementFee || 0)}
      />
      <ItemValue
        item="Taxa de registro"
        value={formatMoney(brokerageNote?.financialSummary.clearing.registryFee || 0)}
      />
      <ItemValue item="Total CBLC" value={formatMoney(brokerageNote?.financialSummary.clearing.totalCblc || 0)} />
    </Box>
  </Grid>
);

export default Clearing;
