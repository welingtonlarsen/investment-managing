import { TProps } from '../types.ts';
import { Box, Grid } from '@mui/material';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';

const Clearing = ({ brokerageNote }: TProps) => (
  <Grid item>
    <SectionHeader title="Clearing" />
    <Box sx={{ ml: 5, mt: 2 }}>
      <ItemValue
        item="Valor líquido das operações"
        value={brokerageNote?.financialSummary.clearing.operationsNetValue}
      />
      <ItemValue item="Taxa de liquídação" value={brokerageNote?.financialSummary.clearing.settlementFee} />
      <ItemValue item="Taxa de registro" value={brokerageNote?.financialSummary.clearing.registryFee} />
      <ItemValue item="Total CBLC" value={brokerageNote?.financialSummary.clearing.totalCblc} />
    </Box>
  </Grid>
);

export default Clearing;
