import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { brokerageNotes } from './brokerage-notes';
import { Box, TablePagination } from '@mui/material';

const formatMoney = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export default function BrokerageNotesTable() {
    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                <TableContainer>
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
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                            {brokerageNotes.map((row) => (
                            <TableRow
                            tabIndex={-1}
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.date}</TableCell>
                                <TableCell align="left">{row.exchange}</TableCell>
                                <TableCell align="left">{formatMoney(row.buy)}</TableCell>
                                <TableCell align="left">{formatMoney(row.sell)}</TableCell>
                                <TableCell align="left">{formatMoney(row.cost)}</TableCell>
                                <TableCell align="left">{formatMoney(row.net)}</TableCell>
                                <TableCell align="left">{row.debitOrCredit}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={10}
                    rowsPerPage={10}
                    page={1}
                    onPageChange={() => {}}
                    onRowsPerPageChange={() => {}}
                />
            </Paper>
        </Box>
      );
}
        