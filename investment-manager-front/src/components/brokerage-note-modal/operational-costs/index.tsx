import { TProps } from '../types.ts';
import { Box, Grid } from '@mui/material';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';

const OperationalCosts = ({ brokerageNote }: TProps) => (
  <Grid item>
    <SectionHeader title="Custos operacionais" />
    <Box sx={{ ml: 5, mt: 2 }}>
      <ItemValue item="Taxa operacional" value={brokerageNote?.financialSummary.operationalCosts.operationalFee} />
      <ItemValue item="Execução" value={brokerageNote?.financialSummary.operationalCosts.execution} />
      <ItemValue item="Taxa de custódia" value={brokerageNote?.financialSummary.operationalCosts.custody} />
      <ItemValue item="Impostos" value={brokerageNote?.financialSummary.operationalCosts.taxes} />
      <ItemValue item="IRRF" value={brokerageNote?.financialSummary.operationalCosts.irrf} />
      <ItemValue item="Outros" value={brokerageNote?.financialSummary.operationalCosts.others} />
      <ItemValue item="Total" value={brokerageNote?.financialSummary.operationalCosts.totalCosts} />
    </Box>
  </Grid>
);

export default OperationalCosts;
