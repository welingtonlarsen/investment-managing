import { UseFormRegister } from "react-hook-form";
import { TBrokerageOrder } from "../../../hooks/useBrokerageNoteForm";
import { Box, TextField, Grid, Typography } from '@mui/material';
import React from "react";

type TProps = {
    register: UseFormRegister<TBrokerageOrder>
}

export const OperationalCostsForm: React.FC<TProps> = ({register}) => {
    return <Box>
                <Typography sx={{mb: 4}} variant="h6" gutterBottom>
                    Despesas
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.operationalCosts.operationalFee')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Taxa operacional" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.operationalCosts.execution')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Execução" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.operationalCosts.custody')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Taxa de custódia" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.operationalCosts.taxes')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Impostos" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.operationalCosts.irrf')} InputLabelProps={{shrink: true}} id="outlined-basic" label="IRRF" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.operationalCosts.others')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Outros" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.operationalCosts.totalCosts')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Total Custos / Despesas" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
}

export default OperationalCostsForm;