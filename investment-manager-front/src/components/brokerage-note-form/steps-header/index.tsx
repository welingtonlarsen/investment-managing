import { Box, Stepper, Step, StepLabel } from '@mui/material';
import React from 'react';

type TProps = {
  currentStep: number;
  steps: string[];
};

const StepsHeader: React.FC<TProps> = ({ currentStep, steps }) => {
  return (
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
};

export default StepsHeader;
