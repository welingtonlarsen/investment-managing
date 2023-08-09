/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useNavigate } from 'react-router-dom';
import { TBrokerageOrder } from '../hooks/useBrokerageNoteForm';
import { useHttpService } from './http-service';

export const useBrokerageNoteService = () => {
  const httpService = useHttpService();
  const navigate = useNavigate();

  async function create(brokerageOrder: TBrokerageOrder) {
    const success = await httpService.post<TBrokerageOrder>(brokerageOrder);
    if (success) {
      alert('Nota cadastrada com sucesso.');
    } else {
      alert('Erro ao cadastrar nota! Comunique o suporte e tente novamente mais tarde.');
    }
    navigate('/brokeragenotes/table');
  }

  return { create };
};

export default useBrokerageNoteService;
