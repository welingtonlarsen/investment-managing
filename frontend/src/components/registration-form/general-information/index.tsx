import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { Control, Controller, FieldErrorsImpl, useForm, UseFormReturn } from "react-hook-form";
import InputMask from "react-input-mask";

type Inputs = {
    brokerageOrderNumber: string,
    tradingFlorDate: string,
    clientId: string,
}

type Props = {
    control: Control<Inputs, any>
    errors: Partial<FieldErrorsImpl<{
        brokerageOrderNumber: string,
        tradingFlorDate: string,
        clientId: string,
    }>>
}

const GeneralInformation: React.FC<Props> = ({control, errors}) => {
    return(
        <>
            <Typography variant="h6" gutterBottom>
                Informações Gerais
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <Controller 
                    control={control}
                    name="brokerageOrderNumber"
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            error={!!errors.brokerageOrderNumber}
                            helperText={errors.brokerageOrderNumber?.message}
                            required
                            id="brokerageOrderNumber"
                            label="Numero"
                            fullWidth
                            autoComplete="cc-name"
                            variant="standard"
                        />
                    )}
                />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Controller 
                        control={control}
                        name="tradingFlorDate"
                        defaultValue=""
                        render={({ field }) => (                        
                            <InputMask
                                mask="99/99/9999"
                                value={field.value}
                                disabled={false}
                                onChange={(value): void => {
                                    field.onChange(value)
                                }}
                            >
                                <TextField
                                    // {...field}
                                    error={!!errors.tradingFlorDate}
                                    helperText={errors.tradingFlorDate?.message}
                                    required
                                    id="tradingFlorDate"
                                    label="Data"
                                    fullWidth
                                    autoComplete="cc-number"
                                    variant="standard"
                                />
                            </InputMask>
                        )}
                    />
                </Grid>

                
                <Grid item xs={12} md={6}>
                    <Controller 
                        control={control}
                        name="clientId"
                        defaultValue=""
                        render={({ field }) => (                        
                            <TextField
                                {...field}
                                error={!!errors.clientId}
                                helperText={errors.clientId?.message}
                                required
                                id="clientId"
                                label="Código do cliente"
                                fullWidth
                                autoComplete="cc-number"
                                variant="standard"
                            />
                        )}
                    />
                </Grid>        
            </Grid>
        </>
    );
}

export default GeneralInformation;