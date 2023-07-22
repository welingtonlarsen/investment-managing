import { Box, Step, StepLabel, Stepper } from "@mui/material";
import BrokerageNoteForm from "../../components/brokerage-note-form";

const steps = [
    'Informações gerais',
    'Negociações',
    'Negócios',
    'Financeiro',
    'Custos',
    'Final',
];

const BrokerageNoteFormPage = () => {
    return( 
    <>
        <Box sx={{ width: '100%' }}>
                <Stepper activeStep={2} alternativeLabel>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
        
        <Box sx={{
            margin: {
                xs: 2,
                sm: 1,
                md: 10
            }
        }}>
            <BrokerageNoteForm />
        </Box>
    </>
    
    )
}

export default BrokerageNoteFormPage;