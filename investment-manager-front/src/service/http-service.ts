import axios, { isAxiosError, HttpStatusCode } from 'axios';

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

  return { post };
}
