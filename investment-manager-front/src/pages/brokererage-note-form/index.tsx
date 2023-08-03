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
            <BrokerageNoteForm />
    </>
    
    )
}

export default BrokerageNoteFormPage;