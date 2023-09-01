import { Box, Grid } from '@mui/material';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';
import { TProps } from '../types.ts';
const BusinessSummary = ({ brokerageNote }: TProps) => (
  <Grid item>
    <SectionHeader title="Resumo dos negócios" />
    <Box sx={{ ml: 5, mt: 2 }}>
      <ItemValue item="Debêntures" value={brokerageNote?.businessSummary.debentures} />
      <ItemValue item="Vendas à vista" value={brokerageNote?.businessSummary.sellInCash} />
      <ItemValue item="Compras à vista" value={brokerageNote?.businessSummary.buyInCash} />
      <ItemValue item="Opções - compras" value={brokerageNote?.businessSummary.optionsBuy} />
      <ItemValue item="Opções - vendas" value={brokerageNote?.businessSummary.optionsSell} />
      <ItemValue item="Operações à termo" value={brokerageNote?.businessSummary.termOptions} />
      <ItemValue item="Valor títulos públicos" value={brokerageNote?.businessSummary.federalSecurities} />
      <ItemValue item="Valor das operações" value={brokerageNote?.businessSummary.operationValues} />
    </Box>
  </Grid>
);

export default BusinessSummary;
