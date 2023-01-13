import { AppBar, Box, Button, Container, createTheme, CssBaseline, Paper, Step, StepLabel, Stepper, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Header from "../header";
import GeneralInformation from "./general-information";
import Orders from "./orders";
import BusinessSumary from "./business-sumary";

type Inputs = {
    brokerageOrderNumber: string,
    tradingFlorDate: string,
    clientId: string,
}

type OrdersInput = {
    market: string
}

const theme = createTheme();

const steps = ['Informações gerais', 'Ordens', 'Review your order'];

const schema = yup.object({
    brokerageOrderNumber: yup.string().required('Número da nota é obrigatório.'),
    tradingFlorDate: yup.string().required('Data da nota é obrigatório.'),
    clientId: yup.string().required('Id do cliente é obrigatório.'),
  }).required();

const schemaOrders = yup.object({
    market: yup.string().required('Negociação é obrigatório.'),
})
const schemaBusinessSumary = yup.object({
    market: yup.string().required('ABC.....'),
})

const RegistrationForm = () => {
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });
    const { control: ordersControl, handleSubmit: ordersHandleSubmit, formState: { errors: ordersErrors } } = useForm<OrdersInput>({
        resolver: yupResolver(schemaOrders)
    });
    const { control: businessSumaryControl, handleSubmit: businessSumaryHandleSubmit, formState: { errors: businessSumaryErrors } } = useForm<any>({
        resolver: yupResolver(schemaOrders)
    });

    const [activeStep, setActiveStep] = useState(1)

    const [formState, setFormState] = useState<Inputs & OrdersInput>({
        brokerageOrderNumber: '', 
        tradingFlorDate: '',
        clientId: '',
        market: ''
    })

    const handleNext: any = (data: any) => {
        console.log('apsokdopasdk')
        console.log(data)
        //console.log(errors)
        setFormState({...formState, ...data})
        setActiveStep(activeStep + 1);
    }

    const handleNextSubmit = (step: number) => {
        switch(step) {
            case 0:
                handleSubmit(handleNext)();
                break;
            case 1:
                ordersHandleSubmit(handleNext)();
                break;
            case 2:
                businessSumaryHandleSubmit(handleNext)();
                break;
            default:
                throw new Error('Unknown step');
        }
    }


    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    function getStepContent(step: number) {
        switch (step) {
          case 0:
            return <GeneralInformation control={control} errors={errors}/>;
          case 1:
            return <Orders />;
          case 2:
            return <BusinessSumary />;
          default:
            throw new Error('Unknown step');
        }
      }


    return (
        <>
            <CssBaseline />
            <Header />
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {
                            steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>
                    
                    {getStepContent(activeStep)}

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            Voltar
                        </Button>
                        )}

                        <Button
                            variant="contained"
                            onClick={() => handleNextSubmit(activeStep)}
                            sx={{ mt: 3, ml: 1 }}
                        >
                            {activeStep === steps.length - 1 ? 'Salvar' : 'Next'}
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </>
      );
}

export default RegistrationForm;