import { UseFormRegister } from "react-hook-form";
import { TBrokerageOrder } from "../../../hooks/useBrokerageNoteForm";
import { Box, TextField, Grid, Typography } from '@mui/material';
import React from "react";

type TProps = {
    register: UseFormRegister<TBrokerageOrder>
}

export const EndForm: React.FC<TProps> = ({register}) => {
    return <Box>
                <Typography sx={{mb: 4}} variant="h6" gutterBottom>
                    Final
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.netDate')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Líquido para" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.netTotalValue')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Valor total" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TextField sx={{display: 'flex'}} {...register('financialSummary.netDebitOrCredit')} InputLabelProps={{shrink: true}} id="outlined-basic" label="D/C" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
}

export default EndForm;