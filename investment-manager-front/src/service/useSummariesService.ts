import { BrokerageNoteSummary } from '../types/brokerage-notes-summaries.type';
import { PaginatedResponse } from './paginated-response.type.ts';
import axiosInstance from './axios-instance.ts';

export const useSummariesService = () => {
  // TODO: Pagination options
  async function getAll(): Promise<PaginatedResponse<BrokerageNoteSummary>> {
    const { data } = await axiosInstance.get<PaginatedResponse<BrokerageNoteSummary>>(`brokeragenotes/summaries`, {
      params: {
        page: 1,
        limit: 100,
      },
    });
    return data;
  }

  return { getAll };
};
