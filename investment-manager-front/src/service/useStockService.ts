import { TStock } from '../types/stock.type';
import { useHttpService } from './http/http-service';

export const useStockService = () => {
  const httpService = useHttpService();

  async function getAllIgnoringPagination(): Promise<TStock[]> {
    const result = await httpService.get<TStock>('stocks');
    // TODO: Ignore pagination
    return result.items;
  }

  return { getAllIgnoringPagination };
};
