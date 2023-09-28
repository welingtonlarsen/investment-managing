import { TBrokerageNote } from '../hooks/useBrokerageNoteForm';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios-instance.ts';

export const useBrokerageNoteService = () => {
  async function create(brokerageOrder: TBrokerageNote) {
    await axiosInstance.post<TBrokerageNote>('brokeragenotes', brokerageOrder);
  }

  async function deleteNote(brokerageNoteId: number) {
    await axiosInstance.delete(`brokeragenotes/${brokerageNoteId}`);
  }

  async function getById(brokerageNoteId: number): Promise<AxiosResponse<TBrokerageNote>> {
    return await axiosInstance.get(`brokeragenotes/${brokerageNoteId}`);
  }

  async function update(id: number, brokerageNote: TBrokerageNote) {
    return await axiosInstance.put(`brokeragenotes/${id}`, brokerageNote);
  }

  return { create, deleteNote, getById, update };
};

export default useBrokerageNoteService;
