import { TStock } from '../types/stock.type';
import axios from 'axios';
import { PaginatedResponse } from './paginated-response.type.ts';

export const useStockService = () => {
  async function getAllIgnoringPagination(): Promise<TStock[]> {
    const { data } = await axios.get<PaginatedResponse<TStock>>(`http://localhost:3000/stocks`, {
      params: {
        page: 1,
        limit: 100,
      },
    });
    // TODO: Ignore or implement pagination? Currently we've been using a big limit to avoid it
    return data.items;
  }

  return { getAllIgnoringPagination };
};
