import BrokerageNoteForm from '../../components/brokerage-note-form';
import { TBrokerageOrder } from '../../hooks/useBrokerageNoteForm';
import useBrokerageNoteService from '../../service/useBrokerageService';
import {useNavigate} from "react-router-dom";

const BrokerageNoteFormPage = () => {
  const navigate = useNavigate();
  const { create, update } = useBrokerageNoteService();

  async function submitCallback(formValues: TBrokerageOrder): Promise<void> {
    if (formValues.id) {
      await update(formValues.id, formValues)
      navigate('/brokeragenotes/table');
    } else {
      await create(formValues);
    }
  }

  return (
    <>
      <BrokerageNoteForm submitCallback={submitCallback} />
    </>
  );
};

export default BrokerageNoteFormPage;
