import { TBrokerageNote } from '../hooks/useBrokerageNoteForm';
import axios, { AxiosResponse } from 'axios';

export const useBrokerageNoteService = () => {
  async function create(brokerageOrder: TBrokerageNote) {
    // TODO: Include base url to axios
    await axios.post<TBrokerageNote>('http://localhost:3000/brokeragenotes', brokerageOrder);
  }

  async function deleteNote(brokerageNoteId: number) {
    await axios.delete(`http://localhost:3000/brokeragenotes/${brokerageNoteId}`);
  }

  async function getById(brokerageNoteId: number): Promise<AxiosResponse<TBrokerageNote>> {
    return await axios.get(`http://localhost:3000/brokeragenotes/${brokerageNoteId}`);
  }

  async function update(id: number, brokerageNote: TBrokerageNote) {
    return await axios.put(`http://localhost:3000/brokeragenotes/${id}`, brokerageNote);
  }

  return { create, deleteNote, getById, update };
};

export default useBrokerageNoteService;
