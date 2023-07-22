import BrokerageNotesTable from '../../components/brokerage-notes-table';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';


export default function BrokerageNotesPage() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Fab sx={{mb: 3}} size='small' color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            <BrokerageNotesTable />
        </Box>
        
    );
}
        