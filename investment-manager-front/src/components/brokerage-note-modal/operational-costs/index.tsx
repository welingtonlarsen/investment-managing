import { TProps } from '../types.ts';
import { Box, Grid } from '@mui/material';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';
import { formatMoney } from '../../../utils/money.utils.ts';

const OperationalCosts = ({ brokerageNote }: TProps) => (
  <Grid item>
    <SectionHeader title="Custos operacionais" />
    <Box sx={{ ml: 5, mt: 2 }}>
      <ItemValue
        item="Taxa operacional"
        value={formatMoney(brokerageNote?.financialSummary.operationalCosts.operationalFee || 0)}
      />
      <ItemValue item="Execução" value={formatMoney(brokerageNote?.financialSummary.operationalCosts.execution || 0)} />
      <ItemValue
        item="Taxa de custódia"
        value={formatMoney(brokerageNote?.financialSummary.operationalCosts.custody || 0)}
      />
      <ItemValue item="Impostos" value={formatMoney(brokerageNote?.financialSummary.operationalCosts.taxes || 0)} />
      <ItemValue item="IRRF" value={formatMoney(brokerageNote?.financialSummary.operationalCosts.irrf || 0)} />
      <ItemValue item="Outros" value={formatMoney(brokerageNote?.financialSummary.operationalCosts.others || 0)} />
      <ItemValue item="Total" value={formatMoney(brokerageNote?.financialSummary.operationalCosts.totalCosts || 0)} />
    </Box>
  </Grid>
);

export default OperationalCosts;
