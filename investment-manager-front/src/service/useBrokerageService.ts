/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { isAxiosError, HttpStatusCode } from 'axios';
import { TBrokerageOrder } from '../hooks/useBrokerageNoteForm';

/*
TODO: 
- Enviar requesição para o backend usando AXIOS
- Ir para tela de erro caso a requisição falhe
- Ir para tela de relatórios caso sucesso, (alert de sucesso antes)
*/
export const useBrokerageNoteService = () => {
  async function create(brokerageOrder: TBrokerageOrder) {
    try {
      console.log(brokerageOrder);
      await axios.post('http://localhost:3000/brokerage-order', brokerageOrder);
      alert('inside service');
    } catch (error) {
      if (isAxiosError(error)) {
        console.log('axios');
        if (error.response?.status === HttpStatusCode.BadRequest) {
          alert(error.response.data.message);
          return;
        }
      }
      console.log(error);
      alert('erro desconhecido');
    }
  }

  return { create };
};

export default useBrokerageNoteService;
