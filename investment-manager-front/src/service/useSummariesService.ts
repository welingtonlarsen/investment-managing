import { BrokerageNotesSummaries } from '../types/brokerage-notes-summaries.type';
import { useHttpService } from './http/http-service';
import { PaginatedResponse } from './http/paginated-response.type';

export const useSummariesService = () => {
  const httpService = useHttpService();

  async function getAll(): Promise<PaginatedResponse<BrokerageNotesSummaries>> {
    const result = await httpService.get<BrokerageNotesSummaries>('brokeragenotes/summaries');
    return result;
  }

  return { getAll };
};
