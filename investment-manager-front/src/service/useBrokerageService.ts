/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigate } from 'react-router-dom';
import { TBrokerageOrder } from '../hooks/useBrokerageNoteForm';
import { useHttpService } from './http/http-service';
import axios, { isAxiosError, HttpStatusCode } from 'axios';

export const useBrokerageNoteService = () => {
  const httpService = useHttpService();
  const navigate = useNavigate();

  async function create(brokerageOrder: TBrokerageOrder) {
    const statusCode = await httpService.post<TBrokerageOrder>(brokerageOrder);
    if (statusCode === 201) {
      alert('Nota cadastrada com sucesso.');
      navigate('/brokeragenotes/table');
    } else if (statusCode === 400) {
      // TODO:
      console.log('implement');
    } else {
      alert('Erro ao cadastrar nota! Comunique o suporte e tente novamente mais tarde.');
      navigate('/brokeragenotes/table');
    }
  }

  async function deleteNote(brokerageNoteId: number) {
    try {
      await axios.delete(`http://localhost:3000/brokeragenotes/${brokerageNoteId}`);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  return { create, deleteNote };
};

export default useBrokerageNoteService;
