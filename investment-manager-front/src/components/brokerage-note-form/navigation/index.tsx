import { Box, Button } from '@mui/material';
import React from 'react';

type TProps = {
  currentStep: number;
  steps: string[];
  setCurrentStep: (newCurrentStep: number) => void;
};

const Navigation: React.FC<TProps> = ({ currentStep, steps, setCurrentStep }) => {
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

export default Navigation;
