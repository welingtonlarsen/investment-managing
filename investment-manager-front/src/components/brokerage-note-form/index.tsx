/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';


type FormValues = {
    number: number,
    date: string,
    client: string
    orders: {
        market: string,
        buyOrSell: string,
        marketType: string,
        title: string,
        quantity: number,
        price: number,
        total: number,
        debitOrCredit: string
    }[]
}

const BrokerageNoteForm = () => {

    const form = useForm<FormValues>({
        defaultValues: {
            number: undefined,
            date: '',
            client: '',
            orders: [
                {
                    market: '',
                    buyOrSell: '',
                    marketType: '',
                    title: '',
                    quantity: undefined,
                    price: undefined,
                    total: undefined,
                    debitOrCredit: ''
                }
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

    const renderGeneralInformation = () => {
        return (
            <Box sx={{maxWidth: '700px'}}>
                <Typography sx={{mb: 2}} variant="h6" gutterBottom>
                    Informações gerais
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', sm: 'row'}}}>
                    <TextField {...register('number')} InputLabelProps={{shrink: true}} sx={{mb: 2}} id="outlined-basic" label="Número" variant="outlined" />
                    <TextField {...register('date')} InputLabelProps={{shrink: true}} sx={{mb: 2}} id="outlined-basic" label="Data" variant="outlined" />
                    <TextField {...register('client')} InputLabelProps={{shrink: true}} sx={{mb: 2}} id="outlined-basic" label="Cliente" variant="outlined" />
                </Box>
            </Box>
        )
    }

    const renderOrders = () => {
        return (
            <Box>
                <Typography sx={{my: 2}} variant="h6" gutterBottom>
                    Ordens
                </Typography>
                {
                    fields.map((field, index) => {
                            return (
                                <Box key={index} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                    <TextField inputProps={{...register(`orders.${index}.market`)}} label="Mercado" variant="outlined" InputLabelProps={{shrink: true}} />
                                    <TextField inputProps={{...register(`orders.${index}.buyOrSell`)}} label="C/V" variant="outlined" sx={{maxWidth: 100}} InputLabelProps={{shrink: true}} />
                                    <TextField inputProps={{...register(`orders.${index}.marketType`)}} label="Tipo mercado" variant="outlined" InputLabelProps={{shrink: true}} />
                                    <TextField inputProps={{...register(`orders.${index}.title`)}} label="Título" variant="outlined" InputLabelProps={{shrink: true}} />
                                    <TextField inputProps={{...register(`orders.${index}.quantity`)}} label="Quantidade" variant="outlined"  sx={{maxWidth: 100}} InputLabelProps={{shrink: true}} />
                                    <TextField inputProps={{...register(`orders.${index}.price`)}} label="Preço" variant="outlined"  sx={{maxWidth: 150}} InputLabelProps={{shrink: true}} />
                                    <TextField inputProps={{...register(`orders.${index}.total`)}} label="Total" variant="outlined"  sx={{maxWidth: 150}} InputLabelProps={{shrink: true}} />
                                    <TextField inputProps={{...register(`orders.${index}.debitOrCredit`)}} label="D/C" variant="outlined"  sx={{maxWidth: 100}} InputLabelProps={{shrink: true}} />
                                </Box>
                        )
                    })
                }
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