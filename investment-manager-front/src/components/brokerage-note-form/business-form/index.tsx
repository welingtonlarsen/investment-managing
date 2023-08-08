import { Box, TextField, Button, Grid, IconButton, Typography } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';
import { TBrokerageOrder } from '../../../hooks/useBrokerageNoteForm';
import React from 'react';

type TProps = {
    register: UseFormRegister<TBrokerageOrder>
}

const BusinessForm: React.FC<TProps> = ({register}) => {
    return (
        <Box>
            <Typography sx={{mb: 4}} variant="h6" gutterBottom>
                Resumo dos negócios
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('businessSummary.debentures', {valueAsNumber: true})} InputLabelProps={{shrink: true}} id="outlined-basic" label="Debêntures" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('businessSummary.sellInCash', {valueAsNumber: true})} InputLabelProps={{shrink: true}} id="outlined-basic" label="Vendas à vista" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('businessSummary.buyInCash', {valueAsNumber: true})} InputLabelProps={{shrink: true}} id="outlined-basic" label="Compras à vista" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('businessSummary.optionsBuy', {valueAsNumber: true})} InputLabelProps={{shrink: true}} id="outlined-basic" label="Opções - compras" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('businessSummary.optionsSell', {valueAsNumber: true})} InputLabelProps={{shrink: true}} id="outlined-basic" label="Opções - vendas" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('businessSummary.termOptions', {valueAsNumber: true})} InputLabelProps={{shrink: true}} id="outlined-basic" label="Operações à termo" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('businessSummary.federalSecurities', {valueAsNumber: true})} InputLabelProps={{shrink: true}} id="outlined-basic" label="Títulos públicos" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TextField sx={{display: 'flex'}} {...register('businessSummary.operationValues', {valueAsNumber: true})} InputLabelProps={{shrink: true}} id="outlined-basic" label="Valor das operações" variant="outlined" />
                </Grid>
            </Grid>
        </Box>
    )
};

export default BusinessForm;