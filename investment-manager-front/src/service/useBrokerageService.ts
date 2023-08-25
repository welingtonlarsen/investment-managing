/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigate } from 'react-router-dom';
import { TBrokerageOrder } from '../hooks/useBrokerageNoteForm';
import { useHttpService } from './http/http-service';
// eslint-disable-next-line import/named
import axios, {AxiosResponse} from 'axios';

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

  // @ts-ignore
  async function getById(brokerageNoteId: number): Promise<AxiosResponse<TBrokerageOrder>> {
    return await axios.get(`http://localhost:3000/brokeragenotes/${brokerageNoteId}`)
  }

  return { create, deleteNote, getById };
};

export default useBrokerageNoteService;
