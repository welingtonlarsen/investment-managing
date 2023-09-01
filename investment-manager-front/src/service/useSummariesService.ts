import { BrokerageNoteSummary } from '../types/brokerage-notes-summaries.type';
import { PaginatedResponse } from './paginated-response.type.ts';
import axios from 'axios';

export const useSummariesService = () => {
  // TODO: Pagination options
  async function getAll(): Promise<PaginatedResponse<BrokerageNoteSummary>> {
    const { data } = await axios.get<PaginatedResponse<BrokerageNoteSummary>>(
      `http://localhost:3000/brokeragenotes/summaries`,
      {
        params: {
          page: 1,
          limit: 100,
        },
      },
    );
    return data;
  }

  return { getAll };
};
