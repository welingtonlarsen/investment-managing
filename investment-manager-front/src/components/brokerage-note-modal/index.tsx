import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import useBrokerageNoteService from '../../service/useBrokerageService.ts';
import { TBrokerageNote } from '../../hooks/useBrokerageNoteForm.ts';
import { Box, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import GeneralInformation from './general-information';
import BusinessSummary from './business-summary';
import Clearing from './clearing';
import Exchange from './exchange';
import OperationalCosts from './operational-costs';
import FinalInformation from './final-information';
import Orders from './orders';
import { formatToMUI } from '../../utils/date.utils.ts';

type TProps = {
  brokerageNoteId: number | null;
  open: boolean;
  handleClose: () => void;
  openDeleteConfirmationModal: (id: number) => void;
};
export default function BrokerageNoteModal({
  brokerageNoteId,
  open,
  handleClose,
  openDeleteConfirmationModal,
}: TProps) {
  const navigate = useNavigate();
  const { getById } = useBrokerageNoteService();
  const [brokerageNote, setBrokerageNote] = useState<TBrokerageNote | null>(null);

  useEffect(() => {
    (async () => {
      if (brokerageNoteId !== null) {
        const result = await getById(brokerageNoteId);
        setBrokerageNote(result.data);
      }
    })();
  }, [brokerageNoteId]);

  const handleDelete = () => {
    if (!brokerageNoteId) throw new Error('There is not brokerage note id');
    openDeleteConfirmationModal(brokerageNoteId);
  };

  const handleEdit = () => {
    navigate('/form', {
      state: {
        ...brokerageNote,
        generalInformation: {
          ...brokerageNote?.generalInformation,
          tradingFlorDate: formatToMUI(brokerageNote?.generalInformation.tradingFlorDate || ''),
        },
        financialSummary: {
          ...brokerageNote?.financialSummary,
          netDate: formatToMUI(brokerageNote?.financialSummary.netDate || ''),
        },
      },
    });
  };

  return (
    <Dialog data-testid="brokerage-note-modal" fullWidth={true} maxWidth={'xl'} open={open} onClose={handleClose}>
      <DialogTitle>Nota de corretagem</DialogTitle>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
        <Button
          onClick={handleDelete}
          size="small"
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={{ mr: 2 }}
        >
          Deletar
        </Button>
        <Button onClick={handleEdit} size="small" color="info" variant="outlined" startIcon={<EditIcon />}>
          Editar
        </Button>
      </Box>

      <Box>
        <GeneralInformation brokerageNote={brokerageNote} />
        <Orders brokerageNote={brokerageNote} />
        <Grid container sx={{ width: '100%', mt: 5 }}>
          <BusinessSummary brokerageNote={brokerageNote} />
          <Clearing brokerageNote={brokerageNote} />
          <Exchange brokerageNote={brokerageNote} />
          <OperationalCosts brokerageNote={brokerageNote} />
        </Grid>
        <FinalInformation brokerageNote={brokerageNote} />
      </Box>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
