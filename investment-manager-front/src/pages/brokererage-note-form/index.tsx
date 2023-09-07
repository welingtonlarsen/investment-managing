import BrokerageNoteForm from '../../components/brokerage-note-form';
import { TBrokerageNote } from '../../hooks/useBrokerageNoteForm';
import useBrokerageNoteService from '../../service/useBrokerageService';
import { useNavigate } from 'react-router-dom';
import { HttpStatusCode, isAxiosError } from 'axios';

const BrokerageNoteFormPage = () => {
  const navigate = useNavigate();
  const { create, update } = useBrokerageNoteService();

  async function submitCallback(formValues: TBrokerageNote): Promise<void> {
    try {
      if (formValues.id) {
        await update(formValues.id, formValues);
        navigate('/table');
      } else {
        await create(formValues);
        alert('Nota cadastrada com sucesso.');
        navigate('/table');
      }
    } catch (e) {
      if (isAxiosError(e) && e.response?.status === HttpStatusCode.BadRequest) {
        alert('Verifique se todos os campos estão informados corretamente!');
      } else {
        alert('Erro ao cadastrar ou atualizazr a nota! Comunique o suporte e tente novamente mais tarde.');
      }
    }
  }

  return (
    <>
      <BrokerageNoteForm submitCallback={submitCallback} />
    </>
  );
};

export default BrokerageNoteFormPage;
