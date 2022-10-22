export interface BrokerageOrderRepository {
  save(entity: any): Promise<any>;
}
