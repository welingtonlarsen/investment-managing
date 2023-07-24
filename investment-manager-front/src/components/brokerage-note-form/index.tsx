/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import AddCircleIcon from '@mui/icons-material/AddCircle';


type FormValues = {
    number: number,
    date: string,
    client: string
    orders: {
        market: string,
        buyOrSell: string,
        marketType: string,
        title: string,
        quantity: number | undefined,
        price: number | undefined,
        total: number | undefined,
        debitOrCredit: string
    }[]
}

const defaultOrder = {
    market: '',
    buyOrSell: '',
    marketType: '',
    title: '',
    quantity: undefined,
    price: undefined,
    total: undefined,
    debitOrCredit: ''
}

const BrokerageNoteForm = () => {

    const form = useForm<FormValues>({
        defaultValues: {
            number: undefined,
            date: '',
            client: '',
            orders: [
                defaultOrder
            ]
        }
    })

    const {register, handleSubmit, control} = form

    const { fields, append } = useFieldArray({
        control,
        name: 'orders'
    })

    const onSubmit = (data: FormValues) => {
        console.log(data);
    }

    const onIncrementOrder = () => {
        append(defaultOrder);
    }

    const renderGeneralInformation = () => {
        return (
            <Box>
                <Typography sx={{mb: 2}} variant="h6" gutterBottom>
                    Informações gerais
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField sx={{display: 'flex'}} {...register('number')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Número" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField sx={{display: 'flex'}} {...register('date')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Data" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField sx={{display: 'flex'}} {...register('client')} InputLabelProps={{shrink: true}} id="outlined-basic" label="Cliente" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        )
    }

    const renderOrders = () => {
        return (
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{my: 2}} variant="h6" gutterBottom>
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

    return (
        <>
            <Box
                component="form"
                sx={{mt: 3}}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                >   
                    <Button type='submit'>Fim</Button>
                    {renderGeneralInformation()}
                    {renderOrders()}
                </Box>
            </>

      );
}

export default BrokerageNoteForm;