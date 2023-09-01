import { TProps } from '../types.ts';
import { Box } from '@mui/material';
import { removeTimeFromDate } from '../../../utils/date.utils.ts';
import { ItemValue } from '../@components/item-value/item-value.tsx';
import { SectionHeader } from '../@components/section-header';

const FinalInformation = ({ brokerageNote }: TProps) => (
  <Box sx={{ width: '100%', mt: 3 }}>
    <SectionHeader title="Informações Finais" />
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', pl: 5, mt: 2 }}>
      <ItemValue item="Líquido para" value={removeTimeFromDate(brokerageNote?.financialSummary.netDate || '')} />
      <ItemValue item="Líquido para" value="data" />
      <ItemValue item="Total líquido" value={brokerageNote?.financialSummary.netTotalValue} />
      <ItemValue item="D/C" value={(brokerageNote?.financialSummary?.netDebitOrCredit || '').charAt(0)} />
    </Box>
  </Box>
);

export default FinalInformation;
