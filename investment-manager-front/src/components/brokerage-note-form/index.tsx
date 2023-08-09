/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-misused-promises */
import Box from '@mui/material/Box';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { TBrokerageOrder, useBrokerageNoteForm } from '../../hooks/useBrokerageNoteForm';
import OrdersForm from './orders-form';
import { useRef, useState } from 'react';
import BusinessForm from './business-form';
import FinancialForm from './financial-form';
import OperationalCostsForm from './operational-costs-form';
import EndForm from './end-form';

const steps = ['Ordens', 'Negócios', 'Financeiro', 'Despesas', 'Final'];

interface TBrokerageNoteFormProps {
  submitCallback(formValues: TBrokerageOrder): Promise<void>;
}

const BrokerageNoteForm: React.FC<TBrokerageNoteFormProps> = ({ submitCallback }) => {
  const { fields, append, handleSubmit, register: formRegister, control } = useBrokerageNoteForm();
  // TODO: Pass to custom hook
  const { current: register } = useRef(formRegister);

  const [currentStep, setCurrentStep] = useState(0);

  const renderNavigation = () => {
    const shouldShowPreviousButton = currentStep !== 0;
    const shouldShowNextButton = currentStep !== steps.length - 1;
    const shouldShowSubmitButton = currentStep === steps.length - 1;

    const handlePreviousClick = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };

    const handleNextClick = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        {shouldShowPreviousButton && (
          <Button onClick={handlePreviousClick} type="button" variant="outlined" color="error">
            Voltar
          </Button>
        )}
        {shouldShowNextButton && (
          <Button onClick={handleNextClick} type="button" variant="outlined" color="success" sx={{ ml: 2 }}>
            Próximo
          </Button>
        )}
        {shouldShowSubmitButton && (
          <Button type="submit" variant="contained" color="success" sx={{ ml: 2 }}>
            Salvar
          </Button>
        )}
      </Box>
    );
  };

  const renderStepsHeader = () => (
    <Box sx={{ width: '100%', mb: 8 }}>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );

  return (
    <>
      <Box
        component="form"
        sx={{
          margin: {
            xs: 2,
            sm: 1,
            md: 10,
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(submitCallback)}
      >
        {renderStepsHeader()}
        <Button type="submit">Fim</Button>
        {currentStep === 0 && <OrdersForm control={control} fields={fields} append={append} register={register} />}
        {currentStep === 1 && <BusinessForm register={register} />}
        {currentStep === 2 && <FinancialForm register={register} />}
        {currentStep === 3 && <OperationalCostsForm register={register} />}
        {currentStep === 4 && <EndForm control={control} register={register} />}
        {renderNavigation()}
      </Box>
    </>
  );
};

export default BrokerageNoteForm;
