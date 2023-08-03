import { FieldArrayWithId, UseFieldArrayAppend, UseFormRegister } from "react-hook-form";
import { FormValues, defaultOrder } from "../../../hooks/useBrokerageNoteForm";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from "react";

type TProps = {
    fields: FieldArrayWithId<FormValues, "orders", "id">[]
    append: UseFieldArrayAppend<FormValues, "orders">
    register: UseFormRegister<FormValues>
}

const OrdersForm: React.FC<TProps> = ({fields, append, register}) => {
    
    const onIncrementOrder = () => {
        append(defaultOrder);
    }

    const renderGeneralInformation = () => {
        return (
            <Box>
                <Typography sx={{mb: 4}} variant="h6" gutterBottom>
                    Informações gerais
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField sx={{display: 'flex'}} {...register('generalInformation.number')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Número" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField sx={{display: 'flex'}} {...register('generalInformation.date')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Data" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField sx={{display: 'flex'}} {...register('generalInformation.client')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Cliente" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        )
    }

    const renderOrders = () => {
        return (
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{my: 4}} variant="h6" gutterBottom>
                    Ordens
                </Typography>
                {
                    fields.map((_, index) => {
                            return (
                                    <Grid key={index} sx={{mb: 4}} container spacing={2} >
                                        <Grid item xs={12} sm={6} lg={2}>
                                            <TextField sx={{display: 'flex'}} inputProps={{...register(`orders.${index}.market`)}} label="Mercado" variant="outlined" InputLabelProps={{shrink: true}} />
                                        </Grid>
                                        <Grid item xs={12} sm={3} lg={1}>
                                            <TextField sx={{display: 'flex'}} inputProps={{...register(`orders.${index}.buyOrSell`)}} label="C/V" variant="outlined" InputLabelProps={{shrink: true}} />
                                        </Grid>
                                        <Grid item xs={12} sm={3} lg={2}>
                                            <TextField sx={{display: 'flex'}} inputProps={{...register(`orders.${index}.marketType`)}} label="Tipo mercado" variant="outlined" InputLabelProps={{shrink: true}} />
                                        </Grid>
                                        <Grid item xs={12} sm={6} lg={2}>
                                            <TextField sx={{display: 'flex'}} inputProps={{...register(`orders.${index}.title`)}} label="Título" variant="outlined" InputLabelProps={{shrink: true}} />
                                        </Grid>
                                        <Grid item xs={12} sm={3} lg={1}>
                                            <TextField sx={{display: 'flex'}} inputProps={{...register(`orders.${index}.quantity`)}} label="Quantidade" variant="outlined" InputLabelProps={{shrink: true}} />
                                        </Grid>
                                        <Grid item xs={12} sm={3} lg={1}>
                                            <TextField sx={{display: 'flex'}} inputProps={{...register(`orders.${index}.price`)}} label="Preço" variant="outlined" InputLabelProps={{shrink: true}} />
                                        </Grid>
                                        <Grid item xs={12} sm={3} lg={1}>
                                            <TextField sx={{display: 'flex'}} inputProps={{...register(`orders.${index}.total`)}} label="Total" variant="outlined"  InputLabelProps={{shrink: true}} />
                                        </Grid>
                                        <Grid item xs={12} sm={3} lg={1}>
                                            <TextField sx={{display: 'flex'}} inputProps={{...register(`orders.${index}.debitOrCredit`)}} label="D/C" variant="outlined" InputLabelProps={{shrink: true}} />
                                        </Grid>
                                    </Grid>
                        )
                    })
                }
                <Box sx={{display: 'flex', justifyContent: 'center', my: -2}}>
                    <IconButton size="small" sx={{display: 'flex'}} aria-label="fingerprint" color="success" onClick={onIncrementOrder}>
                        <AddCircleIcon fontSize="large"/>
                    </IconButton>
                </Box>
            </Box>
        )
    }


    return (<>
        {renderGeneralInformation()}  
        {renderOrders()}     
    </>       
    )
}

export default OrdersForm;