import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type TProps = {
  open: boolean;
  handleCloseModal: () => void;
  handleConfirm: () => Promise<void>;
};

export default function AlertModal({ open, handleCloseModal, handleConfirm }: TProps) {
  return (
    <Dialog open={open} onClose={handleCloseModal} data-testid="delete-alert">
      <DialogTitle id="alert-dialog-title">{'Deletar nota de corretagem?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ao confirmar a nota de corretagem será deletada permanentemente e não será possível recuperar posteriormente!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>Cancelar</Button>
        <Button onClick={handleConfirm} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
