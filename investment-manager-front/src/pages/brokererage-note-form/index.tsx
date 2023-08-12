import BrokerageNoteForm from '../../components/brokerage-note-form';
import { TBrokerageOrder } from '../../hooks/useBrokerageNoteForm';
import useBrokerageNoteService from '../../service/useBrokerageService';

const BrokerageNoteFormPage = () => {
  const { create } = useBrokerageNoteService();

  async function submitCallback(formValues: TBrokerageOrder): Promise<void> {
    console.log(formValues);
    await create(formValues);
  }

  return (
    <>
      <BrokerageNoteForm submitCallback={submitCallback} />
    </>
  );
};

export default BrokerageNoteFormPage;
