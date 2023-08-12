import axios, { isAxiosError, HttpStatusCode } from 'axios';
import { PaginatedResponse } from './paginated-response.type';

export function useHttpService() {
  async function post<T>(data: T): Promise<boolean> {
    try {
      await axios.post<T>('http://localhost:3000/brokerage-order', data);
      return true;
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === HttpStatusCode.BadRequest) {
        alert(`Problema interno, comunique o suporte com a seguinte mensagem: \n\n${error.response.data.message}`);
        return false;
      }
      alert('Erro desconhecido, comunique o suporte!');
      return false;
    }
  }

  async function get<T>(path: string): Promise<PaginatedResponse<T>> {
    try {
      const { data } = await axios.get<PaginatedResponse<T>>(`http://localhost:3000/${path}`);
      return data;
    } catch (e) {
      console.log(e);
      return null as unknown as PaginatedResponse<T>;
    }
  }

  return { post, get };
}
