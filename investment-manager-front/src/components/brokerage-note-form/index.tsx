/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { FormValues, useBrokerageNoteForm } from '../../hooks/useBrokerageNoteForm';
import OrdersForm from './orders-form';
import { useRef, useState } from 'react';
import BusinessForm from './business-form';
import FinancialForm from './financial-form';
import OperationalCostsForm from './operational-costs-form';
import EndForm from './end-form';

const steps = [
    'Ordens',
    'Negócios',
    'Financeiro',
    'Despesas',
    'Final'
];

const BrokerageNoteForm = () => {

    const {form, fields, append, handleSubmit, register: formRegister} = useBrokerageNoteForm();
    // TODO: Pass to custom hook
    const {current: register} = useRef(formRegister);
    
    const [currentStep, setCurrentStep] = useState(0);

    const onSubmit = (data: FormValues) => {
        console.log(data);
    }

    const shouldShowNextButton = () => currentStep !== 0;

    const handlePreviousClick = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    const handleNextClick = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else if(currentStep === steps.length - 1) {
            alert('Submeter form')
        }
    }

    const renderNavigation = () => {
        const nextButtonText = currentStep === steps.length - 1 ? 'Salvar' : 'Próximo';
        const nextButtonVariant = currentStep === steps.length - 1 ? 'contained' : 'outlined';

        return (
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                {shouldShowNextButton() && <Button onClick={handlePreviousClick} type='button' variant='outlined' color='error'>Voltar</Button>}
            <Button onClick={handleNextClick} type='button' variant={nextButtonVariant} color="success" sx={{ml: 2}}>{nextButtonText}</Button>
        </Box>
        )
    } 
        
    
    const renderStepsHeader = () =>
        <Box sx={{ width: '100%', mb: 8 }}>
            <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>

    return (
        <>
            <Box
                component="form"
                sx={{margin: {
                    xs: 2,
                    sm: 1,
                    md: 10
                }}}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                >   
                    {renderStepsHeader()}
                    <Button type='submit'>Fim</Button>
                    {currentStep === 0 && <OrdersForm fields={fields} append={append} register={register} />}
                    {currentStep === 1 && <BusinessForm register={register}/>}
                    {currentStep === 2 && <FinancialForm register={register}/>}
                    {currentStep === 3 && <OperationalCostsForm register={register} />}
                    {currentStep === 4 && <EndForm register={register} />}
                    {renderNavigation()}
                </Box>
            </>

      );
}

export default BrokerageNoteForm;