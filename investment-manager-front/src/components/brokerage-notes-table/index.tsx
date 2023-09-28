import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSummariesService } from '../../service/useSummariesService';
import { useEffect, useState } from 'react';
import { BrokerageNoteSummary } from '../../types/brokerage-notes-summaries.type';
import SearchIcon from '@mui/icons-material/Search';
import AlertModal from '../alert-modal';
import useBrokerageNoteService from '../../service/useBrokerageService';
import BrokerageNoteModal from '../brokerage-note-modal';
import { removeTimeFromDate } from '../../utils/date.utils.ts';
import { useBrokerageNotesTableModals } from './useBrokerageNotesTableModals.ts';
import { formatMoney } from '../../utils/money.utils.ts';

export default function BrokerageNotesTable() {
  const { deleteNote } = useBrokerageNoteService();
  const { getAll } = useSummariesService();
  const { modalsStates, dispatch } = useBrokerageNotesTableModals();
  const [showDeleteErrorAlert, setShowDeleteErrorAlert] = useState(false);
  const [brokerageNotesSummaries, setBrokerageNotesSummaries] = useState<BrokerageNoteSummary[]>([]);

  useEffect(() => {
    (async () => {
      const summaries = await getAll();
      setBrokerageNotesSummaries(summaries.items);
    })();
  }, []);

  const openDeleteConfirmationModal = (id: number) => {
    dispatch({ type: 'OPEN_DELETE_CONFIRMATION_MODAL', selectedItem: id });
  };

  const handleOpenBrokerageNoteModal = (id: number) => {
    dispatch({ type: 'OPEN_BROKERAGE_NOTE_MODAL', selectedItem: id });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'CLOSE_DELETE_CONFIRMATION_MODAL' });
  };

  const handleCloseBrokerageNoteModal = () => {
    dispatch({ type: 'CLOSE_BROKERAGE_NOTE_MODAL' });
  };

  const handleDeleteItem = async (): Promise<void> => {
    if (modalsStates.selectedItem !== null) {
      try {
        await deleteNote(modalsStates.selectedItem);
        const updatedBrokerageNotesSummary = brokerageNotesSummaries.filter(
          (item) => item.id !== modalsStates.selectedItem,
        );
        setBrokerageNotesSummaries(updatedBrokerageNotesSummary);
      } catch (e) {
        setShowDeleteErrorAlert(true);
      }
    }
    dispatch({ type: 'CLOSE_ALL_MODALS' });
  };

  return (
    <>
      <BrokerageNoteModal
        brokerageNoteId={modalsStates.selectedItem}
        open={modalsStates.isBrokerageNoteModalOpened}
        handleClose={handleCloseBrokerageNoteModal}
        openDeleteConfirmationModal={openDeleteConfirmationModal}
      />
      <AlertModal
        open={modalsStates.isDeleteConfirmationModalOpened}
        handleCloseModal={handleCloseModal}
        handleConfirm={handleDeleteItem}
      />
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TableContainer>
            <Alert
              onClose={() => setShowDeleteErrorAlert(false)}
              severity="error"
              variant="filled"
              sx={{ maxWidth: 650, margin: 'auto', mb: 2, display: showDeleteErrorAlert ? '' : 'none' }}
            >
              Não foi possível deletar a nota de corretagem! Entre em contato com o suporte.
            </Alert>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell align="left">Corretora</TableCell>
                  <TableCell align="left">Compras</TableCell>
                  <TableCell align="left">Vendas</TableCell>
                  <TableCell align="left">Custos</TableCell>
                  <TableCell align="left">Líquido</TableCell>
                  <TableCell align="left">D/C</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {brokerageNotesSummaries.map((row) => (
                  <TableRow tabIndex={-1} key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{removeTimeFromDate(String(row.date))}</TableCell>
                    <TableCell align="left">{row.exchange}</TableCell>
                    <TableCell align="left">{formatMoney(row.purchases)}</TableCell>
                    <TableCell align="left">{formatMoney(row.sales)}</TableCell>
                    <TableCell align="left">{formatMoney(row.costs)}</TableCell>
                    <TableCell align="left">{formatMoney(row.net)}</TableCell>
                    <TableCell align="left">{row.debitOrCredit}</TableCell>
                    <TableCell sx={{ display: 'flex', flex: 'row', justifyContent: 'space-around' }}>
                      <IconButton
                        aria-label="open brokerage note modal button"
                        onClick={() => handleOpenBrokerageNoteModal(row.id)}
                      >
                        <SearchIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete brokerage note button"
                        onClick={() => openDeleteConfirmationModal(row.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={10}
          rowsPerPage={10}
          page={1}
          onPageChange={() => console.log('')}
          onRowsPerPageChange={() => console.log('')}
        /> */}
        </Paper>
      </Box>
    </>
  );
}
