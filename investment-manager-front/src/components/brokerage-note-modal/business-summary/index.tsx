import { Box, Grid } from '@mui/material';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';
import { TProps } from '../types.ts';
import { formatMoney } from '../../../utils/money.utils.ts';
const BusinessSummary = ({ brokerageNote }: TProps) => (
  <Grid item>
    <SectionHeader title="Resumo dos negócios" />
    <Box sx={{ ml: 5, mt: 2 }}>
      <ItemValue item="Debêntures" value={formatMoney(brokerageNote?.businessSummary.debentures || 0)} />
      <ItemValue item="Vendas à vista" value={formatMoney(brokerageNote?.businessSummary.sellInCash || 0)} />
      <ItemValue item="Compras à vista" value={formatMoney(brokerageNote?.businessSummary.buyInCash || 0)} />
      <ItemValue item="Opções - compras" value={formatMoney(brokerageNote?.businessSummary.optionsBuy || 0)} />
      <ItemValue item="Opções - vendas" value={formatMoney(brokerageNote?.businessSummary.optionsSell || 0)} />
      <ItemValue item="Operações à termo" value={formatMoney(brokerageNote?.businessSummary.termOptions || 0)} />
      <ItemValue
        item="Valor títulos públicos"
        value={formatMoney(brokerageNote?.businessSummary.federalSecurities || 0)}
      />
      <ItemValue item="Valor das operações" value={formatMoney(brokerageNote?.businessSummary.operationValues || 0)} />
    </Box>
  </Grid>
);

export default BusinessSummary;
