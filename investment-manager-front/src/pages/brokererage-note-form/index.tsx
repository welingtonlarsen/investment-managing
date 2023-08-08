import BrokerageNoteForm from "../../components/brokerage-note-form";
import { TBrokerageOrder } from "../../hooks/useBrokerageNoteForm";
import useBrokerageNoteService from "../../service/useBrokerageService";

const BrokerageNoteFormPage = () => {

    const { create } = useBrokerageNoteService()

    const submitCallback = (formValues: TBrokerageOrder) => {
        create(formValues)
    }

    return( 
    <>
        <BrokerageNoteForm submitCallback={submitCallback} />
    </>
    
    )
}

export default BrokerageNoteFormPage;