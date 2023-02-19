import { Box, Button, Container, CssBaseline, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import Header from '../header'
import GeneralInformation from './general-information'
import Orders from './orders'
import BusinessSumary from './business-sumary'

const steps = ['Informações gerais', 'Ordens', 'Resumo dos negócios']

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(2)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const previousStep = () => {
    setActiveStep(activeStep - 1)
  }

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <GeneralInformation handleNextCallback={nextStep} />
      case 1:
        return <Orders handlePrevious={previousStep} handleNextCallback={nextStep} />
      case 2:
        return <BusinessSumary handleNextCallback={nextStep} handlePrevious={previousStep} />
      default:
        throw new Error('Unknown step')
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
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {getStepContent(activeStep)}
        </Paper>
      </Container>
    </>
  )
}

export default RegistrationForm
