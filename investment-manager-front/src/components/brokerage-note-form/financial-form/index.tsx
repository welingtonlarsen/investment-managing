import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../../../hooks/useBrokerageNoteForm";
import { Box, TextField, Button, Grid, IconButton, Typography } from '@mui/material';

type TProps = {
    register: UseFormRegister<FormValues>
}

const FinancialForm: React.FC<TProps> = ({register}) => {


    const renderClearing = () => 
        <Box>
            <Typography sx={{mb: 4}} variant="h6" gutterBottom>
                Clearing
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('financialSummary.clearing.operationsNetValue')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Valor líquido das operações" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('financialSummary.clearing.settlementFee')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Taxa de liquidação" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('financialSummary.clearing.registryFee')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Taxa de registro" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('financialSummary.clearing.totalCblc')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Total CBLC" variant="outlined" />
                </Grid>
            </Grid>
        </Box>
    
    const renderExchange = () =>
        <Box>
            <Typography sx={{my: 4}} variant="h6" gutterBottom>
                Bolsa
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('financialSummary.exchange.termOrOptionsFee')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Taxa de termo/opções" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('financialSummary.exchange.anaFee')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Taxa A.N.A." variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('financialSummary.exchange.fees')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Emolumentos" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('financialSummary.exchange.total')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Total Bovespa" variant="outlined" />
                </Grid>
            </Grid>
        </Box>

    return (
        <>
            {renderClearing()}
            {renderExchange()}
        </>
    )
}

export default FinancialForm;