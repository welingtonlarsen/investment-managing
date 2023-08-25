import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {parseBuySellToSymbol} from "../../utils/parses.utils.ts";
import {TOrder} from "../../hooks/useBrokerageNoteForm.ts";

export default function Orders({orders}: {orders: TOrder[]}) {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>Negociação</TableCell>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>C/V</TableCell>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>Mercado</TableCell>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>Específicação</TableCell>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>Ativo</TableCell>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>Quantidade</TableCell>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>Preço</TableCell>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>Total</TableCell>
                        <TableCell align="center" sx={{ border: 'none', fontWeight: 'bold' }}>D/C</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow
                            key={order.id}
                            sx={{ 'td, th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {order.market}
                            </TableCell>
                            <TableCell align="center">{parseBuySellToSymbol(order.buyOrSell)}</TableCell>
                            <TableCell align="center">{order.marketType}</TableCell>
                            <TableCell align="center">{order.stock?.specification}</TableCell>
                            <TableCell align="center">{order.stock?.symbol}</TableCell>
                            <TableCell align="center">{order.quantity}</TableCell>
                            <TableCell align="center">{order.price}</TableCell>
                            <TableCell align="center">{order.total}</TableCell>
                            <TableCell align="center">{order.debitOrCredit.charAt(0)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}