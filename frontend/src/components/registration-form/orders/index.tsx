import { Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { Control, Controller, FieldErrorsImpl, useForm, UseFormReturn } from "react-hook-form";
import InputMask from "react-input-mask";

type OrdersInput = {
    name: string
}

type Props = {
    control: Control<OrdersInput, any>
    errors: Partial<FieldErrorsImpl<{
        name: string
    }>>
}

const Orders: React.FC<Props> = ({control, errors}) => {
    return(
        <>
            <Typography variant="h6" gutterBottom>
                Ordens
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                <Controller 
                    control={control}
                    name="name"
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            error={!!errors.name}
                            helperText={errors.name?.message}
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
            </Grid>
        </>
    );
}

export default Orders;