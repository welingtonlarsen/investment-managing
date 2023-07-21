export type TBrokerageNote = {
    id: number,
    date: string,
    exchange: string,
    buy: number,
    sell: number,
    cost: number,
    net: number,
    debitOrCredit: string
}